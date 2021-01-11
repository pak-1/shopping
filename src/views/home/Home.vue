<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    >
    </tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="contentscroll"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banner="banner"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      >
      </tab-control>
      <goods-list :goods="showgoods"></goods-list>
    </scroll>

    <back-top @click.native="backtop" v-show="isShowTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./chilldComps/HomeSwiper.vue";
import RecommendView from "./chilldComps/RecommendView.vue";
import FeatureView from "./chilldComps/FeatureView";
//
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/TabControl.vue";
import GoodsList from "components/content/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";

import { getHomeMultidata, getHomeGoods } from "network/home.js";
import { debounce } from "components/common/utils";
import {
  itemListenerMixin,
  backTopMixin,
} from "components/common/utils/mixin.js";
export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentgoods: "pop",
      tabControlOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  mixins: [itemListenerMixin, backTopMixin],
  created() {
    //请求轮播图，推荐数据
    this.getHomeMultidata();
    //请求商品展示数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;

    //关闭imgload监听
    this.$bus.$off("imgload", this.itemImgListener);
  },

  computed: {
    showgoods() {
      return this.goods[this.currentgoods].list;
    },
  },

  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentgoods = "pop";
          break;
        case 1:
          this.currentgoods = "new";
          break;
        case 2:
          this.currentgoods = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },

    // 监听滚动
    contentscroll(position) {
      // 1.是否显示backtop
      this.isShowTop = -position.y > 2000;

      // 2.决定tabcontrol是否吸顶
      this.isTabFixed = -position.y > this.tabControlOffsetTop;
    },
    loadMore() {
      // console.log("上拉加载更多");
      this.getHomeGoods(this.currentgoods);
    },

    //监听轮播图是否加载完成 获取tabControlOffsetTop
    swiperImgLoad() {
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 18px;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}

/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */

.tab-control {
  position: relative;
  z-index: 9;
}
</style>
