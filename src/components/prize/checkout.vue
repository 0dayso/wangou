<template>
<div>
    <div v-title data-title="结账买单">
    </div>
    <!-- 输入框  -->
    <div class="settlement">
      <div class="settlementInt">
          <span>消费总额:</span><input type="number" v-on:input="shuru" placeholder="询问后输入金额" v-model="total"   oninput="if(value.length>5)value=value.slice(0,5)" >
      </div>
    </div>
    <!-- 抵扣劵 -->
    <div class="deductible">
      <div class="deductibleli">
        <span>抵扣金额 (限{{xian}}个劵)</span>
        <span class="yue dikou"><input type="number" :placeholder="holder" v-model="num"  oninput="if(value.length>5)value=value.slice(0,5)" v-on:input="calculation"></span>
      </div>
      <div class="deductibleli">
        <span class="">支付类型</span>
        <span class="yue zhifu">
        <select>
          <option>微信支付</option>
          <!-- <option>现金支付</option> -->
        </select>
        </span>
      </div>      
    </div>

    <div class="deductible roidtype">
<!--       <div class="deductibleli xianjin">
        <span>现金支付</span>
        <span class="yue"><input class="aui-radio" type="radio" name="radio" checked=""></span>
      </div> -->
      <div class="deductibleli weixin" v-bind:style="{'background-image':'url('+apply.logo+')'}">
        <span class="">{{apply.title}}</span>
        <span class="yue"><input class="aui-radio" type="radio" name="radio" checked></span>
      </div>      
    </div>
    <!-- 实付金额 -->
    <div class="shifu">
      <span>实付金额</span>
      <span class="jin">¥{{pr}}</span>
    </div> 
    <!-- 确认买单 -->
    <div class="buybtn" @click="goBuy">确认买单</div>
</div>
</template>
<script>
import { Toast } from 'mint-ui'
import wx from 'weixin-js-sdk'
export default {
  data () {
    return {
      total: '', // 输入金额
      num: '', // 输入抵扣劵
      holder: '劵余额200个', // input  pre
      pr: '00.00', // 金额
      gongzhongquan: 0, // 公众券
      ssAuth: this.$store.state.ssAuth, // 令牌
      gzhCode: this.$store.state.gzhCode, // 公众号编码
      apply: '',
      huodong: [1],
      xian: 0,
      moneys: [],
      cai: 0
    }
  },
  mounted () {
    this.getVoucher()
    // 获取支付方式
    this.$http.post(this.$store.state.postUrl + '/Api/Pay/payTypeList', {}, {emulateJSON: true})
    .then(function (res) {
      if (res.body.code === 10000) {
        for (let i = 0; i < res.body.data.length; i++) {
          if (res.body.data[i].name === 'wxPay') {
            this.apply = res.body.data[i]
          }
        }
      }
    })
    // 获取店铺活动
    this.$http.post(this.$store.state.postUrl + '/Api/Store/getStoreActivity', {'storeId': this.$route.query.storeId}, {emulateJSON: true})
    .then(function (res) {
      this.huodong = res.body.data
    })
  },
  methods: {
    // 输入总金额
    shuru: function () {
      this.moneys = []
      this.xian = 0
      this.cai = this.total
      this.num = ''
      var lst = 0
      for (let i = 0; i < this.huodong.length; i++) {
        if (this.total >= parseInt(this.huodong[i].money)) {
          if (parseInt(this.huodong[i].money) > lst) {
            this.moneys = []
            lst = parseInt(this.huodong[i].money)
            this.moneys.push(this.huodong[i])
          }
        }
      }
      if (this.moneys.length > 0) {
        this.xian = this.moneys[0].quan
      }
    },
    // 输入抵扣券
    calculation: function () {
      if (this.num > this.gongzhongquan) {
        Toast('账户所剩公众券不足')
        this.num = ''
        this.pr = this.total
      } else if (this.num > this.xian) {
        Toast('抵扣券最多为' + this.xian + '个')
      } else
      if (this.total - this.num < 0) {
        this.pr = '00.00'
        this.num = ''
        Toast('不能多于消费金额')
      } else {
        this.pr = this.total - this.num
      }
    },
    // 获取用户券信息
    getVoucher: function () {
      this.$http.post(this.$store.state.postUrl + '/Api/User/getUserQuanInfo', {'ssAuth': this.ssAuth, 'gzh_code': this.$store.state.gzhCode}, {emulateJSON: true})
      .then(function (res) {
        if (res.body.code === 10000) {
          this.holder = '劵余额' + res.body.data.gongzhongquan + '个'
          this.gongzhongquan = parseInt(res.body.data.gongzhongquan)
        }
      })
    },
    // 下单
    goBuy: function () {
      if (this.num === '') {
        this.num = 0
      }
      if (this.total === 0 || this.total === '') {
        Toast('请输入消费总额')
      } else {
        this.$http.post(this.$store.state.postUrl + '/Api/Store/placeStoreOrder', {'ssAuth': this.ssAuth, 'payType': 'wxPay', 'storeId': this.$route.query.storeId, 'totalMoney': this.total, 'pointMoney': this.num}, {emulateJSON: true})
        .then(function (res) {
          if (res.body.code === 10000) {
            this.$http.post(this.$store.state.postUrl + '/Api/Pay/pay', {'ssAuth': this.ssAuth, 'order_sn': res.body.data.order_sn, 'pay_type': 'wxPay', 'device': 'wx', 'openid': this.$store.state.openid, 'app_code': this.gzhCode, 'pay_for': 2}, {emulateJSON: true})
            .then(function (res) {
              wx.ready(function () {
              // 支付配置
                wx.chooseWXPay({
                  appId: res.body.data.order_info.appId,
                  timestamp: res.body.data.order_info.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                  nonceStr: res.body.data.order_info.nonceStr, // 支付签名随机串，不长于 32 位
                  package: res.body.data.order_info.package,
                  signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                  paySign: res.body.data.order_info.sign, // 支付签名
                  success: function (res) {
                  }
                })
              })
            })
          }
        })
      }
    }
  },
  components: {
  }
}
</script>

