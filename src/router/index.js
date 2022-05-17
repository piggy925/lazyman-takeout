import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */'../views/home/Home')
  }, {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */'../views/login/Login'),
    beforeEnter(to, from, next) {
      const {isLogin} = localStorage;
      isLogin ? next({name: 'Home'}) : next();
    }
  }, {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */'../views/register/Register'),
  }, {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */'../views/shop/Shop'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin;
  const {name} = to;
  const isRegisterOrLogin = (name === 'Login' || name === 'Register');
  (isLogin || isRegisterOrLogin) ? next() : next({name: 'Login'});
})

export default router
