import { useStore } from 'vuex';

export const useCommonCartEffect = () => {
  const store = useStore();
  const cartList = store.state.cartList;
  const changeCartItem = (shopId, productId, productInfo, number) => {
    store.commit('changeCartItem', { shopId, productId, productInfo, number });
  };

  return {
    cartList, changeCartItem
  };
};
