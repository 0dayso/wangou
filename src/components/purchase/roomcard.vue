<template>
  <div>
    <div v-title data-title="猫钻购买">
    </div>
    <div class="ordersite">
<!-- 顶部轮播条 -->
      <div class="aui-card-list-header roompic aui-card-list-user">
          <div class="aui-card-list-user-avatar orderpic">
            <img src="../../assets/shopmall/card2.png">
          </div>
          <div class="ordertitle">
            <span class="rmb">¥</span><span class="rmbs">{{ptFKPrice}}</span>
 <!-- 输入框 -->
            <div class="inputbox">
                <input type="number" placeholder="输入购买数量" v-model="number" onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" oninput="if(value.length>5)value=value.slice(0,5)" v-on:input="calculation">
            </div>
          </div>
      </div>
      <!-- 实际付款 -->
      <div class="aui-content aui-margin-b-15 orderstyle">
            <ul class="aui-list aui-list-in">
               <li class="aui-list-item">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-title">实付金额</div>
                    <div class="aui-list-item-right originallycolor">¥{{total}}</div>
                </div>
              </li>
               <li class="aui-list-item pay-wx">
                <div class="aui-list-item-inner" style="border:0;">
                    <div class="aui-list-item-title">支付类型</div>
                    <div class="aui-list-item-right payment"><div class="aui-wx" :style="{'background-image': 'url(' + apply.logo +')', 'backgroundSize': '100%', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}"></div>{{apply.title}}</div>
                </div>
              </li>
              </ul>
            </div>
    </div>
    <!-- 底部付款栏 -->
    <div class="footers">
      <div class="heji">合计: &nbsp;&nbsp;<span class="rmb">¥ <span class="rmbs">{{total}}</span></span></div>
      <div class="end" :class="number > 0 ? 'endactive' : ''" @click="payment">确认支付</div>
    </div>
  </div>
