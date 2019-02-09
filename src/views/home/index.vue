<template>
  <div class="home">
    <div class="header">
      <van-row>
        <van-col span="4">
          <van-icon class="location-icon" name="location-o"/>
        </van-col>
        <van-col span="14">
          <form class="search-form" action="/">
            <van-search
              v-model="keywords"
              placeholder="请输入搜索关键词"
              @search="onSearch"
              @cancel="onCancel"
            />
          </form>
        </van-col>
        <van-col span="6">
          <van-button class="search-button">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="home-swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="~assets/images/shopVuePic001.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="~assets/images/shopVuePic002.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="~assets/images/shopVuePic003.jpg" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
  import { Row, Col, Icon, Button, Search, Swipe, SwipeItem } from 'vant';

  export default {
    name: 'Home',
    components: {
      [Row.name]: Row,
      [Col.name]: Col,
      [Icon.name]: Icon,
      [Button.name]: Button,
      [Search.name]: Search,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem
    },
    data () {
      return {
        keywords: ''
      };
    },
    mounted () {
    },
    computed: {},
    methods: {
      onSearch () {

      },
      onCancel () {

      }
    }
  };
</script>

<style lang="scss" scoped>
  .home {
    .van-col {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .van-row {
      height: 100%;
    }

    .van-search {
      padding: 0;
      border-radius: $border-radius-sm;
    }

    .header {
      height: .8rem;
      background-color: $pink;
    }

    .search-form {
      width: 100%;
    }

    .location-icon {
      font-size: 24px;
      color: $white;
    }

    .search-button {
      height: .4rem;
      line-height: .4rem;
    }
  }

</style>
