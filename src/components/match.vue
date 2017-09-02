<style scoped>
  #index{
    overflow: hidden;
  }
  .swiper-container{
    height: 4.48rem;
  }
  .swiper-slide {
    background-repeat: no-repeat;
    background-size: 100% 4.48rem;
  }
 .aui-list-item .game_time_nobr,.wggamelist .aui-list-item-inner{
    border:0;
  }
    .gamebg{
    width: 2.56rem;
    height: 2.56rem;
    background-size: 100%;
  }
  .aui-card-list-user-info{
    font-size: 0.512rem;
    color: #999999;
  }
  .wggamelist .aui-list-item-title{
    font-size: 0.64rem;

  }
  .swiper-pagination-bullet{
    width: 0.32rem;
    height:0.32rem;
  }
    .swiper-pagination-bullet{
    transition:all 0.2s;
    width: 0.32rem;
    height:0.32rem;
    background: #999;
    opacity: 1;
  }
  span.swiper-pagination-bullet.swiper-pagination-bullet-active{
    width: 0.64rem;
    height: 0.32rem;
    background-color: #50e3c2!important;
    border-radius: 0.15rem;
  }
    .advertisement_heng,.advertisement_heng1{
    width: 0.64rem;
    height: 0.05rem;
    background: #333;
    position: absolute;
    top: 50%;
    margin-top:-0.025rem;
  }
    .aui-tui{
    width: 4.266rem;
    line-height: 2.133rem;
    position: relative;
    font-size: 0.64rem;
    color: #666666;
    text-align: center;
    margin:0 auto;
  }
  .advertisement_heng{
    left: -0.64rem;
  }
  .advertisement_heng1{
    right: -0.64rem;
  }
    .hometowngame .aui-list .aui-list-item{
    padding:0 0.64rem;
    border-bottom:0.05rem solid #eeeeee;
  }
  .aui-shops-header{
    width: 3.2rem;
  }
    .aui-card-list{
    margin-bottom: 0;
  }
    .aui-heng{
    width: 1.173rem;
    height: 0.03rem;
    background: #cccccc;
    position: absolute;
    left: -1.493rem;
    top: 50%;
    margin-top: -0.0107rem;
  }
  .heng2 {
    width: 1.173rem;
    height: 0.03rem;
    background: #cccccc;
    position: absolute;
    right: -1.493rem;
    top: 50%;
    margin-top: -0.0107rem;
  }
  .stargame{
    position: absolute;
    width: 2.986rem;
    height: 1.28rem;
    right: 0;
    top: 50%;
    margin-top: -0.64rem;
    background-size: 2.986rem 1.2rem;
    background-image: url(../assets/match/gogame.png);
    background-repeat: no-repeat;
  }
  .aui-list-item .aui-media-list-item-inner{
    border: 0;
  }
  .aui-list .aui-list-item-inner{
    border-bottom: 0.05rem solid #eeeeee;
    padding-right: 0;
  }
  .aui-list .aui-list-item-media{
    width: auto;
  }
  .aui-list .aui-list-item{
    background-image: none;
  }
  /*人数*/
  .bumber{
    width: 1.386rem;
    margin-left: 1.28rem;
    margin-top: 0.6rem;
    height: 0.810rem;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url(../assets/match/numberof.png);
  }
  .aui-list-item-text .game_num{
    line-height: 2rem;
    font-size: 0.64rem;
    color: #f5a66b;
  }
  .game_time{
    background-image: url(../assets/match/game_time.png);
  }
  .aui-list-item-text .game_times{
    color: #4a90e5;
  }
  .game_time_nobr .aui-list-item-inner{
    border-bottom: 0;
  }
  .tui-v{
    margin-top: 0.64rem;
    background: #fff;
  }
  .aui-media-list{
    background-image: none;
  }
  .wggamelist .gameli{
    padding: 0;
    border: 0;
  }
  .wggamelist .gamepi{
    padding: 0 0.75rem 0 0;
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
</style>
<style>
  .swipers .swiper-pagination-bullet{
    width: 0.32rem;
    height:0.32rem;
    background: #999;
    opacity: 1;
    transition:all 0.2s;
  }
  .swipers span.swiper-pagination-bullet.swiper-pagination-bullet-active{
    width: 0.64rem;
    height: 0.32rem;
    background-color: #50e3c2!important;
    border-radius: 0.15rem;
  }
</style>
<template>
  <div id="index">
  <div v-title data-title="比赛">
  </div>
<!-- 底部   -->
<componentName></componentName>
<!-- 轮播图 -->
      <div class="swipers">
      <swiper :options="swiperOption"  ref="mySwiper">
            <swiper-slide v-for="item in items">
              <img :src="item.imgUrl" @click="goBanners(item.type, item.returnId, item.webUrl)">
            </swiper-slide>  
              <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div>  
      </swiper> 
      </div> 
<!-- 比赛列表     -->
      <div class="aui-timeline-item hometowngame">
                <div class="aui-timeline-item-inner">
                    <div class="aui-card-list tui-v">
                        <div class="aui-tui aui-shops-header"><div class="aui-heng"></div>比赛列表<div class="heng2"></div></div>
                        </div>
                      <div class="aui-content aui-margin-b-15">
                      <ul class="aui-list aui-media-list" >
                        <li class="aui-list-item" v-for='item in gamearr'>
                          <div class="aui-media-list-item-inner wggamelist">
                          <!-- 游戏图 -->
                            <div class="aui-list-item-media">
                              <div class="aui-4img shopsback gamebg" v-bind:style="{'background-image':'url('+item.img+')'}"></div>
                            </div>
                         <!-- 游戏信息    -->
                        <div class="aui-list-item-inner">
                            <div class="aui-list-item-text game_titie">
                               <div class="aui-list-item-title">{{item.title}}</div>
                            </div>
                            <!-- {{it.coins[0].name}} -->
                            <div class="aui-card-list-user-info" v-for="it in item.prise">{{it}}</div>
                         <!-- 开启游戏        -->
                         <div class="stargame" @click="lookApp"></div>
                        </div>
                        </div>
                        <!-- 人数 -->
                        <div class="aui-media-list-item-inner wggamelist">
                          <div class="aui-list-item-media gamepi"> 
                              <div class="bumber"></div>                     
                          </div>
                          <div class="aui-list-item-inner gameli">
                            <div class="aui-list-item-text"> 
                              <span class='game_num'>{{item.pers}}人参加</span>
                            </div>
                          </div>
                          <div class="aui-list-item-media gamepi" v-if="item.time"> 
                                <div class="bumber game_time"></div>                     
                          </div>
                          <div class="aui-list-item-inner gameli" v-if="item.time">
                            <div class="aui-list-item-text"> 
                              <span class='game_num game_times'>{{item.time}}</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                </div>
                </div>
        </div>
      <div v-if="nomore" class="noMore">没有更多</div>
      <div class="loading" v-if="loadings"><mt-spinner  type="fading-circle"></mt-spinner></div>
      <h5 v-if="dataLength">暂无相关商品</h5>
  </div>
</template>
<script>
import '../../static/css/aui.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
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
      swiperOption: {
        notNextTick: true,
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        autoplayDisableOnInteraction: false,
        autoplay: 2000,
        onSlideChangeEnd: swiper => {
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      },
      items: [{'imgUrl': ''}],
      gamearr: [],
      type: 0,
      ssAuth: this.$store.state.ssAuth,
      // 公众号编码
      gzhCode: this.$store.state.gzhCode,
      page: 1,
      dataLength: false,
      loadings: false,
      nomore: true,
      loading: true,
      device: '',
      scrollTop: 0
    }
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
  mounted () {
    // 设置轮播
    this.swiper.slideTo(0, 0, false)
    this.getBanner()
    // 判断手机系统
    var u = navigator.userAgent
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    if (isAndroid) {
      this.device = 0
    } else if (isiOS) {
      this.device = 1
    }
    this.getData()
  },
  methods: {
    getData: function (e) {
      // 获取比赛数据
      this.$http.post(this.$store.state.postUrl + '/Api/Match/matchList', {'ssAuth': this.ssAuth, 'gzhCode': this.gzhCode, 'page': this.page, 'pageSize': 100, 'device': this.device, 'appCode1': '4001'}, {emulateJSON: true})
      .then(function (res) {
        console.log(res)
        if (res.body.data.length > 0) {
          for (let i = 0; i < res.body.data.length; i++) {
            this.gamearr.push(res.body.data[i])
          }
          // 判断是否还有数据
          // if (res.body.pageInfo.more === 0) {
          //   this.loadings = false
          //   this.loading = true
          //   this.nomore = true
          // } else {
          //   this.loading = false
          // }
        } else {
          // this.nomore = false
          // this.loadings = false
          // this.dataLength = true
        }
      })
    },
    // 执行底部加载
    // loadMore: function () {
    //   this.page++
    //   this.loading = true
    //   setTimeout(() => {
    //     // this.getData()
    //   }, 2500)
    // },
    lookApp: function () {
      if (this.device === 0) {}
    },
    getBanner: function () {
      // 获取轮播数据
      this.$http.post(this.$store.state.postUrl + '/Api/SSPT/advertisementImg', {'ssAuth': this.ssAuth, 'gzh_code': this.gzhCode, 'position': 4}, {emulateJSON: true})
      .then(function (res) {
        if (res.body.code === 10000) {
          this.items = res.body.data
        }
      })
    },
    // 跳转广告
    goBanners: function (type, id, url) {
      if (type === 4 || type === 5) {
        this.$router.push({ path: '/store/stroeint?storeId=' + id })
      } else if (type === 2) {
        this.$router.push({ path: '/prize/prizeint?id=' + id })
      } else if (type === 3) {
        window.location.href = url
      }
    }
  }
}
</script>