<style scoped>
/*结算*/
.settlement{
  padding: 0.64rem;
}
/*输入框*/
.settlementInt{
  width: 100%;
  overflow: hidden;
  padding: 0.64rem;
  border:0.03rem solid #cccccc;
  border-radius: 0.1rem;
  background: #fff;
  margin: 0 auto;
}
.settlementInt span{
  font-size: 0.853rem;
  color: #333333;
  float: left;
}
.settlementInt input{
  width: 60%;
  height: auto;
  margin-top: 0.2rem;
  margin-left: 0.64rem;
  font-size: 0.746rem;
  float: left;
  text-align: right;
}
/*抵扣劵*/
.deductible{
  padding: 0 0.64rem;
  background: #fff;
}
.deductibleli{
  padding: 0.853rem 0;
  font-size: 0.64rem;
  color: #999999;
}
.deductibleli:first-child{
  border-bottom: 0.03rem solid #dddddd;
}
.deductibleli .yue{
  color: #53c7ca;
  position: relative;
  float: right;
}
.deductibleli .dikou input{
  color: #333;
  font-size: 0.64rem;
  height: 0.8rem;
  text-align: right;  
}
/*下拉框*/
.yue select{
  height: auto;
  font-size: 0.64rem;
  padding-right: 1.06rem;
  color: #333;
}
.zhifu select{
  line-height: 1rem;
}
.zhifu::after{
    content: '';
    width: 0.32rem;
    height: 0.3rem;
    position: absolute;
    top: 50%;
    right: 0.1rem;
    margin-top: -0.3rem;
    background: transparent;
    border: 1px solid #dddddd;
    border-top: none;
    border-right: none;
    z-index: 2;
    border-radius: 0;
    transform: rotate(-45deg)
}
/*选择按钮*/
.roidtype{
  background: transparent;
}
.roidtype span{
  color: #333;
}
.roidtype .deductibleli{
  padding-left: 1.386rem;
}
.xianjin,.weixin{
  background-image: url(../../assets/shopmall/xj.png);
  background-repeat: no-repeat;
  background-position: left 0.9rem;
  background-size: 0.96rem 0.64rem;
}
.weixin{
  background-image: url(../../assets/shopmall/wx.png);
  background-position: left 0.8rem;
  background-size: 1.066rem;
}
.aui-radio:checked, .aui-radio.aui-checked, .aui-checkbox:checked, .aui-checkbox.aui-checked{
  background-color: #53c7c4;
  border:0;
}
.shifu{
  padding:0.853rem 0.64rem;
  background: #fff;
  font-size: 0.64rem;
  color: #999999;
}
.shifu .jin{
  float: right;
  font-weight: 600;
  color: #ff372c;
}
.yue ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #53c7ca;
}
.yue :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #53c7ca;
}
.yue ::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #53c7ca;
}
.yue :-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    #53c7ca;
}
/*确认买单*/
.buybtn{
  line-height: 2.133rem;
  width: 93.3%;
  text-align: center;
  background: #ff393a;
  margin: 1.493rem auto 0;
  color: #fff;
  font-size: 0.746rem;
  font-weight: 100;
  border-radius: 0.3rem;
}
</style>
