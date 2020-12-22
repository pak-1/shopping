<template>
  <div class="DetaiBottomBar">
    <div class="to-shop-car" v-on:click="toShopCar">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
export default {
  name: "DetaiBottomBar",
  data() {
    return {};
  },
  methods: {
    toShopCar() {
      this.$emit("toShopCar");
    },
  },
};
</script>

<style scoped>
.DetaiBottomBar {
  width: 100%;
  height: 49px;
  background-color: #ffffff;
  position: absolute;
  z-index: 99;
  bottom: 0;
  line-height: 49px;
  display: flex;
}
.DetaiBottomBar div {
  flex: 1;
  text-align: center;
}
.to-shop-car {
  color: rgb(0, 0, 0);
  background-color: #f3bc57;
}
.buy {
  color: #fff;
  background-color: #f57d6d;
}
</style>