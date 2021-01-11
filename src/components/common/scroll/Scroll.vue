<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // 创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 开启内部元素可点击
      click: true,
      // 是否监听滚动
      probeType: this.probeType,
      // 是否监听上拉加载
      pullUpLoad: this.pullUpLoad,
    });
    // 监听滚动位置
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit("scroll", position);
    });

    // 监听上拉加载更多
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    // 回到顶部  time = 300 表示赋一个默认值
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },

    // 完成上拉加载更多
    finishPullUp() {
      this.scroll.finishPullUp();
    },

    // 刷新
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style></style>
