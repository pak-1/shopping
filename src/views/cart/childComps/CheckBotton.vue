<template>
  <div class="CheckBotton" :class="{ active: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckBotton",
  props: {
    isChecked: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.CheckBotton {
  width: 18px;
  height: 18px;
  background-color: #fff;
  border: 2px solid rgb(212, 212, 212);
  border-radius: 50%;
  margin: 0 8px;
}
.CheckBotton img {
  width: 16px;
  height: 16px;
  margin: -1px 0 0 -1px;
}
.active {
  background-color: var(--color-tint);
  border: 2px solid var(--color-tint);
}
</style>