<template>
  <div v-if="Object.keys(detailInfo).length != 0" class="DetailImgInfo">
    <div class="inf-desc">
      <div class="stat left"></div>
      <div class="desc clear-fix">{{ detailInfo.desc }}</div>
      <div class="end right"></div>
    </div>

    <div class="img-list">
      <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
      <div class="info-list">
        <img
          v-for="(item, index) in detailInfo.detailImage[0].list"
          :key="index"
          :src="item"
          alt=""
          @load="imgload"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailImgInfo",
  props: {
    detailInfo: Object,
    default() {
      return {};
    },
  },
  data() {
    return {};
  },
  methods: {
    imgload() {
      this.$emit("imgload");
    },
  },
};
</script>

<style scoped>
.DetailImgInfo {
  padding: 20px 0;
}
.inf-desc {
  padding: 0 15px;
}
.stat,
.end {
  position: relative;
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
}
.stat::before,
.end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}
.end::after {
  right: 0;
}
.desc {
  padding: 15px 0;
}
.info-list img {
  width: 100%;
}
.img-list {
  margin-top: 15px;
  padding: 0 15px;
}
</style>