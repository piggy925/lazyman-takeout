<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img"
             src="http://www.dell-lee.com/imgs/vue3/basket.png" />
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
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const useCartEffect = () => {
  const route = useRoute()
  const store = useStore();
  const shopId = route.params.id;
  const cartList = store.state.cartList;
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
        count += (product.count * product.price);
      }
    }
    return count.toFixed(2);
  });
  return {
    total, price
  };
};

export default {
  name: 'Cart',
  setup() {
    const { total, price } = useCartEffect();
    return { total, price };
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variable";

.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
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
