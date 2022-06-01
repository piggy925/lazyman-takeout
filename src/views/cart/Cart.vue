<template>
<div>cart</div>
<Docker :currentIndex="1" />
</template>

<script>
import Docker from '@/components/Docker';

export default {
  name: 'cart',
  components: { Docker }
}
</script>

<style lang="scss" scoped>

</style>
