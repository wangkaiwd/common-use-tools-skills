<template>
  <div class="category">
    <mall-header title="类别列表"></mall-header>
    <mall-footer :tabConfig="tabConfig"></mall-footer>
  </div>
</template>

<script>
  import MallHeader from 'layouts/header';
  import MallFooter from 'layouts/footer';

  const tabConfig = [
    { key: 0, icon: 'shop-collect-o', text: '首页', info: 0 },
    { key: 1, icon: 'orders-o', text: '列表页', info: 0 },
    { key: 2, icon: 'cart-o', text: '购物车页', info: 0 },
    { key: 3, icon: 'vip-card-o', text: '会员中心', info: 0 },
  ];
  export default {
    name: 'Category',
    components: {
      MallHeader,
      MallFooter
    },
    data () {
      return {
        tabConfig
      };
    }
  };
</script>

<style scoped>

</style>
