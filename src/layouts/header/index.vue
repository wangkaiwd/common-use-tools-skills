<template>
  <div class="mall-header van-hairline--bottom">
    <div class="left-back">
      <van-icon
        v-if="leftArrow"
        class="arrow-left"
        name="arrow-left"
      >
      </van-icon>
      <a class="back" href="javascript:;" @click="onLeftClick">{{leftText}}</a>
    </div>
    <div class="center-title">{{title}}</div>
    <div class="right-icon">
      <template v-if="rightIcon">
        <van-icon :name="rightIcon" @click="rightClick"></van-icon>
      </template>
      <span v-if="rightText">{{rightText}}</span>
    </div>
  </div>
</template>

<script>
  import { Icon } from 'vant';

  export default {
    props: {
      leftArrow: {
        type: Boolean,
        default: false
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
      },
      leftClick: {
        type: Function,
        default () {}
      },
      rightClick: {
        type: Function,
        default () {}
      }
    },
    name: 'MallHeader',
    components: {
      [Icon.name]: Icon
    },
    methods: {
      onLeftClick () {
        this.$router.go(-1);
        this.leftClick();
      }
    }
  };
</script>

<style scoped lang="scss">
  .mall-header {
    height: .8rem;
    background-color: $white;
    display: flex;
    justify-content: center;
    align-items: center;

    .arrow-left {vertical-align: top;}

    .back {
      margin-left: .04rem;
    }

    .center-title {
      flex: 1;
      text-align: center;
    }

    .left-back,
    .right-icon {
      width: 1.2rem;
    }

    .left-back {
      padding-left: .32rem;
    }

    .right-icon {
      padding-right: .32rem;
    }
  }

  [class*=van-hairline]::after {
    border-color: $border-color-gray;
  }

</style>

