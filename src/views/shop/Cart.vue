<template>
  <div class="mask" v-if="showCart" @click="handleShowCartChange "></div>
  <div class="cart">
    <div class="products" v-if="showCart">
      <div class="product">
        <div class="product__header">
          <div class="product__header__all">
            <span class="product__header__icon iconfont"
                  :class="{'product__header__icon--select': allChecked}"
                  @click="setCartItemsChecked(shopId, allChecked)">&#xe68e;</span>
            全选
          </div>
          <div class="product__header__clear">
            <span class="product__header__clear__btn"
                  @click="clearCartProducts(shopId)">清空购物车</span>
          </div>
        </div>
        <template v-for="(item, index) in productList" :key="index">
          <div class="product__item" v-if="item.count > 0">
            <div class="product__item__checked iconfont"
                 :class="{'product__item__checked--select': item.check}"
                 @click="changeCartItemChecked(shopId, item._id)">&#xe68e;</div>
            <img class="product__item__img" :src="item.imgUrl">
            <div class="product__item__detail">
              <h4 class="product__item__title">{{ item.name }}</h4>
              <p class="product__item__price">
                <span class="product__item__yen">&yen;{{ item.price }}</span>
                <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
              </p>
              <div class="product__count">
                <span class="product__count__minus"
                      @click="changeCartItem(shopId, item._id, item, -1)">-</span>
                <span class="product__count__num">
                  {{ item.count || 0 }}
                </span>
                <span class="product__count__plus"
                      @click="changeCartItem(shopId, item._id, item, 1)">+</span>
              </div>
            </div>
        </div>
        </template>
  </div>
    </div>
    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img"
             src="http://www.dell-lee.com/imgs/vue3/basket.png"
             @click="handleShowCartChange" />
        <div class="check__icon__tag">{{ total }}</div>
      </div>
      <div class="check__info">
        总计: <span class="check__info__price">&yen;{{ price }}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCommonCartEffect } from '@/views/shop/useCommonCartEffect';

const useCartEffect = () => {
  const route = useRoute()
  const store = useStore();
  const shopId = route.params.id;
  const cartList = store.state.cartList;
  const { changeCartItem } = useCommonCartEffect();
  const showCart = ref(false);

  const total = computed(() => {
    let count = 0;
    const productList = cartList[shopId];
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        count += product.count;
      }
    }
    return count;
  });

  const price = computed(() => {
    let count = 0;
    const productList = cartList[shopId];
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        if (product.check) {
          count += (product.count * product.price);
        }
      }
    }
    return count.toFixed(2);
  });

  const productList = computed(() => {
    return cartList[shopId] || [];
  });

  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', { shopId, productId });
  };

  const clearCartProducts = (shopId) => {
    showCart.value = !showCart.value;
    store.commit('clearCartProducts', { shopId });
  };

  const allChecked = computed(() => {
    const productList = store.state.cartList[shopId];
    let result = true;
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        if (product.count > 0 && !product.check) {
          result = false;
          break;
        }
      }
    }
    return result;
  });

  const setCartItemsChecked = (shopId, allChecked) => {
    store.commit('setCartItemsChecked', { shopId, allChecked })
  };

  const handleShowCartChange = () => {
    showCart.value = !showCart.value;
  };

  return {
    total, price, productList, shopId, allChecked, showCart,
    changeCartItem, changeCartItemChecked, clearCartProducts, setCartItemsChecked, handleShowCartChange
  };
};

export default {
  name: 'Cart',
  setup() {
    const {
      total, price, productList, shopId, allChecked, showCart,
      changeCartItem, changeCartItemChecked, clearCartProducts, setCartItemsChecked, handleShowCartChange
    } = useCartEffect();
    return {
      total, price, productList, shopId, allChecked, showCart,
      changeCartItem, changeCartItemChecked, clearCartProducts, setCartItemsChecked, handleShowCartChange
    };
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variable";
@import "../../style/mixins";

.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: $bgColor;
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .5);
}

.product {
  flex: 1;
  overflow-y: scroll;
  background-color: $default-fontColor;

  &__header {
    display: flex;
    padding: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;
    font-size: .14rem;
    color: $content-fontcolor;
    line-height: .52rem;

    &__all {
      width: .64rem;
    }

    &__icon {
      font-size: .2rem;
      vertical-align: top;

      &--select {
        color: #1FA4FC;;
      }
    }

    &__clear {
      flex: 1;
      text-align: right;
      margin-right: .18rem;

      &__btn {
        display: inline-block;
      }
    }
  }

  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;

    &__checked {
      font-size: .2rem;
      line-height: .5rem;
      margin-right: .16rem;

      &--select {
        color: #1FA4FC;
      }
    }

    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }

    &__detail {
      overflow: hidden;
    }

    &__title {
      margin: 0;
      font-size: .14rem;
      color: $content-fontcolor;
      line-height: .2rem;
      @include ellipsis;
    }

    &__price {
      line-height: .14rem;
      color: $highlight-fontColor;
      margin: 0.06rem 0 0 0;
    }

    &__yen {
      font-size: .14rem;
      margin-right: .06rem;
    }

    &__origin {
      color: #999;
      line-height: .2rem;
      font-size: .12rem;
      text-decoration: line-through;
    }
  }

  &__count {
    position: absolute;
    right: .18rem;
    bottom: .26rem;

    &__num {
      display: inline-block;
      width: .18rem;
      text-align: center;
    }

    &__minus, &__plus {
      display: inline-block;
      width: .2rem;
      height: .2rem;
      text-align: center;
      border-radius: 50%;
      font-size: .2rem;
      line-height: .16rem;
      color: #666
    }

    &__minus {
      border: .01rem solid #666;
      margin-right: .05rem;
    }

    &__plus {
      background: $default-btnColor;
      color: $default-fontColor;
      margin-left: .05rem;
    }
  }
}

.check {
  display: flex;
  line-height: .49rem;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;

  &__icon {
    width: .84rem;
    position: relative;

    &__img {
      display: block;
      width: .28rem;
      height: .26rem;
      margin: .12rem auto;
    }

    &__tag {
      position: absolute;
      height: .2rem;
      min-width: .2rem;
      border-radius: 50%;
      background-color: $highlight-fontColor;
      font-size: .1rem;
      line-height: .2rem;
      text-align: center;
      color: $default-fontColor;
      top: .04rem;
      left: .5rem;
      transform: scale(.5);
      transform-origin: left center;
      padding: .01rem .01rem;
    }
  }

  &__info {
    flex: 1;
    font-size: .12rem;
    color: $content-fontcolor;

    &__price {
      font-size: .18rem;
      color: $highlight-fontColor;
    }
  }

  &__btn {
    width: .98rem;
    text-align: center;
    font-size: 14px;
    color: $default-fontColor;
    background: #4FB0F9;
  }
}
</style>
