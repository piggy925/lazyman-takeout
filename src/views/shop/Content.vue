<template>
<div class="content">
  <div class="category">
    <div v-for="(item, index) in categories"
         :key="index"
         @click="handleTabClick(item.tab)"
         :class="{'category__item': true, 'category__item--active': currentTab === item.tab}">
      {{ item.name }}
    </div>
  </div>
  <div class="product">
    <div class="product__item" v-for="(item, index) in list" :key="index">
      <img class="product__item__img" :src="item.imgUrl">
      <div class="product__item__detail">
        <h4 class="product__item__title">{{ item.name }}</h4>
        <p class="product__item__sales">月售{{ item.sales }}件</p>
        <p class="product__item__price">
          <span class="product__item__yen">&yen;{{ item.price }}</span>
          <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
        </p>
        <div class="product__count">
          <span class="product__count__minus"
                @click="changeCartInfo(shopId, item._id, item, -1, shopName)">-</span>
          <span class="product__count__num">
            {{ getCartProductCount(shopId, item._id) }}
          </span>
          <span class="product__count__plus"
                @click="changeCartInfo(shopId, item._id, item, 1, shopName)">+</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { reactive, ref, toRefs, watchEffect } from 'vue';
import { get } from '@/utils/request';
import { useRoute } from 'vue-router';
import { useCommonCartEffect } from '@/effects/cartEffects';
import { useStore } from 'vuex';

const categories = [{
  name: '全部商品',
  tab: 'all'
}, {
  name: '秒杀',
  tab: 'seckill'
}, {
  name: '新鲜水果',
  tab: 'fruit'
},];

// 切换分类 Tab
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab);
  const handleTabClick = (tab) => {
    currentTab.value = tab;
  };

  return { currentTab, handleTabClick }
}

// 加载当前商品列表
const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({ list: [] });

  const getContentData = async () => {
    const result = await get(`/api/shop/${shopId}/products`, { tab: currentTab.value });
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data;
    }
  };

  watchEffect(() => {
    getContentData();
  });

  const { list } = toRefs(content);
  return { getContentData, list }
};

const useCartEffect = () => {
  const store = useStore();
  const { cartList, changeCartItem } = useCommonCartEffect();

  const changeShopName = (shopId, shopName) => {
    store.commit('changeShopName', { shopId, shopName })
  };

  const changeCartInfo = (shopId, productId, productInfo, number, shopName) => {
    changeCartItem(shopId, productId, productInfo, number);
    changeShopName(shopId, shopName);
  };

  const getCartProductCount = (shopId, productId) => {
    return cartList?.[shopId]?.productList?.[productId]?.count || 0;
  };

  return { cartList, changeCartInfo, getCartProductCount };
};

export default {
  name: 'Content',
  props: ['shopName'],
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { currentTab, handleTabClick } = useTabEffect();
    const { list } = useCurrentListEffect(currentTab, shopId);
    const { cartList, changeCartInfo, getCartProductCount } = useCartEffect();

    return {
      list, categories, currentTab, shopId, cartList,
      handleTabClick, changeCartInfo, getCartProductCount
    };
  },
}
</script>

<style lang="scss" scoped>
@import "../../style/variable";
@import "../../style/mixins";

.content {
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
}

.category {
  width: .76rem;
  height: 100%;
  background: $search-bgColor;
  overflow-y: scroll;

  &__item {
    text-align: center;
    line-height: .4rem;
    font-size: .14rem;
    color: $content-fontcolor;

    &--active {
      background: $bgColor;
    }
  }
}

.product {
  flex: 1;
  overflow-y: scroll;

  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;

    &__img {
      width: .68rem;
      height: .68rem;
      margin-right: .16rem;
    }

    &__detail {
      overflow: hidden;
    }

    &__title {
      margin: 0;
      font-size: .14rem;
      color: $content-fontcolor;
      line-height: .2rem;
      @include ellipsis;
    }

    &__sales {
      margin: .06rem 0;
      font-size: .12rem;
      color: $content-fontcolor;
      line-height: .16rem;
    }

    &__price {
      line-height: .14rem;
      color: $highlight-fontColor;
      margin: 0.06rem 0 0 0;
    }

    &__yen {
      font-size: .14rem;
      margin-right: .06rem;
    }

    &__origin {
      color: #999;
      line-height: .2rem;
      font-size: .12rem;
      text-decoration: line-through;
    }
  }

  &__count {
    position: absolute;
    right: .18rem;
    bottom: .12rem;

    &__num {
      display: inline-block;
      width: .18rem;
      text-align: center;
    }


    &__minus, &__plus {
      display: inline-block;
      width: .2rem;
      height: .2rem;
      text-align: center;
      border-radius: 50%;
      font-size: .2rem;
      line-height: .16rem;
      color: #666
    }

    &__minus {
      border: .01rem solid #666;
      margin-right: .05rem;
    }

    &__plus {
      background: $default-btnColor;
      color: $default-fontColor;
      margin-left: .05rem;
    }
  }
}
</style>
