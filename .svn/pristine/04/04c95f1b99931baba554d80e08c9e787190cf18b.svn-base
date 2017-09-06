<style>
   .swiperbox .swiper-container{
    height: 7.253rem;
   } 
   .storeintx .swiper-pagination-bullet{
    width: 0.32rem !important;
    height: 0.32rem !important;
    background: #999;
    opacity: 1;
    transition:all 0.2s;
 }
 .storeintx .swiper-pagination-bullet-active{
    background: #000;
    width: 0.64rem !important;
    border-radius: 0.32rem;
 }
 .artInt .hunpai p{
    font-size: 0.5rem !important;
    color: #333!important;
    text-align: left;
 }
</style>
<style scoped>
  .artCard{
    padding: 0.64rem 0 0.426rem 0.64rem;
    background: #fff;
  }
  .artCard .artTitle{
    font-size: 0.746rem;
    color: #333333;
  }
  .artCard .deductible{
    font-size: 0.64rem;
    color: #999999;
    margin-top: 0.426rem;
  }
  .artmoney{
    padding-left: 0.96rem;
    background-image: url(../../assets/shopmall/many.png);
    background-size: 0.746rem 0.5rem;
    background-repeat: no-repeat;
    font-size: 0.5rem;
    line-height: 100%;
    color: #5ec9c6;
    margin-top: 0.213rem;
  }
  /*产品介绍*/
  .artInt{
    padding-top: 0.64rem;
    margin-top: 0.64rem;
    background: #fff;
    min-height: 5rem;
    padding-bottom: 2.133rem;
  }
 .artInt .artar{
  padding-left: 0.64rem;
 }
 .artar div{
  height: 0.64rem;
  font-size: 0.64rem;
  border-left: 0.213rem solid #53c7c4;
  line-height: 100%;
  padding-left: 0.213rem;
 }
 .artInt .artInt img{
  width: 100%;
 }
 .artInt .hunpai{
    font-size: .5rem;
    color: #333;
    text-align: left;
 }
 .artInt .hunpai img{
  width: 100%;
 }
  
 #index{
  margin-bottom: 0!important;
 }
 /*兑换*/
 .duihuan{
  width: 100%;
  line-height: 2.133rem;
  background: #53c7c4;
  font-size: 0.746rem;
  position: fixed;
  bottom: 0;
  color: #fff;
  text-align: center;
 }
 #jieshao{
  font-size: 0.5rem;
  color: #333;
  text-align: left;
  margin-top: 0.32rem;
  padding-left: 0.64rem;
 }
</style>
<template>
  <div id="index">
  <div v-title data-title="商品详情">
  </div>
<!-- 轮播图 -->
    <div class="swiperbox">
      <swiper class="storeintx" :options="swiperOption"  ref="mySwiper">
            <swiper-slide>
              <img :src="goodsInt.goodsImage" alt="">
            </swiper-slide> 
<!-- 这是轮播的小圆点 -->  
      <div class="swiper-pagination" slot="pagination"></div>       
      </swiper>
    </div>
<!-- 奖品信息       -->
    <div class="artCard">
      <div class="artTitle">{{goodsInt.goodsName}}</div>
      <div class="deductible">支持:抵扣劵（限{{goodsInt.discount}}个劵）</div>
      <div class="artmoney">¥{{goodsInt.amount}}</div>
      <div class="deductible">配送方式：<span v-if="goodsInt.goodsType == 1">包邮</span><span v-if="goodsInt.goodsType == 0">邮费15元</span></div>
    </div>
 <!-- 产品介绍    -->
    <div class="artInt" style=" padding-bottom:0.2rem">
      <div class="artar">
        <div>产品介绍</div>
      </div>
      <!-- 介绍 -->
      <div id="jieshao">
        
      </div>
    </div>
    <div class="artInt">
      <!-- 图片 -->
      <div class="artar" style="margin:5px 0;">
        <div>产品详情</div>
      </div>
      <div class="hunpai" id="hunpai">
      </div>
    </div>
    <div class="duihuan" @click="goDui">立即兑换</div>
  </div>
</template>
<script>
import '../../../static/css/aui.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
let xiang = require('../../assets/1322.png')
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      // 轮播插件
      swiperOption: {
        notNextTick: true,
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        loop: true,
        spaceBetween: 30,
        autoplayDisableOnInteraction: false,
        autoplay: 2000,
        onSlideChangeEnd: swiper => {
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      },
      // 轮播图
      goodsInt: [],
      xiang: xiang,
      // 奖品id
      goodsId: '',
      ssAuth: this.$store.state.ssAuth,
      gzhCode: this.$store.state.gzhCode
    }
  },
  computed: {
    // 轮播调用
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // 截取url参数
    this.goodsId = this.$route.query.id
    this.getData(this.goodsId)
  },
  methods: {
  // 查看奖品详情
    getData: function (id) {
      this.$http.post(this.$store.state.postUrl + '/Api/Mall/goodsInfo', {'ssAuth': this.ssAuth, 'goodsId': id}, {emulateJSON: true})
      .then(function (res) {
        console.log(res.data)
        if (res.body.code === 10000) {
          res.body.data.introduction = res.body.data.introduction.replace(/\n/g, '<br/>')
          var jieshao = document.getElementById('jieshao')
          var hunpai = document.getElementById('hunpai')
          jieshao.innerHTML = res.body.data.introduction
          hunpai.innerHTML = res.body.data.goodscontent
          this.goodsInt = res.body.data
        }
      })
    },
    // 立即兑换
    goDui: function () {
      this.$router.push({ path: '/frontend/orderdetails?id=' + this.goodsId })
    }
  }
}
</script>

