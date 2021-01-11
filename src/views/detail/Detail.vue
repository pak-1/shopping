<template>
  <div class="detail">
    <detail-nav-bar @navBarClick="navBarClick" ref="detnavbar"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="scrollPositon">
      <detail-swiper :topImages="topimg"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-img-info
        :detailInfo="detailInfo"
        @imgload="imgload"
      ></detail-img-info>
      <detail-params-info
        :paramsInfo="paramsInfo"
        ref="params"
      ></detail-params-info>
      <detai-comment-info :comment-info="commentInfo" ref="comment" />
      <goods-list :goods="recommendList" ref="recommend" />
    </scroll>
    <back-top @click.native="backtop" v-show="isShowTop"></back-top>
    <detai-bottom-bar v-on:toShopCar="toShopCar"></detai-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper";
import { getDetail, Goods, Shop, getRecommend } from "network/detail.js";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailImgInfo from "./childComps/DetailImgInfo.vue";
import DetailParamsInfo from "./childComps/DetailParamsInfo.vue";
import DetaiCommentInfo from "./childComps/DetaiCommentInfo.vue";
import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/GoodsList.vue";
import DetaiBottomBar from "./childComps/DetaiBottomBar.vue";
import { debounce } from "components/common/utils";
import {
  itemListenerMixin,
  backTopMixin,
} from "components/common/utils/mixin.js";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topimg: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommendList: [],
      topY: [],
      themeTopY: null,
      currentIndex: 0,
    };
  },
  mixins: [itemListenerMixin, backTopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailImgInfo,
    DetailParamsInfo,
    DetaiCommentInfo,
    GoodsList,
    DetaiBottomBar,
  },
  created() {
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then(res => {
      let data = res.result;
      //轮播图
      this.topimg = data.itemInfo.topImages;
      // 商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 店铺信息
      this.shop = new Shop(data.shopInfo);
      // 商品详细信息
      this.detailInfo = data.detailInfo;
      // 参数信息
      this.paramsInfo = data.itemParams;
      // 评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });

    // 推荐列表数据
    getRecommend().then(res => {
      this.recommendList = res.data.list;
    });

    this.themeTopY = debounce(() => {
      this.topY = [];
      this.topY.push(0);
      this.topY.push(this.$refs.params.$el.offsetTop);
      this.topY.push(this.$refs.comment.$el.offsetTop);
      this.topY.push(this.$refs.recommend.$el.offsetTop);
      this.topY.push(this.topY[3] * 2);

      console.log(this.topY);
    }, 200);
  },
  destroyed() {
    this.$bus.$off("imgload", this.itemImgListener);
  },
  methods: {
    imgload() {
      this.refresh();
      this.themeTopY();
    },
    navBarClick(index) {
      this.$refs.scroll.scrollTo(0, -this.topY[index]);
    },
    toShopCar() {
      // 获取要添加到购物车的商品信息
      const product = {};
      product.image = this.topimg[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      // 将商品添加到购物车里
      this.$store.dispatch("addCart", product).then(res => {
        this.$toast.methods.show(res, 2000);
        console.log(this.$toast);
      });
    },
    scrollPositon(position) {
      const positionY = -position.y;
      const length = this.topY.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY > this.topY[i] &&
          positionY < this.topY[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.detnavbar.currentIndex = this.currentIndex;
        }
      }

      this.isShowTop = positionY > 2000;
    },
  },
};
</script>
<style scoped>
.detail {
  width: 100%;
}
.content {
  width: 100%;
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
.goods {
  width: 100%;
}</style
>;
