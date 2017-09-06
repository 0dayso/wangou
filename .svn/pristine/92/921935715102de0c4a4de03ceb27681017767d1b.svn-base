<style scoped>
  #index{
    overflow: hidden;
  }
  .swiper-container{
    height: 8.533rem;
  }
  .swiper-slide {
    background-repeat: no-repeat;
    background-size: 100% 8.533rem;
  }
  .aui-4img{
    width: 2.176rem;
    height: 2.176rem;
    margin-right: 0.64rem;
    float: left;
  }
  .roomcard{
    position: relative;
    width: 96%;
    height: 3.626rem;
    background-size: 100% 100%;
    background-image: url(../assets/shopmall/rectangle.png);
    margin:0.64rem auto 0;
    padding: 0.64rem;
  }
  .card_ints{
    float: left;
    position: relative;
  }
  .card_ints .card_title{
    margin-top: 0.256rem;
    float: left;
    font-size: 0.682rem;
    color: #333333;
    width: 100%;
  }
  .card_ints .card_txt{
    font-size: 0.533rem;
    color: #ccc;
    margin-top: 0.32rem;
    width: 100%;
  }
   .card_btn {
    width: 2.666rem;
    height: 1.36rem;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url(../assets/shopmall/bugbtn.png);
    position: absolute;
    right: 0.64rem;
    top: 50%;
    margin-top: -0.69rem;
  }
 .recharge{
    background-image: url(../assets/shopmall/recharge.png)
  }
  .nomore{
    font-size: 0.469rem;
    color: #ccc;
    text-align: center;
    line-height: 1.706rem;
    background: #f8f8f8;
  }
  /*广告图*/
  .sop_sdvertisement{
    margin-top: 0.64rem;
    display: block;
    overflow: hidden;
  }
  /*物品*/
  .goods{
    padding:0.64rem 4%;
    background-color: #fff;
    margin-top: 0.64rem;
  }
  .goods .goods_price span{
    float: left;
  }
  .goods .goodstit{
    font-size: 0.746rem;
    margin-top: 0.64rem;
    color: #333333;
  }
  .goods .aui-exchange-img{
    float: left;
    font-size: 0.512rem;
    color: #53c7c4;
    display: inline-block;
    padding-left: 0.96rem;
    background-size: 0.746rem 0.469rem;
    background-repeat: no-repeat;
    background-position: center left;
    background-image: url(../assets/shopmall/many.png);
    margin-left: 0.64rem;
  }
  .goods .goods_price{
    overflow: hidden;
    margin-top: 0.64rem;
    line-height: 0.746rem
  }
  .goods .goods_price .price{
    font-size: 0.64rem;
    color: #ff405d;
    font-weight: 700;
  }
  h5{
    display: block!important;
    text-align: center;
    width: 100%;
    line-height: 5rem;
  }
  /*加载*/
  .loading{
    width: 1.2rem;
    height: 2rem;
    margin: 0.64rem auto 0.64rem;
    overflow: hidden;
    text-align: center;
  }
  /*没有更多*/
  #app .noMore{
    width: 100%;
    height: 1.92rem;
    color: #cccccc;
    line-height: 1.92rem;
    text-align: center;
    font-size: 0.534rem;
  }   
  /*推荐*/
  .tuijian{
    position: absolute;
    width: 1.813rem;
    height: 1.813rem;
    top: 0;
    left: 0;
    background-image: url(../assets/tuijian.png);
    background-size: 100%;
  }
</style>
<style>
  .shopmall_swipers .swiper-pagination-bullet{
    width: 0.32rem;
    height:0.32rem;
    background: #999;
    opacity: 1;
    transition:all 0.2s;
  }
  .shopmall_swipers span.swiper-pagination-bullet.swiper-pagination-bullet-active{
    width: 0.64rem;
    height: 0.32rem;
    background-color: #50e3c2!important;
    border-radius: 0.15rem;
  }   
</style>
<template>
  <div id="index">
  <div v-title data-title="商城" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
  </div>
<!-- 底部 -->
  <componentName></componentName>   
<!-- 轮播图 -->
      <div class="shopmall_swipers">
      <swiper :options="swiperOption"  ref="mySwiper">
            <swiper-slide v-for="item in items">
                <img :src="item.imgUrl" @click="goBanner(item.type, item.returnId, item.webUrl)">
            </swiper-slide>
<!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      </div>
<!-- 房卡 -->
      <div class="roomcard aui-media-list-item-inner">
        <div class="aui-list-item-media">
<!-- 图标 -->
          <div class="aui-4img">
            <img src="../assets/shopmall/card2.png" alt="">
          </div>
<!-- 卡信息 -->
          <div class="card_ints">
            <div class="card_title">猫钻购买</div>
            <div class="card_txt">购买多多，福利多多</div>
          </div>
        </div>
        <div class="card_btn" v-on:click="buyroomcard"></div>
      </div>
      <!-- 游戏币购买 -->
      <div class="roomcard aui-media-list-item-inner ">
        <div class="aui-list-item-media">
