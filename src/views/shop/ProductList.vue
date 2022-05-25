<template>
<div class="products">
  <div class="products__title">{{ shopName }}</div>
  <div class="products__list">
    <template
        v-for="(item, index) in productList"
        :key="index">
      <div class="products__item"
           v-if="item.count > 0"
      >
        <img class="products__item__img" :src="item.imgUrl">
        <div class="products__item__detail">
          <h4 class="products__item__title">{{ item.name }}</h4>
          <p class="products__item__price">
            <span class="products__item__yen">&yen;{{ item.price }} x {{ item.count }}</span>
            <span class="products__item__total">&yen;{{ (item.price * item.count).toFixed(2) }}</span>
          </p>
        </div>
      </div>
    </template>
  </div>
</div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useCommonCartEffect } from '@/effects/cartEffects';

export default {
  name: 'ProductList',
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { productList, shopName } = useCommonCartEffect(shopId);

    return {
      productList, shopName
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variable";
@import "../../style/mixins";

.products {
  margin: .16rem .18rem .1rem .18rem;
  background-color: $bgColor;
  border-radius: .04rem;

  &__title {
    font-weight: bold;
    padding: .16rem;
    font-size: .16rem;
    color: $content-fontcolor;
  }

  &__list {
    background-color: $bgColor;
  }

  &__item {
    position: relative;
    display: flex;
    padding: 0 .16rem 0.16rem .16rem;

    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }

    &__detail {
      flex: 1;
    }

    &__title {
      margin: 0;
      font-size: .14rem;
      color: $content-fontcolor;
      line-height: .2rem;
      @include ellipsis;
    }

    &__sales {
      margin: .06rem 0;
      font-size: .12rem;
      color: $content-fontcolor;
      line-height: .16rem;
    }

    &__price {
      display: flex;
      line-height: .14rem;
      color: $highlight-fontColor;
      margin: 0.06rem 0 0 0;
    }

    &__yen {
      line-height: 14px;
      font-size: .14rem;
      margin-right: .06rem;
      width: 1.2rem;
      text-align: left;
    }

    &__total {
      flex: 1;
      font-size: 14px;
      color: #000000;
      line-height: 14px;
      text-align: right;
    }
  }
}
</style>
