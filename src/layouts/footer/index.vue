<template>
  <div class="mall-footer">
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
    data () {
      return {
        active: 0
      };
    },
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
    }
  };
</script>

<style scoped lang="scss">
  .mall-footer {

  }
</style>
