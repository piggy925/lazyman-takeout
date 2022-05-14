<template>
  <div class="wrapper">
    <div class="position">
    <span class="iconfont position__location">&#xe7f1;</span>
      北京理工大学国防科技园2号楼10层
    <span class="iconfont position__notice">&#xe7c4;</span>
    </div>
  </div>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe696;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe6e6;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe7b3;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe610;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./style/variable.scss";
@import "./style/mixins.scss";

.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  background: yellow;
  padding: 0 .18rem;
}

.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  background: #F1F1F1;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  color: $content-fontcolor;
  
  .position__location {
    position: relative;
    font-size: .19rem;
    top: .01rem
  }

  .position__notice {
    position: absolute;
    font-size: .21rem;
    top: .09rem;
    right: 0;
  }
}

.docker {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid #F1F1F1;
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
