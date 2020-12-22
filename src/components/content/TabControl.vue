<template>
  <div class="tab-control">
    <div
      :key="index"
      v-for="(item, index) in titles"
      class="tab-control-item"
      @click="itemClick(index)"
    >
      <span :class="{ tabactive: currentIndex == index }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 17px;
  font-weight: 400;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  line-height: 40px;
  background-color: #fff;
}
.tabactive {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-high-text);
  padding: 5px 8px 5px;
}
</style>
