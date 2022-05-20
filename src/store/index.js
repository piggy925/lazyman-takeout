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
      if (number > 0) {
        product.check = true;
      }
      product.count += number;
      if (product.count < 0) {
        product.count = 0;
      }
      shopInfo[productId] = product;
      this.state.cartList[shopId] = shopInfo;
    },

    changeCartItemChecked(store, payload) {
      const { shopId, productId } = payload;
      let product = store.cartList[shopId][productId];
      product.check = !product.check;
    },

    clearCartProducts(store, payload) {
      const { shopId } = payload;
      store.cartList[shopId] = {};
    },

    setCartItemsChecked(store, payload) {
      const { shopId, allChecked } = payload;
      const productList = store.cartList[shopId];
      for (let i in productList) {
        const product = productList[i];
        product.check = !allChecked;
      }
    },
  },
  actions: {},
  modules: {}
})
