<template>
  <div class="wrapper">
      <div class="search">
        <div class="search__back iconfont" @click="handleBackClick">&#xe697;</div>
        <div class="search__content">
          <span class="search__content__icon iconfont">&#xe67d;</span>
          <input class="search__content__input" placeholder="请输入商品名称" />
        </div>
      </div>
      <ShopInfo :item="data.item" :hideBorder="true" v-if="data.item.imgUrl" />
      <Content :shopName="data.item.name" />
      <Cart />
  </div>
</template>

<script>
import ShopInfo from '@/components/ShopInfo';
import Content from '@/views/shop/Content';
import Cart from '@/views/shop/Cart';
import { useRoute, useRouter } from 'vue-router';
import { reactive } from 'vue';
import { get } from '@/utils/request'

const useGetItemEffect = () => {
  const data = reactive({ item: {} });
  const getItemData = async () => {
    const route = useRoute();
    const result = await get(`/api/shop/${route.params.id}`);
    if (result?.errno === 0 && result?.data) {
      data.item = result.data;
    }
  };
  return {
    data, getItemData
  };
};

const useBackRouterEffect = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
  return { handleBackClick };
};

export default {
  name: 'Shop',
  components: { ShopInfo, Content, Cart },
  setup() {
    const { data, getItemData } = useGetItemEffect();
    const { handleBackClick } = useBackRouterEffect();

    getItemData();

    return {
      data,
      handleBackClick
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../style/variable";

.wrapper {
  padding: 0 .16rem;
}

.search {
  margin: .14rem 0 .06rem 0;
  display: flex;
  line-height: .32rem;

  &__back {
    width: .3rem;
    height: .32rem;
    font-size: .2rem;
  }

  &__content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: .16rem;

    &__icon {
      height: .32rem;
      width: .44rem;
      text-align: center;
      color: $search-fontColor;
    }

    &__input {
      background: none;
      outline: none;
      border: none;
      display: block;
      padding-right: .2rem;
      width: 100%;
      font-size: .14rem;
      color: $content-fontcolor;
      line-height: .16rem;

      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>
