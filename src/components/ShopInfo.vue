<template>
  <div class="shop__item">
      <img class="shop__item__img" :src="item.imgUrl" />
    <div :class="{'shop__content': true, 'shop__content--bordered': !hideBorder}">
      <div class="shop__content__title">{{ item.name }}</div>
      <div class="shop__content__tags">
        <span class="shop__content__tag">月售: {{ item.sales }}+</span>
        <span class="shop__content__tag">起送￥{{ item.expressLimit }}</span>
        <span class="shop__content__tag">基础运费￥{{ item.expressPrice }}</span>
      </div>
      <p class="shop__content__highlight">
        {{ item.slogan }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['item', 'hideBorder']
}
</script>

<style lang="scss" scoped>
@import "../style/variable.scss";

.shop {
  &__title {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }

  &__item {
    display: flex;
    padding-top: .12rem;

    &__img {
      margin-right: .16rem;
      height: .56rem;
      width: .56rem;
    }
  }

  &__content {
    flex: 1;
    padding-bottom: .12rem;

    &--bordered {
      border-bottom: 1px solid $content-bgColor;
    }

    &__title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }

    &__tags {
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
      margin-top: .08rem;
    }

    &__tag {
      margin-right: .16rem;
    }

    &__highlight {
      line-height: .18rem;
      font-size: .13rem;
      color: #E93B3B;
      margin: .08rem 0 0 0;
    }
  }
}
</style>
