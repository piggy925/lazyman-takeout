import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {}
  },
  getters: {},
  mutations: {
    changeCartItem(store, payload) {
      const {
        shopId,
        productId,
        productInfo,
        number
      } = payload;
      let shopInfo = this.state.cartList[shopId] || {};
      let product = shopInfo[productId];
      if (!product) {
        product = productInfo;
        product.count = 0;
      }
      product.count += number;
      if (product.count < 0) {
        product.count = 0;
      }
      shopInfo[productId] = product;
      this.state.cartList[shopId] = shopInfo;
    },
  },
  actions: {},
  modules: {}
})
