<template>
  <div class="BottomBar">
    <div class="check-all">
      <!--  -->
      <check-botton
        :is-checked="checkedAll"
        @click.native="selectAll"
      ></check-botton>
      <span>全选</span>
    </div>
    <div class="total">合计:{{ totalPrice }}</div>
    <div class="calu">去计算:({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckBotton from "./CheckBotton.vue";
import { mapGetters } from "vuex";
export default {
  components: { CheckBotton },
  name: "BottomBar",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CartList"]),
    totalPrice() {
      return (
        "￥" +
        this.CartList.filter((item) => item.isChecked)
          .reduce((previousValue, currentValue) => {
            return previousValue + currentValue.price * currentValue.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.CartList.filter((item) => item.isChecked).length;
    },

    checkedAll() {
      if (this.CartList.length === 0) {
        return false;
      }
      return this.CartList.every((item) => item.isChecked);
    },
  },
  methods: {
    selectAll() {
      // let checked = this.CartList.every((item) => item.isChecked);
      // if (checked) {
      //   for (const item of this.CartList) {
      //     item.isChecked = !checked;
      //   }
      // } else {
      //   for (const item of this.CartList) {
      //     item.isChecked = !checked;
      //   }
      // }
      if (this.checkedAll) {
        this.CartList.forEach((item) => {
          item.isChecked = false;
        });
      } else {
        this.CartList.forEach((item) => {
          item.isChecked = true;
        });
      }
    },
  },
};
</script>

<style scoped>
.BottomBar {
  height: 40px;
  background-color: #eee;
  display: flex;
  align-items: center;
}
.check-all {
  display: flex;
  align-items: center;
  width: 76px;
  padding-left: 10px;
}
.total {
  flex: 1;
  text-align: center;
}
.calu {
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: var(--color-tint);
  color: rgb(255, 255, 255);
}
</style>