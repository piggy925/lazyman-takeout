<template>
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
</template>

<script>
export default {
  name: 'Nearby'
}
</script>

<style lang="scss">
@import "../../style/variable.scss";

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
</style>
