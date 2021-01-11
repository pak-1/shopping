<template>
  <div class="CartListItem">
    <div class="content">
      <div class="checkbotton">
        <check-botton
          :is-checked="product.isChecked"
          @click.native="ischeck"
        ></check-botton>
      </div>
      <div class="img">
        <img :src="product.image" alt="" />
      </div>
      <div class="detail-disc">
        <p class="title">{{ product.title }}</p>
        <p class="disc">{{ product.desc }}</p>
        <p>
          <span class="price">￥{{ product.price }}</span>
          <span class="count">x{{ product.count }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBotton from "./CheckBotton.vue";
export default {
  components: { CheckBotton },
  name: "CartListItem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    ischeck() {
      this.product.isChecked = !this.product.isChecked;
    },
  },
};
</script>

<style scoped>
.CartListItem {
  padding: 9px 0;
  border-bottom: 1px solid #ccc;
}
.content {
  display: flex;
}

.img img {
  width: 70px;
  border-radius: 7px;
}
.detail-disc {
  /* display: flex; */
  /* align-items: center; */
  /* flex-direction: column; */
  overflow: hidden;
  margin-left: 15px;
  /* justify-content: space-between; */
}
.detail-disc .title,
.detail-disc .disc {
  /* width: 38%; */
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.detail-disc .title {
  font-size: 18px;
  font-weight: bold;
  margin-top: -2px;
}
.detail-disc .disc {
  font-size: 14px;
  color: rgb(165, 162, 162);
  margin: 11px 0 29px 0;
}
.price {
  color: #ee6424;
}
.count {
  float: right;
  margin-right: 10px;
}
.checkbotton {
  display: flex;
  align-items: center;
}
</style>