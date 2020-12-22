<template>
  <div class="DetailShopInfo">
    <div class="row"></div>
    <div class="shopLogoAndName">
      <span class="shop-img"><img :src="shop.logo" alt="" /></span>
      <span class="shop-name">{{ shop.name }}</span>
    </div>
    <div class="shop-detail">
      <div class="sells">
        <div>
          <div class="blod">{{ shop.sells | sellCountFilter }}</div>
          <div class="text">总销量</div>
        </div>
        <div>
          <div class="blod">{{ shop.goodsCount }}</div>
          <div class="text">全部宝贝</div>
        </div>
      </div>
      <div class="score">
        <ul class="score-list">
          <li v-for="(item, index) in shop.score" class="score-item">
            <span>{{ item.name }}</span>
            <span :style="{ color: item.isBetter ? '#33D220' : '#FF281C' }">{{
              item.score
            }}</span>
            <span
              v-if="item.isBetter"
              :style="{
                backgroundColor: item.isBetter ? '#33D220' : '#FF281C',
                color: '#fff',
              }"
              >高</span
            >
            <span
              v-else
              :style="{
                backgroundColor: item.isBetter ? '#33D220' : '#ff281c',
                color: '#fff',
              }"
              >低</span
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="row"></div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  created() {},
  filters: {
    sellCountFilter(value) {
      let result = value;
      if (result > 10000) {
        return (result / 10000).toFixed(2) + "万";
      }
      return result;
    },
  },
};
</script>

<style scoped>
.DetailShopInfo {
}
.row {
  height: 5px;
  background-color: #eeeeee;
  margin-top: 25px;
}
.shopLogoAndName {
  position: relative;
  margin-top: 30px;
  margin-left: 15px;
}
.shop-img {
  display: block;
  border-radius: 50%;
  overflow: hidden;
  width: 60px;
  height: 60px;
}
.shop-img img {
  width: 60px;
  height: 60px;
}
.shop-name {
  position: absolute;
  top: 22px;
  left: 70px;
  font-size: 16px;
  font-weight: bold;
}
.shop-detail {
  margin-top: 30px;
  display: flex;
}
.sells {
  display: flex;
  flex: 1;
  text-align: center;
  justify-content: space-around;
  border-right: 2px solid #eee;
}
.sells > div {
  margin-top: 16px;
}
.blod {
  font-weight: bold;
  font-size: 20px;
}
.text {
  margin-top: 5px;
}
.score {
  flex: 1;
}
.score-list {
  margin-left: 15px;
}
.score-item {
  display: flex;
  margin-top: 5px;
}
.score-item span:first-child {
  flex: 2;
}
.score-item span {
  flex: 1;
}
.score-item span:last-child {
  flex: 0;
  margin-right: 10px;
}
</style>