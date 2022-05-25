<template>
  <div class="order">
    <div class="order__price">实付金额 <b>¥{{ calculations.price }}</b></div>
    <div class="order__btn">提交订单</div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useCommonCartEffect } from '@/effects/cartEffects';

export default {
  name: 'Order',
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { calculations } = useCommonCartEffect(shopId);

    return {
      calculations
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variable";

.order {
  display: flex;
  height: .49rem;
  line-height: .49rem;
  width: 100%;
  background-color: $bgColor;
  position: fixed;
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
    background: $check-btnColor;
    color: $default-fontColor;
  }
}
</style>
