<template>
  <div class="docker">
    <div class="docker__item"
         v-for="(item, index) in dockerList"
         :class="{'docker__item--active': index === 0}"
         :key="item.icon">
      <div class="iconfont" v-html="item.icon" />
      <div class="docker__title">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup() {
    const dockerList = [
      {icon: '&#xe696;', text: '首页'},
      {icon: '&#xe6e6;', text: '购物车'},
      {icon: '&#xe7b3;', text: '订单'},
      {icon: '&#xe610;', text: '我的'},
    ]

    return {
      dockerList
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variable.scss";

.docker {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  box-sizing: border-box;
  padding: 0 .18rem;
  color: $content-fontcolor;

  &__item {
    flex: 1;
    text-align: center;

    &--active {
      color: #1FA4FC;
    }
  }

  &__title {
    font-size: .2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}

.iconfont {
  font-size: .18rem;
  margin: .07rem 0 .02rem 0;
}
</style>