<!-- 图标 -->
          <div class="aui-4img">
            <img src="../assets/shopmall/gold.png" alt="">
          </div>
<!-- 卡信息 -->
          <div class="card_ints">
            <div class="card_title">游戏币购买</div>
            <div class="card_txt">每购买1天会员，赠送1万游戏币</div>
  
          </div>
          <div class="card_btn recharge" v-on:click="buygame"></div>
        </div>
      </div>
<!-- 广告 -->
      <router-link class="aui-card-list-content sop_sdvertisement" to="/buygames">
        <img :src="indexGao.imgUrl" alt="">
      </router-link>
<!-- 商品 -->
      <div class="aui-card-list-content goods" v-for="item in goodsarr" v-on:click="goprizeInt(item.goodsId)">
        <div style="position: relative;">
          <div class="tuijian"></div>
          <img :src="item.goodsImage" alt="">
        </div>
        <div class="goodstit">
          {{item.goodsName}}
        </div>
        <div class="goods_price"><span class="price">¥{{item.amount}}</span><div class="aui-exchange-img"><span>可用抵扣价格</span><span>&nbsp;¥{{item.discount}}</span></div></div>
      </div>
      <div v-if="nomore" class="noMore">没有更多</div>
      <div class="loading" v-if="loadings"><mt-spinner  type="fading-circle"></mt-spinner></div>
      <h5 v-if="dataLength">暂无相关商品</h5>
  </div>
</template>
<script>
import '../../static/css/aui.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
let sdvertisement = require('../assets/shopmall/shopmall_gg0.png')
import { InfiniteScroll } from 'mint-ui'
import 'mint-ui/lib/style.css'
export default {
  components: {
    swiper,
    swiperSlide,
    InfiniteScroll
  },
  data () {
    return {
      // 测试轮播图片
      items: [{'imgUrl': ''}],
      activeId: '',
      // 轮播配置
      swiperOption: {
        notNextTick: true,
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
        autoplay: 6000,
        spaceBetween: 30,
        onSlideChangeEnd: swiper => {
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      },
      // 测试商品轮播
      indexGao: '',
      goodsarr: [],
      sdvertisement: sdvertisement,
      type: 0,
      ssAuth: this.$store.state.ssAuth,
      gzhCode: this.$store.state.gzhCode,
      page: 1,
      dataLength: false,
      loadings: true,
      nomore: false,
      loading: true,
      scrollTop: 0
    }
  },
  mounted () {
    // 获取轮播图
    this.$http.post(this.$store.state.postUrl + '/Api/SSPT/advertisementImg', {'ssAuth': this.ssAuth, 'gzh_code': this.gzhCode, 'position': 2}, {emulateJSON: true})
    .then(function (res) {
      if (res.body.code === 10000) {
        this.items = res.body.data
      }
    })
    this.swiper.slideTo(0, 0, false)
    this.getData()
    // 获取广告
    this.getGao()
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  // 查看详情 返回刚才的位置
  deactivated () {
    this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  },
  activated () {
    window.scrollTo(0, this.scrollTop)
  },
  methods: {
    // 购买房卡
    buyroomcard: function () {
      this.$router.push({ path: '/frontend/roomcard' })
    },
    // 购买游戏币
    buygame: function () {
      this.$router.push({ path: '/gamerech' })
    },
    goprizeInt: function (e) {
      this.$router.push({ path: '/prize/prizeint?id=' + e })
    },
    getData: function (e) {
    // 获取商品数据
      this.$http.post(this.$store.state.postUrl + '/Api/Mall/goodsList', {'page': this.page, 'pageSize': 10, 'categoryId': 0, 'gzh_code': this.gzhCode}, {emulateJSON: true})
      .then(function (res) {
        console.log(res)
        if (res.body.data.length > 0) {
          for (let i = 0; i < res.body.data.length; i++) {
            this.goodsarr.push(res.body.data[i])
          }
          // 判断是否还有数据
          if (res.body.pageInfo.more === 0) {
            this.loadings = false
            this.loading = true
            this.nomore = true
          } else {
            this.loading = false
          }
        } else {
          this.nomore = false
          this.loadings = false
          this.dataLength = true
        }
      })
    },
    getGao: function () {
      // 获取广告数据
      this.$http.post(this.$store.state.postUrl + '/Api/App/getAppAdv', {'position': 6}, {emulateJSON: true})
      .then(function (res) {
        console.log(res)
        if (res.body.code === 10000) {
          this.indexGao = res.body.data
        }
      })
    },
    // 跳转广告
    goBanner: function (type, id, url) {
      if (type === 4 || type === 5) {
        this.$router.push({ path: '/store/stroeint?storeId=' + id })
      } else if (type === 2) {
        this.$router.push({ path: '/prize/prizeint?id=' + id })
      } else if (type === 3) {
        window.location.href = url
      }
    },
    // 执行底部加载
    loadMore: function () {
      this.page++
      this.loading = true
      setTimeout(() => {
        this.getData()
      }, 2500)
    }
  }
}
</script>
