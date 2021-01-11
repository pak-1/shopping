<template>
  <div class="cart">
    <nav-bar class="cart-bar">
      <div slot="center">购物车({{ carLength }})</div>
    </nav-bar>

    <cart-list></cart-list>

    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { mapGetters } from "vuex";
import CartList from "./childComps/CartList.vue";
import BottomBar from "./childComps/BottomBar.vue";
export default {
  computed: {
    ...mapGetters({
      // 把 `carLength` 映射为 `this.$store.getters.getCartListLength`
      carLength: "getCartListLength",
    }),
  },
  components: {
    NavBar,
    CartList,
    BottomBar,
  },
};
</script>

<style scope>
.cart-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 18px;
}
.cart {
  height: 100vh;
}
</style>
