<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img"
             src="http://www.dell-lee.com/imgs/vue3/basket.png" />
        <div class="check__icon__tag">1</div>
      </div>
      <div class="check__info">
        总计: <span class="check__info__price">&yen;128</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart'
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
      width: .2rem;
      border-radius: 50%;
      background-color: $highlight-fontColor;
      font-size: .1rem;
      line-height: .2rem;
      text-align: center;
      color: $default-fontColor;
      top: .04rem;
      right: .18rem;
      transform: scale(.5);
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
