<template>
  <div class="goods-item" @click="todetail">
    <img :src="showImg" alt="" @load="imgload" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="cfav">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
  methods: {
    imgload() {
      this.$bus.$emit("imgload");
    },
    todetail() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>

<style>
.goods-item {
  width: 46%;
  padding-top: 5px;
}
.goods-item img {
  width: 100%;
  border-radius: 12px;
}
.goods-info p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
}
.goods-info .price {
  margin: 0 20px 0 30px;
  color: var(--color-high-text);
}
.goods-info .cfav {
  position: relative;
  z-index: -1;
}
.goods-info .cfav::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 2px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  z-index: -1;
}
</style>
