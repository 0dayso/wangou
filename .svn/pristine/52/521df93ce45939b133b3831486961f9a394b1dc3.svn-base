<template>
  <div>
    <div v-title data-title="我的推广">
    </div>
    <!-- 用户信息 -->
  <component :is="currentView" transition="fade" transition-mode="out-in"></component>
   <!-- 卡片 -->
   <div class="dataList" :style="{backgroundImage: 'url(' +carbg + ')'}">
     <div class="dataBox">
       <div class="dataNUmber">{{tgPersons}}</div>
       <div class="dataTxt">推广人数</div>
     </div>
        <div class="dataBox">
       <div class="dataNUmber">{{yjCount}}</div>
       <div class="dataTxt">业绩总收入</div>
     </div>
        <div class="dataBox">
       <div class="dataNUmber">{{totalMoney}}</div>
       <div class="dataTxt">业绩余额</div>
     </div>
   </div>
   <!-- 推广分享 -->
   <div class="userShare">
     <div class="qrCode">
       <img :src='ercodr' alt="">
     </div>
     <div class="shareBtn">
       <div class="oneshare">长按分享</div>
       <div class="preservation">长按保存</div>
     </div>
   </div>
   <!-- 查看推广 -->
       <section class="aui-content aui-margin-b-10 sharesee">
        <div class="aui-grid">
            <div class="aui-row">
                <router-link class="aui-col-xs-4" to="/seeextension">
                    <div class="shareimg tuiguang"></div>
                    <div class="aui-grid-label">查看推广</div>
                </router-link>
                <router-link class="aui-col-xs-4" to="/achievementmx">
                    <div class="shareimg yeji"></div>
                    <div class="aui-grid-label">业绩明细</div>
                </router-link>
                <router-link  class="aui-col-xs-4" to="/withdrawals">
                    <div class="shareimg tixian"></div>
                    <div class="aui-grid-label">我要提现</div>
                </router-link >
            </div>
        </div>
    </section>     
  </div>
</template>
<script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script>
import '../../../static/css/aui.css'
export default {
  data () {
    return {
      ercodr: require('../../assets/user/erbg.png'),
      carbg: require('../../assets/user/cardbg.png'),
      msg: '成为我们公众号推广员，开启你的玩购之旅，请完善下面信息：',
      currentView: 'businesscard',
      totalMoney: '0.00',
      tgPersons: '0.00',
      yjCount: '0.00'
    }
  },
  methods: {
    // 获取信息
    agentInfo: function () {
      this.$http.post(this.$store.state.postUrl + '/Api/Agent/agentInfoNew', {'ssAuth': this.$store.state.ssAuth}, {emulateJSON: true})
      .then(function (res) {
        console.log(res)
        if (res.body.code === 10000) {
          this.ercodr = res.body.data.spreadQRCode
          this.totalMoney = res.body.data.totalMoney
          this.tgPersons = res.body.data.tgPersons
          this.yjCount = res.body.data.yjCount
        }
      })
    }
  },
  components: {
    // 名片
    'businesscard': require('./businesscard.vue')
  },
  mounted () {
    this.agentInfo()
    // 微信调用分享接口
  }
}
</script>

<style scoped>
/*用户资料卡片样式 start*/
  .aui-content-padded{
    height: 4.266rem;
    background-color: #ddd;
    margin: 0;
    overflow: hidden;
  }
  .userBg{
    background-size: cover; 
  }
  .aui-card-list-user-avatar{
    width: 2.133rem;
  }
  .set{
    width: 0.854rem;
    height: 0.854rem;
    background: url(../../assets/user/setting.png);
    background-size: cover;
    position: absolute;
    right: 0.64rem;
    top: 0.64rem;
  }
  .aui-content-padded .aui-content{
    margin-top: 1.173rem;
  }
  .aui-card-list-user-avatar{
    margin-left: 0.64rem;
  }
  .aui-list-item-title{
    color: #333;
    font-size:0.64rem !important;
    margin-top: 0.32rem;
    margin-bottom: 0.426rem;
    display: inline-block;
    float: left;
  }
  .userid{
    font-size: 0.512rem;
    color: #9d9d9d;
    line-height: 0;
    line-height: 0.512rem;
  }
  .userdengji{
    width: 0.768rem;
    height: 0.768rem;
    background: url(../../assets/user/vip2.png);
    background-size: cover;
    float: left;
    margin:0.32rem 0.32rem 0 0.32rem;
    border-radius: 100%;
  }
  .username{
    overflow: hidden;
  }
  .userType{
    font-size:0.64rem !important;
    margin-top: 0.32rem;
    color: #0fc9c0;
  }
  .apply{
    background-image: url(../../assets/user/tuiguangyuan.png);
    background-size: 2.56rem 0.96rem;
    position: absolute;
    right: 0.64rem;
    width: 2.56rem;
    height: 0.96rem;
    top: 2.24rem;
  }
  /*用户资料卡片样式 end*/ 
  /*用户卡片数据*/
  .dataList{
    width: 93.3%;
    height: 4.266rem;
    margin: 0.64rem auto;
    background-image: url(../../assets/user/cardbg.png);
    background-size: 100% 100%;
  }
  .dataBox{
    float: left;
    width: 33.33%;
    height: 100%;
    overflow: hidden;
  }
  .dataBox .dataNUmber{
    margin-top: 0.96rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
  }
  .dataBox .dataTxt{
    margin-top: 0.533rem;
    font-size: 0.64rem;
    color: #eaedec;
    text-align: center;
  }
  .userShare{
    padding: 1.28rem 0;
    background: #fff;
    overflow: hidden;
    border-bottom: 0.03rem solid #eeeeee;
  }
  /*二维码*/
  .userShare .qrCode{
    float: left;
    width: 4.586rem;
    height: 4.586rem;
    margin-left: 3.093rem;
  }
  .userShare .qrCode img{
    width: 100%;
  }
  .userShare .shareBtn{
    margin-left: 2.453rem;
    float: left;
  }
  .shareBtn div{
    width: 2.986rem;
    height: 1.28rem;
    line-height: 1.28rem;
    text-align: center;
    border: 0.05rem solid #53c7c4;
    color: #53c7c4;
    font-size: 0.512rem;
    background-color: #ddf4f3;
    border-radius: 1.28rem;
  }
  .shareBtn .oneshare{
    margin-top: 0.64rem;
  }
  .shareBtn .preservation{
    margin-top: 0.64rem;
  }
  /*查看推广*/
  .shareimg{
    width: 1.493rem;
    height: 1.8rem;
    margin: 0 auto;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .tuiguang{
    background-image: url(../../assets/user/tuiguang2.png);
  }
  .tixian{
    background-image: url(../../assets/user/tixian.png);    
  }
  .yeji{
    background-image: url(../../assets/user/yeji.png);    
  }
  .sharesee .aui-col-xs-4{
    padding: 0.853rem 0;
  }
  .sharesee .aui-grid .aui-grid-label{
    margin-top: 0.426rem;
    font-size: 0.64rem;
    color: #333333;
  }
</style>
