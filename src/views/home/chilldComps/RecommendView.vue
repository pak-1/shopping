<template>
  <div class="recommend">
    <div :key="index" v-for="(item, index) in recommends" class="rec-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  padding: 15px 0 25px;
  border-bottom: 10px solid #eee;
}
.rec-item {
  flex: 1;
  text-align: center;
}
.rec-item img {
  width: 75px;
  margin-bottom: 10px;
}
</style>
