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
  <div class="wrapper__input">
    <input class="wrapper__input__content" v-model="data.confirmPassword" placeholder="确认密码" type="password" />
  </div>
  <div class="wrapper__register-button" @click="handleRegisterClick">注册</div>
  <div class="wrapper__register-link" @click="handleLoginClick">已有账号去登录</div>
  <Toast v-if="toastData.showToast" :message="toastData.toastMessage" />
</div>
</template>

<script>

import { post } from '@/utils/request';
import { reactive } from 'vue';
import router from '@/router';
import Toast, { useToastEffect } from '@/components/Toast';

const useRegisterEffect = (showToast) => {
  const data = reactive({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleRegisterClick = async () => {
    try {
      const loginUrl = '/api/user/register';
      const result = await post(loginUrl, data);
      if (result?.errno === 0) {
        await router.push({ name: 'Login' })
      } else {
        showToast('注册失败');
      }
    } catch (e) {
      showToast('请求失败');
    }
  };

  return {
    data,
    handleRegisterClick
  }
};

const useLoginEffect = () => {
  const handleLoginClick = () => {
    router.push({ name: 'Login' });
  };
  return {
    handleLoginClick
  }
};

export default {
  name: 'Register',
  components: { Toast },
  setup() {
    const { toastData, showToast } = useToastEffect();
    const { data, handleRegisterClick } = useRegisterEffect(showToast);
    const { handleLoginClick } = useLoginEffect();

    return {
      data,
      toastData,
      showToast,
      handleRegisterClick,
      handleLoginClick
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
    background: $input-bgColor;
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

  &__register-button {
    margin: .32rem .4rem .16rem .4rem;
    text-align: center;
    line-height: .48rem;
    background: $default-btnColor;
    box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: .04rem;
    color: $default-fontColor;
    font-size: .16rem;
  }

  &__register-link {
    text-align: center;
    color: $content-notice-fontcolor;
    font-size: .16rem;
  }
}
</style>
