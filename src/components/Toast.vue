<template>
<div class="toast">{{ message }}</div>
</template>

<script>
export default {
  name: 'Toast',
  props: ['message']
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, .35);
  padding: .1rem;
  border-radius: .05rem;
  color: #FFFFFF;
}
</style>
