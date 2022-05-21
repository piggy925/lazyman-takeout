import { createStore } from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state;
  localStorage.cartList = JSON.stringify(cartList);
};

const getLocalCartList = () => {
  try {
    return JSON.parse(localStorage.cartList);
  } catch (e) {
    return {}
  }
};

export default createStore({
  state: {
    cartList: getLocalCartList()
  },
  getters: {},
  mutations: {
    changeCartItem(state, payload) {
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
      state.cartList[shopId] = shopInfo;
      setLocalCartList(state);
    },

    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload;
      let product = state.cartList[shopId].productList[productId];
      product.check = !product.check;
      setLocalCartList(state);
    },

    clearCartProducts(state, payload) {
      const { shopId } = payload;
      state.cartList[shopId].productList = {};
      setLocalCartList(state);
    },

    setCartItemsChecked(state, payload) {
      const { shopId, allChecked } = payload;
      const productList = state.cartList[shopId].productList;
      for (let i in productList) {
        const product = productList[i];
        product.check = !allChecked;
      }
      setLocalCartList(state);
    },
    changeShopName(state, payload) {
      const {
        shopId,
        shopName
      } = payload;
      const shopInfo = this.state.cartList[shopId] || { shopName: '', productList: {} };
      shopInfo.shopName = shopName;
      state.cartList[shopId] = shopInfo;
      setLocalCartList(state);
    },
  },
  actions: {},
  modules: {}
})
