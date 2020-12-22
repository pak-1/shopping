<template>
  <div class="detialNavBar">
    <nav-bar>
      <div slot="left" class="back" @click="backhome">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          class="title-item"
          v-for="(item, index) in titles"
          :key="index"
          :class="{ current: currentIndex == index }"
          @click="itemclick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    itemclick(index) {
      this.currentIndex = index;
      this.$emit("navBarClick", index);
    },
    // 返回
    backhome() {
      this.$router.back();
    },
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.detialNavBar {
  background-color: #fff;
}
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.current {
  color: var(--color-high-text);
}
.back {
  margin-top: 3px;
}
.back img {
  width: 17px;
}
</style>
