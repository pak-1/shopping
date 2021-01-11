<template>
  <div class="Toast" v-show="isShow">
    <div class="msg">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "toast",
      isShow: false,
    };
  },
  methods: {
    show(message, duration = 2000) {
      console.log(message, duration);

      this.message = message;
      this.isShow = true;
      console.log(this.message, this.isShow);

      setTimeout(() => {
        this.message = "toast";
        this.isShow = false;
      }, duration);
    },
  },
};
</script>

<style scoped>
.Toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 16px;
  padding: 6px 10px;
  border-radius: 6px;
  z-index: 9999;
}
</style>