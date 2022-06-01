<template>
  <div class="docker">
    <div class="docker__item"
         v-for="(item, index) in dockerList"
         :class="{'docker__item--active': index === currentIndex}"
         :key="item.icon">
      <router-link :to="item.to">
        <div class="iconfont" v-html="item.icon" />
        <div class="docker__title">{{ item.text }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  props: ['currentIndex'],
  setup() {
    const dockerList = [
      { icon: '&#xe696;', text: '首页', to: { name: 'Home' } },
      { icon: '&#xe6e6;', text: '购物车', to: { name: 'Cart' } },
      { icon: '&#xe7b3;', text: '订单', to: { name: 'OrderList' } },
      { icon: '&#xe610;', text: '我的', to: { name: 'Home' } },
    ]

    return {
      dockerList
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../style/variable.scss";

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

  &__item {
    flex: 1;
    text-align: center;

    a {
      text-decoration: none;
      color: $content-fontcolor;
    }

    &--active {
      a {
        color: #1FA4FC;
      }
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
