<template>
<div class="wrapper">
  <TopArea />
  <ProductList />
  <Order />
</div>
</template>

<script>
import TopArea from '@/views/shop/TopArea';
import ProductList from '@/views/shop/ProductList';
import Order from '@/views/shop/Order';

export default {
  name: 'OrderConfirmation',
  components: { TopArea, ProductList, Order }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: .49rem;
  background-color: #f8f8f8;
  overflow-y: scroll;
}
</style>
