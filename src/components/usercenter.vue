<style scoped>
  #index{
    margin-bottom: 2.5rem;
  }
  .aui-card-list-content-padded{
    margin: 0.64rem;
    background-size: 100%;
    border-radius: 5px;
    padding: 0;
    height: 4.266rem;
  }
  .userCard{
    width: 50%;
    float: left;
    height: 100%;
    text-align: center;
    color: #fff;
  }
  .userCard .cardnum{
    margin-top: 1.066rem;
  }
  .aui-card-list-content-padded{
    overflow: hidden;
  }
 .cardnum{
    font-size: 0.853rem;
    font-weight: 700;
  }
  .aui-grid{
    background: transparent;
  }
  .fangka{
    background-image: url(../assets/user/fangka.png);

  }
  .huiyuan{
    background-image: url(../assets/user/huiyuan.png);
  }
  .jinbi{
     background-image: url(../assets/user/jinbi.png);
  }
  .aui-grid [class*=aui-col-]{
    padding: 0
  }
  .usergames{
    height: 4.48rem;
    background: #fff;
  }
  .gameicon{
    background-size: contain;
    background-repeat: no-repeat;
    width: 1.173rem;
    height: 1.173rem;
    margin: 0.64rem auto 0;
  }
  .aui-margin-b-10{
    margin-bottom: 0!important;
    border-bottom: 1px solid #eeeeee;
  }
  .aui-col-xs-4{
    height: 4.4rem;
  }
  .aui-col-xs-4 .gameName{
    color: #0fc9c0;
    margin: 0.533rem 0 0.2rem;
    font-size: 0.533rem;
  }
  .aui-col-xs-4 p,.aui-grid .my_fonts{
    color: #666666;
    font-size: 0.512rem;
  }
 .cardImg{
    width: 1.28rem;
    height: 1.28rem;
    margin: 0.64rem auto;
   background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom center;
  }
  .chongzhi{
    background-image: url(../assets/user/chongzhi.png);
  }
  .aui-grid-label{
    margin-bottom: 0.64rem;
    color: #666666;
  }
  .jiangpin{
    background-image: url(../assets/user/jiangpin.png);
  }
  .dingdan{
    background-image: url(../assets/user/dingdan.png);
  }
  .tuiguang{
    background-image: url(../assets/user/tuiguang.png);
  }
  .dizhi{
    background-image: url(../assets/user/dizhi.png);
  }
  .bankcard{
    background-image: url(../assets/user/bankcard.png);
  }
  .message{
    background-image: url(../assets/user/message.png);
  }
  .kefu{
     background-image: url(../assets/user/kefu.png);
  }
  .cardname{
    position: relative;
    padding-left: 0.7rem;
  }
  .quanTuan{
    position: absolute;
    left: 27%;
    top: 0.1rem;
    width: 0.7rem;
    height: 0.7rem;
    background-image: url(../assets/user/quan.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    display: inline-block;
  }
  .fuchiQuan{
    background-image: url(../assets/user/fuchiquan.png);
  }
</style>
<template>
<div id="index">
    <div v-title data-title="个人中心">
    </div>
<!-- 底部   -->
  <componentName></componentName>
  <component :is="currentView" transition="fade" transition-mode="out-in"></component>
<!-- 名片 -->
   <!-- 优惠卷 -->
   <div class="aui-card-list" style="background:none;">
    <div class="aui-card-list-content-padded" :style="{backgroundImage: 'url(' +carbg + ')'}">
      <div class="userCard">
       <TypeButton  type="defaul">
        <div class="cardnum">{{fuchiquan}}</div>
        <div class="cardname"><div class="quanTuan fuchiQuan"></div>扶持券</div>
       </TypeButton>
      </div>    
      <div class="userCard">
        <TypeButton  type="defaul">
        <div class="cardnum">{{gongzhongquan}}</div>
        <div class="cardname"><div class="quanTuan"></div>公众券</div>
        </TypeButton>
      </div>   
     </div>
   </div>
   <!-- 用户的游戏房卡会员游戏币 -->
    <section class="aui-content aui-margin-b-10 usergames">
        <div class="aui-grid">
            <div class="aui-row">
                <div class="aui-col-xs-4">
                <TypeButton  type="defaul">
                   <div class="gameicon fangka"></div>
                   <div class="gameName">{{room_card}}</div>
                     <p>游戏猫钻</p>
                 </TypeButton>    
                </div>
                <div class="aui-col-xs-4">
                <TypeButton  type="defaul">
                    <div class="gameicon huiyuan"></div>
                    <div class="gameName">{{vip_time}}</div>
                    <p>游戏会员</p>
                </TypeButton>
                </div>
                <div class="aui-col-xs-4">
                <TypeButton  type="defaul">
                  <div class="gameicon jinbi"></div>
                  <div class="gameName">{{gold}}</div>
                  <p>游戏金币</p>
                </TypeButton>  
               </div>
            </div>
        </div>
    </section>
    <!-- 用户的余额 -->
       <section id="yue" class="aui-content aui-margin-b-10" style="background:#fff;">
        <div class="aui-grid">
            <div class="aui-row">
                <router-link class="aui-col-xs-3"  to='/recharge'>
                <TypeButton  type="defaul">
                <div class="cardImg chongzhi"></div>
                <div class="aui-grid-label my_fonts">我的充值</div>
                </TypeButton>
                </router-link>
                <router-link class="aui-col-xs-3" to='/prize'>
                    <div class="cardImg jiangpin"></div>
                    <div class="aui-grid-label my_fonts">我的奖品</div>
                </router-link>
                <router-link class="aui-col-xs-3" to='/shoporder'>
                    <div class="cardImg dingdan"></div>
                    <div class="aui-grid-label my_fonts">我的订单</div>
                </router-link>
                <div class="aui-col-xs-3" @click="tuiguang">
                    <div class="cardImg tuiguang"></div>
                    <div class="aui-grid-label my_fonts">我的推广</div>
                </div>
            </div>
        </div>
    </section>
     </section>
    <!-- 用户的余额 -->
       <section id="dizhi" class="aui-content aui-margin-b-10" style="background:#fff;">
        <div class="aui-grid">
            <div class="aui-row">
                <router-link class="aui-col-xs-3" to="/manaddress">
                <div class="cardImg dizhi"></div>
                <div class="aui-grid-label my_fonts">收货地址</div>
                </router-link>
                <router-link class="aui-col-xs-3" to="/banklist">
                    <div class="cardImg bankcard"></div>
                    <div class="aui-grid-label my_fonts">银行卡</div>
                </router-link>
                <router-link  class="aui-col-xs-3" to="/message">
                    <div class="cardImg message"></div>
                    <div class="aui-grid-label my_fonts">系统消息</div>
                </router-link >
                <div class="aui-col-xs-3" tapmode onclick="openDialog('text')">
                <div class="cardImg kefu"></div>
                    <div class="aui-grid-label my_fonts">在线客服</div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import '../../static/css/aui.css'
import TypeButton from './TypeButton.vue'
import BaseButton from './BaseButton.vue'
import { Toast } from 'mint-ui'
export default {
  name: 'index',
  data () {
    return {
      fuchiquan: 0,
      fuliquan: 0,
      gongzhongquan: 0,
      room_card: 0,
      vip_time: 0,
      gold: 0,
      bg: require('../assets/user/backuser.png'),
      carbg: require('../assets/user/cardbg.png'),
      currentView: 'businesscard',
      ssAuth: this.$store.state.ssAuth, // 令牌
      isAgent: this.$store.state.isAgent // 是否成为代理
    }
  },
  methods: {
    // 获取用户券信息
    getVoucher: function () {
      this.$http.post(this.$store.state.postUrl + '/Api/User/getUserQuanInfo', {'ssAuth': this.ssAuth, 'gzh_code': this.$store.state.gzhCode}, {emulateJSON: true})
      .then(function (res) {
        if (res.body.code === 10000) {
          this.fuchiquan = res.body.data.fuchiquan
          this.fuliquan = res.body.data.fuliquan
          this.gongzhongquan = res.body.data.gongzhongquan
        }
      })
    },
    // 获取游戏相关信息
    getGameinfo: function () {
      this.$http.post(this.$store.state.postUrl + '/Api/User/getUserGameInfo', {'ssAuth': this.ssAuth}, {emulateJSON: true})
      .then(function (res) {
        if (res.body.code === 10000) {
          this.room_card = res.body.data.room_card
          this.vip_time = res.body.data.vip_time
          this.gold = res.body.data.gold
        }
      })
    },
    // 检测是否为推广员
    tuiguang: function () {
      if (this.isAgent === 0) {
        this.$router.push({path: '/applicant'})
      } else {
        this.$router.push({path: '/exension'})
      }
    }
  },
  mounted () {
    // 检测是否获得授权码 否则无法进行操作
    if (this.ssAuth !== '0') {
      this.getVoucher()
      this.getGameinfo()
    } else {
      document.getElementById('yue').addEventListener('click', function (e) {
        e.preventDefault()
        Toast('参加过玩购游戏的用户才可以进入哦')
      }, true)
      document.getElementById('dizhi').addEventListener('click', function (e) {
        e.preventDefault()
        Toast('参加过玩购游戏的用户才可以进入哦')
      }, true)
    }
  },
  components: {
    // 名片
    'businesscard': require('./center/businesscard.vue'),
    TypeButton,
    BaseButton
  }
}
</script>
