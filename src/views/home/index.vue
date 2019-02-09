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
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="img in swipeImg" :key="img.id">
          <img class="swipe-img" v-lazy="img.url" alt="">
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
        keywords: '',
        swipeImg: [
          { id: 0, url: 'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg' },
          { id: 1, url: 'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg' },
          { id: 2, url: 'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg' },
          { id: 3, url: 'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg' },
        ]
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
      max-height: .4rem;
      line-height: .4rem;
    }

    .swipe-img {
      height: 4.8rem;
    }
  }

</style>
