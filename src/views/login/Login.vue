<template>
<div class="wrapper">
  <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" />
  <div class="wrapper__input">
    <input class="wrapper__input__content" placeholder="请输入手机号" />
  </div>
  <div class="wrapper__input">
    <input class="wrapper__input__content" placeholder="请输入密码" />
  </div>
  <div class="wrapper__login-button" @click="handleLogin">登录</div>
  <div class="wrapper__login-register">立即注册</div>
</div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    const router = useRouter();
    const handleLogin = () => {
      localStorage.isLogin = true;
      router.push({name: 'Home'});
    };
    return {
      handleLogin
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
