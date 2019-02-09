<template>
  <div class="mall-header">
    <div class="left-back">
      <van-icon name="arrow-left"></van-icon>
      <a href="javascript:;" @click="$router.go(-1)">返回</a>
    </div>
    <div class="center-title"></div>
    <div class="right-icon">
    </div>
  </div>
</template>

<script>
  import { Icon } from 'vant';

  export default {
    props: {
      leftArrow: {
        type: Boolean,
        default: true
      },
      leftText: {
        type: String,
        default: '返回'
      },
      title: {
        type: String,
        required: true
      },
      rightText: {
        type: String,
        default: ''
      },
      rightIcon: {
        type: String,
        default: undefined
      }
    },
    name: 'MallFooter',
    components: {
      [Icon.name]: Icon
    }
  };
</script>

<style scoped lang="scss">
  .mall-header {
    height: .8rem;
    background-color: $pink;
  }
</style>
