<template>
  <div class="mall-header">
    <van-tabbar v-model="active">
      <van-tabbar-item
        v-for="tab in tabConfig"
        :key="tab.key"
        :icon="tab.icon"
        :info="tab.info"
        :dot="tab.dot"
      >
        {{tab.text}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vant';

  export default {
    props: {
      tabConfig: {
        type: Array,
        default: []
      }
    },
    name: 'MallFooter',
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
    }
  };
</script>

<style scoped lang="scss">
  .mall-header {
    height: .8rem;
    background-color: $pink;
  }
</style>
