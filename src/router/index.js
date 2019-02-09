import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const getComponent = dir => () => import(`views/${dir}`);
export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home', // 命名路由
      component: getComponent('home'),
    },
    {
      path: '/category',
      name: 'category',
      component: getComponent('category'),
      meta: { title: '类别列表', needBack: false }
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: getComponent('goodsDetail'),
      meta: { title: '商品详情', needBack: true }
    },
    {
      path: '/shopCart',
      name: 'shopCart',
      component: getComponent('shopCart'),
      meta: { title: '购物车', needBack: false }
    },
    {
      path: '/register',
      name: 'register',
      component: getComponent('register'),
      meta: { title: '用户注册', needBack: true }
    }
  ]
});
