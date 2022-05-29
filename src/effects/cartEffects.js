import { useStore } from 'vuex';
import { computed } from 'vue';

export const useCommonCartEffect = (shopId) => {
  const store = useStore();
  const cartList = store.state.cartList;
  const changeCartItem = (shopId, productId, productInfo, number) => {
    store.commit('changeCartItem', { shopId, productId, productInfo, number });
  };

  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || {};
    const notEmptyProductList = {};
    for (let i in productList) {
      const product = productList[i];
      if (product.count > 0) {
        notEmptyProductList[i] = product;
      }
    }
    return notEmptyProductList;
  });

  const shopName = computed(() => {
    return cartList[shopId]?.shopName;
  });

  const calculations = computed(() => {
    const result = { total: 0, price: 0, allChecked: true };
    const productList = cartList[shopId]?.productList;
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        result.total += product.count;
        if (product.check) {
          result.price += (product.count * product.price);
        }
        if (product.count > 0 && !product.check) {
          result.allChecked = false;
        }
      }
    }
    result.price = result.price.toFixed(2);
    return result;
  });

  return {
    cartList, productList, shopName, calculations,
    changeCartItem
  };
};
