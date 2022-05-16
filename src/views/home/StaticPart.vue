<template>
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
    <div class="icons__item"
         v-for="(item, index) in iconList"
         :key="index">
      <img class="icons__item__img" :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`" />
      <p class="icons__item__desc">{{ item.desc }}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup() {
    const iconList = [
      {
        imgName: '超市',
        desc: '超市遍历'
      }, {
        imgName: '菜市场',
        desc: '菜市场'
      }, {
        imgName: '水果店',
        desc: '水果店'
      }, {
        imgName: '鲜花',
        desc: '鲜花绿植'
      }, {
        imgName: '医药健康',
        desc: '医药健康'
      }, {
        imgName: '家居',
        desc: '家居时尚'
      }, {
        imgName: '蛋糕',
        desc: '烘焙蛋糕'
      }, {
        imgName: '签到',
        desc: '签到'
      }, {
        imgName: '大牌免运',
        desc: '大牌免运'
      }, {
        imgName: '红包',
        desc: '红包套餐'
      }
    ];
    return {iconList}
  },
}
</script>

<style lang="scss" scoped>
@import "../../style/variable.scss";
@import "../../style/mixins.scss";

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
    right: 0;
  }
}
</style>
