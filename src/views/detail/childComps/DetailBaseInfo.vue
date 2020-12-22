<template>
  <div v-if="Object.keys(goods).length != 0" class="DetailBaseInfo">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-orther">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.DetailBaseInfo {
  padding: 10px 5px;
}
.info-title {
  font-size: 16px;
  font-weight: bold;
}
.info-price {
  margin-top: 10px;
}
.n-price {
  font-size: 32px;
  color: var(--color-high-text);
}
.o-price {
  text-decoration: line-through;
  margin: 0 6px;
}
.discount {
  padding: 1px 8px;
  background-color: var(--color-high-text);
  border-radius: 7px;
  font-size: 14px;
  color: #fff;
}
.info-orther {
  display: flex;
  justify-content: space-between;
  margin: 30px 0 25px;
  padding-bottom: 4px;
  border-bottom: 1px solid #eee;
}
.info-service {
  display: flex;
  justify-content: space-between;
}
.info-service-item img {
  width: 14px;
  margin: 4px 2px 0 0;
}
</style>
