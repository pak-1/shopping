<template>
  <div class="CartList">
    <scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(item, index) in CartList"
        :key="index"
        :product="item"
      ></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/Scroll.vue";
import CartListItem from "./CartListItem.vue";
export default {
  name: "CartList",
  data() {
    return {};
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  computed: {
    ...mapGetters(["CartList"]),
  },
  components: {
    Scroll,
    CartListItem,
  },
};
</script>

<style scoped>
.CartList {
  position: relative;
  height: calc(100% - 44px - 49px - 40px);
}
.content {
  /* position: absolute;
  top: 0px;
  bottom: 98px;
  left: 0;
  right: 0; */
  overflow: hidden;
  height: 100%;
}
</style>