import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const getComponent = dir => () => import(`views/${dir}`);
export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home', // 命名路由
      component: getComponent('home')
    },
    {
      path: '/category',
      name: 'category',
      component: getComponent('category')
    }
  ]
});
