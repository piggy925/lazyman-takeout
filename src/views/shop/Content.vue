<template>
<div class="content">
  <div class="category">
    <div class="category__item category__item--active">全部商品</div>
    <div class="category__item">秒杀</div>
    <div class="category__item">新鲜水果</div>
    <div class="category__item">休闲食品</div>
    <div class="category__item">时令蔬菜</div>
    <div class="category__item">肉蛋家禽</div>
  </div>
  <div class="product">
    <div class="product__item">
      <img class="product__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png">
      <div class="product__item__detail">
        <h4 class="product__item__title">番茄250g/份</h4>
        <p class="product__item__sales">月售10件</p>
        <p class="product__item__price">
          <span class="product__item__yen">&yen;33.6</span>
          <span class="product__item__origin">&yen;39.6</span>
        </p>
        <div class="product__count">
          <span class="product__count__minus">-</span>
          0
          <span class="product__count__plus">+</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style lang="scss" scoped>
@import "../../style/variable";
@import "../../style/mixins";

.content {
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
}

.category {
  width: .76rem;
  height: 100%;
  background: $search-bgColor;
  overflow-y: scroll;

  &__item {
    text-align: center;
    line-height: .4rem;
    font-size: .14rem;
    color: $content-fontcolor;

    &--active {
      background: $bgColor;
    }
  }
}

.product {
  flex: 1;
  overflow-y: scroll;

  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;

    &__img {
      width: .68rem;
      height: .68rem;
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

    &__sales {
      margin: .06rem 0;
      font-size: .12rem;
      color: $content-fontcolor;
      line-height: .16rem;
    }

    &__price {
      line-height: .14rem;
      color: $highlight-fontColor;
      margin: 0.06rem 0 0 0;
    }

    &__yen {
      font-size: .12rem;
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
    bottom: .12rem;

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
</style>
