export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = null;
      //   for (let item of state.cartList) {
      //     if (item.iid === payload.iid) {
      //       oldProduct = item;
      //     }
      //   }
      oldProduct = context.state.cartList.find(
        item => item.iid === payload.iid
      );
      if (oldProduct) {
        resolve("商品数量+1");
        context.commit("addCount", oldProduct);
      } else {
        resolve("已成功添加至购物车");

        payload.count = 1;
        context.commit("addToCart", payload);
      }
    });
  },
};
