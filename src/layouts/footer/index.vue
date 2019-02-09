<template>
  <div class="mall-footer">
    <van-tabbar
      v-model="active"
    >
      <van-tabbar-item
        v-for="tab in tabConfig"
        v-bind="tab"
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
      return {};
    },
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
    },
    computed: {
      active: {
        get () {
          const { path } = this.$route;
          const index = this.tabConfig.findIndex(tab => tab.to === path);
          return index;
        },
        // v-model vue 提供的一个语法糖：
        // <custom-input v-bind:value="searchText" v-on:input="searchText=$event"></custom-input>
        // 是绑定值，并且通过自定义input事件来改变值的一个简写
        // 所以这里需要定义set方法来改变计算属性中的值
        set () {}
      }
    },
    methods: {}
  };
</script>

<style scoped lang="scss">
  .mall-footer {

  }
</style>
