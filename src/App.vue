<template>
  <div class="wrapper">
    <div class="position">
    <span class="iconfont position__location">&#xe7f1;</span>
      上海海事大学海港大道 1550 号
    <span class="iconfont position__notice">&#xe7c4;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe65c;</span>山姆会员商店优惠商品
    </div>
    <div class="banner">
      <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg">
    </div>
    <div class="icons">
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" />
        <p class="icons__item__desc">超市遍历</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/菜市场.png" />
        <p class="icons__item__desc">菜市场</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/水果店.png" />
        <p class="icons__item__desc">水果店</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/鲜花.png" />
        <p class="icons__item__desc">鲜花绿植</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/医药健康.png" />
        <p class="icons__item__desc">医药健康</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/家居.png" />
        <p class="icons__item__desc">家居时尚</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/蛋糕.png" />
        <p class="icons__item__desc">烘焙蛋糕</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/签到.png" />
        <p class="icons__item__desc">签到</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/大牌免运.png" />
        <p class="icons__item__desc">大牌免运</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/红包.png" />
        <p class="icons__item__desc">红包套餐</p>
      </div>
    </div>
    <div class="gap"></div>
    <div class="nearby">
      <h3 class="nearby__title">附近店铺</h3>
      <div class="nearby__item">
        <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" />
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">
              月售1万+
            </span>
            <span class="nearby__content__tag">
              月售1万+
            </span>
            <span class="nearby__content__tag">
              月售1万+
            </span>
          </div>
          <p class="nearby__content__highlight">
            VIP尊享满89元减4元运费券（每月3张）
          </p>
        </div>
      </div>
      <div class="nearby__item">
        <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" />
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">
              月售1万+
            </span>
            <span class="nearby__content__tag">
              月售1万+
            </span>
            <span class="nearby__content__tag">
              月售1万+
            </span>
          </div>
          <p class="nearby__content__highlight">
            VIP尊享满89元减4元运费券（每月3张）
          </p>
        </div>
      </div>
      <div class="nearby__item">
        <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" />
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">
              月售1万+
            </span>
            <span class="nearby__content__tag">
              月售1万+
            </span>
            <span class="nearby__content__tag">
              月售1万+
            </span>
          </div>
          <p class="nearby__content__highlight">
            VIP尊享满89元减4元运费券（每月3张）
          </p>
        </div>
      </div>
      <div class="nearby__item">
        <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" />
        <div class="nearby__content">
          <div class="nearby__content__title">沃尔玛</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">
              月售1万+
            </span>
            <span class="nearby__content__tag">
              月售1万+
            </span>
            <span class="nearby__content__tag">
              月售1万+
            </span>
          </div>
          <p class="nearby__content__highlight">
            VIP尊享满89元减4元运费券（每月3张）
          </p>
        </div>
      </div>
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
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem .2rem .18rem;
}

.nearby {
  &__title {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }

  &__item {
    display: flex;
    padding-top: .12rem;

    &__img {
      margin-right: .16rem;
      height: .56rem;
      width: .56rem;
    }
  }

  &__content {
    flex: 1;
    padding-bottom: .12rem;
    border-bottom: 1px solid $content-bgColor;

    &__title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }

    &__tags {
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
      margin-top: .08rem;
    }

    &__tag {
      margin-right: .16rem;
    }

    &__highlight {
      line-height: .18rem;
      font-size: .13rem;
      color: #E93B3B;
      margin: .08rem 0 0 0;
    }
  }
}

.gap {
  background: $content-bgColor;
  height: .1rem;
  margin: 0 -.18rem;
}

.icons {
  display: flex;
  flex-wrap: wrap;

  &__item {
    width: 20%;

    &__img {
      height: .4rem;
      width: .4rem;
      display: block;
      margin: 0 auto;
    }

    &__desc {
      text-align: center;
      margin: .06rem 0 .16rem 0;
      color: $content-fontcolor;
    }
  }
}

.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  margin-bottom: .16rem;

  &__img {
    width: 100%;
  }
}

.search {
  line-height: .32rem;
  background: #F5F5F5;
  border-radius: .16rem;
  color: #B7B7B7;
  font-size: .14rem;
  margin-bottom: .12rem;

  .iconfont {
    position: relative;
    font-size: .16rem;
    padding: 0 .12rem 0 .16rem;
  }
}

.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .32rem;
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
