<template>
  <div class="order">
    <div class="order__price">实付金额 <b>¥{{ calculations.price }}</b></div>
    <div class="order__btn" @click="handleSubmitOrder(true)">提交订单</div>
  </div>
  <div class="mask"
       v-if="showMask"
       @click="handleSubmitOrder(false)">
    <div class="mask__content" @click.stop>
      <h3 class="mask__content__title">确认前往支付？</h3>
      <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
      <div class="mask__content__btns">
        <div class="mask__content__btnCancel" @click="handleConfirmOrder(true)">取消订单</div>
        <div class="mask__content__btnConfirm" @click="handleConfirmOrder(false)">确认支付</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { useCommonCartEffect } from '@/effects/cartEffects';
import { post } from '@/utils/request'
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
  name: 'Order',
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const shopId = route.params.id;
    const { calculations, shopName, productList } = useCommonCartEffect(shopId);
    const showMask = ref(false);

    const handleSubmitOrder = (status) => {
      showMask.value = status;
    };

    const handleConfirmOrder = async (isCanceled) => {
      const products = [];
      for (let i in productList.value) {
        let product = productList.value[i];
        products.push({ id: parseInt(product._id, 10), num: product.count });
      }

      try {
        const result = await post('/api/order', {
          addressId: 1,
          shopId,
          shopName: shopName.value,
          isCanceled,
          products
        });

        showMask.value = false;
        if (result?.errno === 0) {
          if (!isCanceled) {
            store.commit('clearCartList', shopId);
          }
          router.push({ name: 'Home' })
        }
      } catch (e) {
        console.log('/api/order Request Fail');
        // 弹窗提示请求失败
      }
    };

    return {
      calculations, showMask,
      handleConfirmOrder, handleSubmitOrder
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

.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.50);
  z-index: 1;

  &__content {
    position: absolute;
    background: $default-fontColor;
    border-radius: .04rem;
    width: 3rem;
    height: 1.6rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &__title {
      font-size: .18rem;
      color: $content-fontcolor;
      line-height: .25rem;
      text-align: center;
      margin: .24rem 0 .08rem 0;
    }

    &__desc {
      font-size: .14rem;
      color: $cart-info-fontColor;
      line-height: .2rem;
      margin: 0 0 .24rem 0;
      text-align: center;
    }

    &__btns {
      display: flex;
      height: .32rem;
    }

    &__btnCancel, &__btnConfirm {
      flex: 1;
      border: 1px solid #4FB0F9;
      border-radius: .16rem;
      width: .8rem;
      line-height: .3rem;
      text-align: center;
      font-size: .14rem;

    }

    &__btnCancel {
      margin: 0 .12rem 0 .6rem;
      color: #0091FF;
    }

    &__btnConfirm {
      margin: 0 .6rem 0 .12rem;
      color: #FFFFFF;
      background-color: #4FB0F9;
    }
  }
}
</style>
