import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store";
import toast from "components/common/toast";
Vue.use(toast);
Vue.prototype.$bus = new Vue();
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");

// 解决重复点击报错问题
import Router from "vue-router";

Vue.config.productionTip = false;
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
