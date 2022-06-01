<template>
<div class="wrapper">
  <div class="title">我的订单</div>
  <div class="orders">
    <div class="order"
         v-for="(item, index) in list"
         :key="index">
      <div class="order__title">
        {{ item.shopName }}
        <span class="order__title__status">{{ item.isCanceled ? '已取消' : '已下单' }}</span>
      </div>
      <div class="order__content">
        <div class="order__content__imgs">
          <template v-for="(innerItem, innerIndex) in item.products"
                    :key="innerIndex">
            <img class="order__content__img"
                 :src="innerItem.product.img"
                 v-if="innerIndex <= 3">
          </template>
        </div>
        <div class="order__info">
          <div class="order__info__price">&yen;{{ item.totalPrice }}</div>
          <div class="order__info__count">共 {{ item.totalCount }} 件</div>
        </div>
      </div>
    </div>
  </div>
</div>
<Docker :currentIndex='2' />
</template>

<script>
import Docker from '@/components/Docker';
import { reactive, toRefs } from 'vue';
import { get } from '@/utils/request';

const useOrderListEffect = () => {
  const data = reactive({ list: [] });
  const getOrderList = async () => {
    const result = await get('/api/order');
    if (result?.errno === 0 && result?.data?.length) {
      const orderList = result.data;
      orderList.forEach(order => {
        const products = order?.products || [];
        let totalPrice = 0;
        let totalCount = 0;
        products.forEach(productItem => {
          const product = productItem?.product;
          totalPrice += ((product?.price * productItem?.orderSales) || 0);
          totalCount += (productItem?.orderSales || 0);
        });
        order.totalPrice = totalPrice.toFixed(2);
        order.totalCount = totalCount;
      });
      data.list = result.data;
    }
  };
  getOrderList();

  const { list } = toRefs(data);
  return { list }
};

export default {
  name: 'OrderList',
  components: { Docker },
  setup() {
    const { list } = useOrderListEffect();
    return { list }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variable";

.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  background-color: #F8F8F8;
}

.title {
  font-size: .16rem;
  color: $content-fontcolor;
  line-height: .44rem;
  text-align: center;
  background-color: $bgColor;
}

.order {
  background-color: $bgColor;
  margin: .16rem .18rem 0 .18rem;
  padding: .16rem;
  border-radius: .04rem;

  &__title {
    font-size: .16rem;
    color: $content-fontcolor;
    line-height: .22rem;

    &__status {
      font-size: .14rem;
      color: #999999;
      float: right;
    }
  }

  &__content {
    margin-top: .16rem;
    height: .4rem;
    display: flex;

    &__imgs {
      flex: 1;
    }

    &__img {
      width: .4rem;
      height: .4rem;
      margin-right: .12rem;
    }
  }

  &__info {
    width: .7rem;
    text-align: right;

    &__price {
      font-size: .14rem;
      color: $highlight-fontColor;
      line-height: .2rem;
    }

    &__count {
      margin-top: .04rem;
      font-size: .12rem;
      color: $content-fontcolor;
      line-height: .14rem;
    }
  }
}
</style>