</template>
<script>
import '../../../static/css/aui.css'
let Base64 = require('js-base64').Base64
import wx from 'weixin-js-sdk'
export default {
  data () {
    return {
      number: '', // 房卡数量
      total: '0.00', // 总价
      gzhCode: this.$store.state.gzhCode,
      ptFKPrice: '',
      price: 0,
      gzhFKPrice: '',
      gzhFKCount: 0,
      fk_count: 0,
      apply: '',
      ssAuth: this.$store.state.ssAuth,
      appids: 0
    }
  },
  methods: {
    // 计算房卡价钱
    calculation: function () {
    // 判断输入的猫钻数量与公众号猫钻数量
      if (this.number < this.fk_count) {
        this.price = this.gzhFKPrice
        this.total = (this.number * this.gzhFKPrice).toFixed(2)
      } else {
        this.price = this.ptFKPrice
        this.total = (this.number * this.ptFKPrice).toFixed(2)
      }
    },
    // 确定支付
    payment: function () {
      // this.$http.post(this.$store.state.postUrl + '/Api/UserInfo/playGameList', {'ssAuth': this.ssAuth}, {emulateJSON: true})
      // .then(function (res) {
      //   console.log(res)
      // })
      if (this.total > 0) {
        // 转化base64加密
        var gzhCodes = this.$store.state.gzhCodes
        for (let i = 0; i < gzhCodes.length; i++) {
          if (this.gzhCode === gzhCodes[i].gzhCode) {
            this.appids = gzhCodes[i].appCode1
          }
        }
        let cpParam = 'userid=0&' + 'ssid=11156&' + 'appid=' + this.appids + '&category=0&' + 'thencoin=0&' + 'cltver=0&' + 'goodsid=10000'
        cpParam = Base64.encode(cpParam)
        let dataArr = {
          'ssAuth': this.ssAuth,
          'goodsName': '房卡购买',
          'payType': this.apply.name,
          'cpOrder': 1,
          'gzhCode': this.gzhCode,
          'isSend': 0,
          'cpParam': cpParam,
          'goodsPrice': this.total,
          'rechargeAppCode': 4002
        }
        // 确认支付接口
        this.$http.post(this.$store.state.postUrl + '/Api/Pay/payOrderNew', dataArr, {emulateJSON: true})
        .then(function (res) {
          if (res.body.code === 10000) {
            this.$http.post(this.$store.state.postUrl + '/Api/Pay/pay', {'ssAuth': this.ssAuth, 'order_sn': res.body.data.orderSn, 'pay_type': 'wxPay', 'device': 'wx', 'openid': this.$store.state.openid, 'appCode1': this.appids, 'pay_for': 0, 'goodsNum': this.number}, {emulateJSON: true})
            .then(function (res) {
              console.log(res)
              wx.ready(function () {
              // 支付配置
                wx.chooseWXPay({
                  appId: res.body.data.order_info.appId,
                  timestamp: res.body.data.order_info.timeStamp,
                  nonceStr: res.body.data.order_info.nonceStr,
                  package: res.body.data.order_info.package,
                  signType: 'MD5',
                  paySign: res.body.data.order_info.sign, // 支付签名
                  success: function (res) {
                  },
                  fail: function (res) {
                    res = res.toJSONString()
                    alert(res)
                  }
                })
              })
              wx.error(function (res) {})
            })
          }
        })
      }
    }
  },
  mounted () {
    // 获取房卡价格和数量
    this.$http.post(this.$store.state.postUrl + '/Api/Pay/getFKPrice', {'gzh_code': this.gzhCode}, {emulateJSON: true})
    .then(function (res) {
      if (res.body.code === 10000) {
        this.gzhFKPrice = parseFloat(res.body.data.fk_price)
        this.price = parseFloat(res.body.data.gzhFKPrice)
        this.ptFKPrice = parseFloat(res.body.data.ptFKPrice)
        this.fk_count = parseInt(res.body.data.fk_count)
      }
    })
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
    // var s = window.location.href
    // var a = encodeURI(window.location.href.split('?')[0])
    // var c = s.split('#')[1]
    // s = a + '#' + c
    // this.$http.post(this.$store.state.postUrl + '/Api/App/getWechatSign', {'ticket': this.$store.state.ticket, 'url': s}, {emulateJSON: true})
    // .then(function (res) {
    //   if (res.body.code === 10000) {
    //     this.$store.state.wxConfig = res.body.data
    //     this.wxconfig = res.body.data
    //     // 配置微信信息
    //     wx.config({
    //       debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //       appId: res.body.data.appId, // 必填，公众号的唯一标识
    //       timestamp: res.body.data.timestamp, // 必填，生成签名的时间戳
    //       nonceStr: res.body.data.nonceStr, // 必填，生成签名的随机串
    //       signature: res.body.data.signature, // 必填，签名，见附录1
    //       jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    //     })
    //   }
    // })
  }
}
</script>
<style scoped>
  /*房卡编剧*/
  .ordersite .roompic{
    padding: 0.853rem 0.64rem;
    background: #fff;
    overflow: hidden;
    position: relative;
  }
  .ordersite .roompic .orderpic{
    width: 2.133rem;
  }
  .aui-list{
    background-image: none;
  }
  .orderstyle{
    margin-top: 0.64rem;
    border: 0;
  }
  /*订单金额颜色*/
  .orderstyle .originallycolor{
    color: #ff372c;
  }
  /*列表字体大小*/
  .orderstyle .aui-list .aui-list-item-title{
    font-size: 0.64rem;
    color: #999999;
  }
  .orderstyle .discount{
    color: #4fc73a;
  }
  .orderstyle .payment{
    color: #333333;
  }
  .orderstyle .payment .aui-wx{
    width: 1.066rem;
    height: 1.066rem;
    position: absolute;
    top: 50%;
    margin-top: -0.533rem;
    right: 3rem;
  }
  /*微信支付底线*/
  .aui-list.aui-list-in .pay-wx{
    background-image: none;
  }
  .orderstyle .aui-list-item{
    padding: 0 0.64rem;
    background-image: none;
  }
  .orderstyle .aui-list-item-inner{
    border-bottom:0.03rem solid #dddddd;
  }
  /*底部付款栏*/
  .footers{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2.56rem;
    background: #fff;
    border-top:0.03rem solid #dddddd;
    padding-left: 0.64rem;
  }
  /*heji*/
  .heji{
    font-size: 0.64rem;
    color: #333;
    float: left;
    line-height: 3rem;
  }
  .rmb{
    font-size: 0.6rem;
    color: #ff372c;
  }
  .rmbs{
    font-size: 0.853rem;
  }
  .end{
    width: 5.546rem;
    height: 2.56rem;
    background: #ccc;
    color: #fff;
    text-align: center;
    line-height: 2.56rem;
    float: right;
  }
  .endactive{
    background: #ff393a;
  }  
  .dikou{
    color: #53c7c4!important;
  }
  /*价钱*/
  .ordertitle{
    position: relative;
    line-height: 2.133rem;
    color: #ff372c;
    overflow: hidden;
    border:0;
  }
  .ordertitle span{
    float: left;
  }
  /*输入框*/
  .inputbox{
    position: absolute;
    width: 6.826rem;
    right: 0;
    top: 50%;
    margin-top: -0.853rem;
    padding:0.426rem 0 0.426rem 0.64rem;
    background: #f3f3f3;
    border: 0.03rem solid #cccccc;
    border-radius: 0.1rem;
  }
  .inputbox input{
    font-size: 0.64rem;
    height: auto;
  }
</style>
