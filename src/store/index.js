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
      let shopInfo = this.state.cartList[shopId] || { shopName: '', productList: {} };
      let product = shopInfo.productList[productId];
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
      shopInfo.productList[productId] = product;
      this.state.cartList[shopId] = shopInfo;
    },

    changeCartItemChecked(store, payload) {
      const { shopId, productId } = payload;
      let product = store.cartList[shopId].productList[productId];
      product.check = !product.check;
    },

    clearCartProducts(store, payload) {
      const { shopId } = payload;
      store.cartList[shopId].productList = {};
    },

    setCartItemsChecked(store, payload) {
      const { shopId, allChecked } = payload;
      const productList = store.cartList[shopId].productList;
      for (let i in productList) {
        const product = productList[i];
        product.check = !allChecked;
      }
    },
    changeShopName(store, payload) {
      const {
        shopId,
        shopName
      } = payload;
      const shopInfo = this.state.cartList[shopId] || { shopName: '', productList: {} };
      shopInfo.shopName = shopName;
      this.state.cartList[shopId] = shopInfo;
    },
  },
  actions: {},
  modules: {}
})
