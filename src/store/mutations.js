export default {
  addCount(state, payload) {
    payload.count += 1;
  },
  addToCart(state, payload) {
    payload.isChecked = true;
    state.cartList.push(payload);
  },
};
