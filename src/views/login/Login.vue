<template>
<div class="wrapper">
  <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" />
  <div class="wrapper__input">
    <input class="wrapper__input__content" v-model="data.username" placeholder="请输入用户名" />
  </div>
  <div class="wrapper__input">
    <input class="wrapper__input__content" v-model="data.password" placeholder="请输入密码" type="password"
           autocomplete="new-password" />
  </div>
  <div class="wrapper__login-button" @click="handleLogin">登录</div>
  <div class="wrapper__login-register" @click="handleClickRegister">立即注册</div>
  <Toast v-if="toastData.showToast" :message="toastData.toastMessage" />
</div>
</template>

<script>
import { post } from '@/utils/request'
import Toast, { useToastEffect } from '@/components/Toast';
import router from '@/router';

import { reactive } from 'vue';

const useLoginEffect = (showToast) => {
  const data = reactive({
    username: '',
    password: ''
  });

  const handleLogin = async () => {
    try {
      const loginUrl = '/api/user/login';
      const result = await post(loginUrl, data);
      if (result?.errno === 0) {
        localStorage.isLogin = true;
        await router.push({name: 'Home'})
      } else {
        showToast('登录失败');
      }
    } catch (e) {
      showToast('请求失败');
    }
  };

  return {
    data,
    handleLogin
  }
};

const useRegisterEffect = () => {
  const handleClickRegister = () => {
    router.push({name: 'Register'});
  };
  return {
    handleClickRegister
  }
};

export default {
  name: 'Login',
  components: {
    Toast
  },
  setup() {
    const {toastData, showToast} = useToastEffect();
    const {data, handleLogin} = useLoginEffect(showToast);
    const {handleClickRegister} = useRegisterEffect();

    return {
      data,
      toastData,

      handleLogin,
      handleClickRegister
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../style/variable.scss";

.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);

  &__img {
    display: block;
    width: .46rem;
    height: .46rem;
    margin: 0 auto .4rem auto;
  }

  &__input {
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    background: #F9F9F9;
    border: 1px solid rgba(0, 0, 0, 0.10);
    border-radius: 6px;
    padding: 0 .16rem;

    &__content {
      border: none;
      background: none;
      outline: none;
      line-height: .48rem;
      width: 100%;
      color: $content-notice-fontcolor;
      font-size: .16rem;

      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }

  &__login-button {
    margin: .32rem .4rem .16rem .4rem;
    text-align: center;
    line-height: .48rem;
    background: #0091FF;
    box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: .04rem;
    color: #FFFFFF;
    font-size: .16rem;
  }

  &__login-register {
    text-align: center;
    color: $content-notice-fontcolor;
    font-size: .16rem;

  }

}
</style>
