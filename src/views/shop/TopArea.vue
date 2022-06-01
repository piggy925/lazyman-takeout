<template>
<div class="top">
  <div class="top__header">
    <div class="top__header__back iconfont"
         @click="handleBackClick">&#xe697;
    </div>
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
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'TopArea',
  setup() {
    const router = useRouter();
    const handleBackClick = () => {
      router.back();
    };

    return {
      handleBackClick
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variable";
@import "../../style/mixins";

.top {
  height: 1.83rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0.00) 4%, #0091FF 50%);;
  background-repeat: no-repeat;

  &__header {
    position: relative;
    padding-top: .15rem;
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
      color: $cart-info-fontColor;
      line-height: .17rem;
      padding: 0 .4rem 0 .16rem;
      margin-top: .06rem;
    }

    &__enter {
      position: absolute;
      top: .45rem;
      right: .16rem;
      font-size: 0.25rem;
      color: $cart-info-fontColor;
      transform: rotate(180deg);
    }
  }
}
</style>
