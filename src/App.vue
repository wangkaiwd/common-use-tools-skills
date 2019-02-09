<template>
  <div id="app" v-cloak>
    <mall-header
      v-if="showHeader"
      :left-arrow="leftInfo.leftArrow"
      :left-text="leftInfo.leftText"
      :title="title"
    >
    </mall-header>
    <router-view></router-view>
    <mall-footer
      v-if="!needBack"
      :tab-config="tabConfig"
    >
    </mall-footer>
  </div>
</template>
<script>
  const tabConfig = [
    { key: 0, icon: 'shop-collect-o', text: '首页', },
    { key: 1, icon: 'orders-o', text: '列表页' },
    { key: 2, icon: 'cart-o', text: '购物车页' },
    { key: 3, icon: 'vip-card-o', text: '会员中心' }
  ];
  import MallFooter from 'layouts/footer';
  import MallHeader from 'layouts/header';

  export default {
    name: 'App',
    components: {
      MallFooter,
      MallHeader
    },
    data () {
      return {
        tabConfig,
        showHeader: false,
        title: '',
        needBack: false
      };
    },
    computed: {
      leftInfo () {
        if (this.needBack) {
          return {
            leftArrow: true,
            leftText: '返回'
          };
        } else {
          return {
            leftArrow: false,
            leftText: ''
          };
        }
      }
    },
    watch: {
      $route (to) {
        this.getHeaderAndTitle(to);
        this.getBackButton(to);
      }
    },
    methods: {
      getHeaderAndTitle (to) {
        if (to.name && to.name === 'home') {
          this.showHeader = false;
        } else {
          this.showHeader = true;
          this.title = to.meta.title;
        }
      },
      getBackButton (to) {
        if (to.meta && to.meta.needBack) {
          this.needBack = to.meta.needBack;
        } else {
          this.needBack = false;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  #app {

  }

  [v-cloak] {
    display: none;
  }
</style>
