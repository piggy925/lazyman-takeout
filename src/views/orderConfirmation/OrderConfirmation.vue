<template>
<div class="wrapper">
  <div class="top">
    <div class="top__header">
      <div class="top__header__back iconfont">&#xe697;</div>
      确认订单
    </div>
    <div class="top__receiver">
      <div class="top__receiver__title">收货地址</div>
      <div class="top__receiver__address">上海海事大学海港大道 1550 号</div>
      <div class="top__receiver__info">
        <span class="top__receiver__info__name">MuMu（先生）</span>
        <span class="top__receiver__info__phone">18911020000</span>
      </div>
      <div class="top__receiver__enter iconfont">&#xe697;</div>
    </div>
  </div>
  <div class="products">
    <div class="products__title">{{ shopName }}</div>
    <div class="products__list">
      <div class="products__item"
           v-for="(item, index) in productList"
           :key="index">
        <img class="products__item__img" :src="item.imgUrl">
        <div class="products__item__detail">
          <h4 class="products__item__title">{{ item.name }}</h4>
          <p class="products__item__price">
            <span class="products__item__yen">&yen;{{ item.price }} x {{ item.count }}</span>
            <span class="products__item__total">&yen;{{ (item.price * item.count).toFixed(2) }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="order">
    <div class="order__price">实付金额 <b>¥{{ calculations.price }}</b></div>
    <div class="order__btn">提交订单</div>
  </div>
</div>
</template>

<script>
import { useCommonCartEffect } from '@/effects/cartEffects';
import { useRoute } from 'vue-router';

export default {
  name: 'OrderConfirmation',
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { productList, shopName, calculations } = useCommonCartEffect(shopId);

    return {
      productList, shopName, calculations
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variable";
@import "../../style/mixins";

.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #f8f8f8;
}

.top {
  height: 1.83rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0.00) 4%, #0091FF 50%);;
  background-repeat: no-repeat;

  &__header {
    position: relative;
    padding-top: .26rem;
    line-height: .24rem;
    color: $default-fontColor;
    text-align: center;
    font-size: .16rem;
    margin-bottom: .22rem;

    &__back {
      position: absolute;
      font-size: .3rem;
      left: .18rem;
    }
  }

  &__receiver {
    position: absolute;
    left: .18rem;
    right: .18rem;
    height: 1.11rem;
    background-color: $bgColor;
    border-radius: .04rem;

    &__title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
      padding: .16rem 0 0 .16rem;
    }

    &__address {
      font-size: .14rem;
      line-height: .2rem;
      color: $content-fontcolor;
      margin-top: .14rem;
      padding: 0 .4rem 0 .16rem;
      @include ellipsis;
    }

    &__info {
      font-size: .12rem;
      color: #666666;
      line-height: .17rem;
      padding: 0 .4rem 0 .16rem;
      margin-top: .06rem;
    }

    &__enter {
      position: absolute;
      top: .45rem;
      right: .16rem;
      font-size: 0.25rem;
      color: #666666;
      transform: rotate(180deg);
    }
  }
}

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

.order {
  display: flex;
  height: .49rem;
  line-height: .49rem;
  width: 100%;
  background-color: $bgColor;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  &__price {
    flex: 1;
    font-size: .14rem;
    color: $content-fontcolor;
    margin-left: .24rem;
  }

  &__btn {
    width: .98rem;
    text-align: center;
    font-size: .14rem;
    background: #4FB0F9;
    color: $default-fontColor;
  }
}
</style>
