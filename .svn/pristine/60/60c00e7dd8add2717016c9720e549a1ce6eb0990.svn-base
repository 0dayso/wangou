<template>
  <div>
    <div v-title data-title="订单详情">
    </div>
    <div class="ordersite">
      <!-- 顶部轮播条 -->
      <div class="ordertiao"></div>
      <!-- 收货地址栏 -->
      <div class="orderuser">
        <div class="locations"></div>
        <div class="goAdd" v-if="okAddress == ''" @click="goAddress">添加收货地址</div>
        <div class="orderuserins" @click="choseRess" v-if="okAddress != ''">
          <div><span>收货人:&nbsp;&nbsp;</span><span>{{okAddress.realName}}</span><span class="userphone">{{okAddress.telephone}}</span></div>
          <div class="userdizhi"><span v-if="okAddress.isDefault == 1">[默认]</span> 收货地址: <span>{{okAddress.provinceName}}{{okAddress.cityName}}{{okAddress.cityName}}{{okAddress.address}}</span></div>
        </div>
      </div>
      <!-- 商品信息 -->
      <div class="aui-card-list-header order aui-card-list-user">
          <div class="aui-card-list-user-avatar orderpic" :style="{'background-image': 'url(' + goodsInt.goodsImage +')'}">
          </div>
          <div class="aui-card-list-user-name">
              <div class="aui-font-size-16 ordertitle">{{goodsInt.goodsName}}</div>
          </div>
          <div class="aui-card-list-user-info ordermany"><div class="many"></div><span class="order_price">&nbsp;{{goodsInt.amount}}</span></div>
      </div>
      <!-- 输入抵扣券 -->
      <div class="aui-content aui-margin-b-15 orderstyle">
            <ul class="aui-list aui-list-in">
              <li class="aui-list-item">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-title juan">抵扣金额 (限{{goodsInt.discount}}个劵)</div>
                    <div class="aui-list-item-right originallycolor dikou">
                        <input type="number" v-model="intQuan" oninput="if(value.length>5)value=value.slice(0,5)" v-on:input ="inputFunc" :placeholder="holder">
                    </div>
                </div>
              </li>
              <!-- 显示实际付款（已减去券）金额 -->
               <li class="aui-list-item">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-title">实付金额</div>
                    <div class="aui-list-item-right originallycolor">¥{{total}}</div>
                </div>
              </li>
              <!-- 支付类型 -->
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
      <div class="end" @click="payment">确认支付</div>
    </div>
  </div>
</template>
<script>
import '../../../../static/css/aui.css'
import { Toast } from 'mint-ui'
import wx from 'weixin-js-sdk'
export default {
  data () {
    return {
      // 结算
      total: '',
      intQuan: '',
      // 奖品id
      goodsId: '',
      // 奖品信息
      goodsInt: '',
      // 奖品来源 (哪个平台)
      channelType: '',
      // 令牌
      ssAuth: this.$store.state.ssAuth,
      // 公众号编码
      gzhCode: this.$store.state.gzhCode,
      // 对应的用户所剩券 （根据商品的来源平台、省、公众 ）
      quan: '',
      // 抵扣input placeholder
      holder: '劵余额0个',
      // 收货地址
      address: '',
      // 收货地址ID
      addressId: '',
      // 获取的收货地址信息
      okAddress: '',
      // 获取的支付方式信息
      apply: '',
      wxConfig: this.$store.state.wxConfig,
      appids: 0
    }
  },
  mounted () {
    // 配置微信信息
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: this.$store.state.wxConfig.appId, // 必填，公众号的唯一标识
      timestamp: this.$store.state.wxConfig.timestamp, // 必填，生成签名的时间戳
      nonceStr: this.$store.state.wxConfig.nonceStr, // 必填，生成签名的随机串
      signature: this.$store.state.wxConfig.signature, // 必填，签名，见附录1
      jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    })
    // 截取url参数
    this.goodsId = this.$route.query.id
    // 执行获取商品详情
    this.getData(this.goodsId)
    // 执行获取用户的收货地址信息
    this.getRess()
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
    // this.$http.post(this.$store.state.postUrl + '/Api/App/getWechatSign', {'ticket': this.$store.state.ticket, 'url': window.location.href.split('#')[0]}, {emulateJSON: true})
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
    //       jsApiList: ['getLocation'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    //     })
    //   }
    // })
  },
  methods: {
    // 查看奖品详情
    getData: function (id) {
      this.$http.post(this.$store.state.postUrl + '/Api/Mall/goodsInfo', {'goodsId': id}, {emulateJSON: true})
      .then(function (res) {
        if (res.body.code === 10000) {
          this.goodsInt = res.body.data
          this.total = this.goodsInt.amount
          this.channelType = res.body.data.channel_id
          // 执行获取用户券信息
          this.getQuan()
        }
      })
    },
    // 获取用户券信息
    getQuan: function () {
      this.$http.post(this.$store.state.postUrl + '/Api/User/getUserQuanInfo', {'ssAuth': this.ssAuth, 'gzh_code': this.gzhCode}, {emulateJSON: true})
      .then(function (res) {
        // 判断商品是哪个平台 并获取券
        if (res.body.code === 10000) {
          if (this.channelType > 0) {
            this.quan = parseFloat(res.body.data.fuchiquan)
          } else if (this.channelType === 0) {
            this.quan = parseFloat(res.body.data.gongzhongquan)
          } else {
            this.quan = 0
          }
          this.holder = '券余额' + this.quan + '个'
        }
      })
    },
    // 获取用户收货默认地址
    getRess: function () {
      this.$http.post(this.$store.state.postUrl + '/Api/UserInfo/getAddressList', {'ssAuth': this.ssAuth, 'gzhCode': this.gzhCode}, {emulateJSON: true})
      .then(function (res) {
        if (res.body.code === 10000) {
          this.address = res.body.data
    // 判断是否为选择地址之后
          if (this.$store.state.addressId !== -1) {
            this.addressId = this.$store.state.addressId
            for (var i = 0; i < this.address.length; i++) {
              if (parseInt(this.address[i].id) === parseInt(this.$store.state.addressId)) {
                this.okAddress = this.address[i]
                break
              }
            }
          } else {
            // 查看是否有默认地址
            for (var q = 0; q < this.address.length; q++) {
              if (this.address[q].isDefault === 1) {
                this.okAddress = this.address[q]
                this.addressId = this.address[q].id
                break
              } else {
             // 没有默认选择第一个地址
                this.okAddress = this.address[0]
                this.addressId = this.address[0].id
              }
            }
          }
        }
      })
    },
    // 输入抵扣券
    inputFunc: function () {
      if (this.intQuan > this.quan) {
        Toast('抵扣券不足')
        this.intQuan = 0
        this.total = this.goodsInt.amount - this.intQuan
      } else if (this.intQuan > this.goodsInt.amount) {
        Toast('已超出最多可抵扣券')
        this.intQuan = 0
        this.total = this.goodsInt.amount - this.intQuan
      } else if (this.intQuan > this.goodsInt.discount) {
        Toast('最多可抵扣' + this.goodsInt.discount + '个券')
        this.intQuan = 0
        this.total = this.goodsInt.amount - this.intQuan
      } else {
        this.total = this.goodsInt.amount - this.intQuan
      }
    },
    // 选择收货地址
    choseRess: function () {
    // 改变选择地址状态
      this.$store.state.choseAddress = 1
      this.$router.push({ path: '/manaddress' })
    },
    // 添加收货地址
    goAddress: function () {
      this.$router.push({ path: '/manaddress' })
    },
    // 确定支付
    payment: function () {
      var gzhCodes = this.$store.state.gzhCodes
      for (let i = 0; i < gzhCodes.length; i++) {
        if (this.gzhCode === gzhCodes[i].gzhCode) {
          this.appids = gzhCodes[i].appCode1
        }
      }
      if (this.ssAuth !== '0') {
        if (this.intQuan === '') {
          this.intQuan = 0
        }
        this.$http.post(this.$store.state.postUrl + '/Api/Mall/exchangeGoods', {'ssAuth': this.ssAuth, 'goodsId': this.goodsInt.goodsId, 'discount': this.intQuan, 'addressId': this.addressId, 'payType': 'alipay'}, {emulateJSON: true})
        .then(function (res) {
          if (res.body.code === 10000) {
            this.$http.post(this.$store.state.postUrl + '/Api/Pay/pay', {'ssAuth': this.ssAuth, 'order_sn': res.body.data.order_sn, 'pay_type': 'wxPay', 'device': 'wx', 'openid': this.$store.state.openid, 'appCode1': this.appids, 'pay_for': 1}, {emulateJSON: true})
            .then(function (res) {
              console.log(res)
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
      } else {
        Toast('参加过玩购游戏的用户才可以购买哦')
      }
    }
  }
}
</script>
<style scoped>
.ordertiao{
  width: 100%;
  height: 0.426rem;
  background-image: url(../../../assets/user/133002.png);
  background-size: 100%;
  background-repeat: no-repeat;
}
.orderuser{
  padding: 0.8106rem 0.64rem;
  background: #fff;
  overflow: hidden;
  position: relative;
}

.orderuser::before{
    content: '';
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    top: 50%;
    right: 0.75rem;
    margin-top: -0.2rem;
    background: transparent;
    border: 1px solid #999999;
    border-top: none;
    border-right: none;
    z-index: 2;
    -webkit-border-radius: 0;
    border-radius: 0;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
}
/*定位*/
.locations{
  width: 1.28rem;
  height: 2.9rem;
  float: left;
  border-right: 0.03rem solid #dddddd;
  background-size: 0.746rem 0.96rem;
  background-image: url(../../../assets/user/dizhis.png);
  background-repeat: no-repeat;
  background-position:left center;
  margin-right: 0.426rem;
}
/*收货人信息*/
.orderuserins{
  float: left;
  width: 12rem;
  height: 2.346rem;
  display: inline-block;
}
.orderuserins{
  font-size: 0.746rem;
  color: #333;
}
.userphone{
  float: right;
}
.userdizhi{
  font-size: 0.64rem;
  color: #999999;
}
/*订单图*/
.order{
  padding-top: 2.773rem;
  background-color: #f8f8f8;
  overflow: hidden;
}
.ordertitle{
  margin-top: 0.426rem;
  font-size: 0.746rem;
  color: #333;
}
.orderpic{
  width: 2.986rem;
  height: 2.986rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.many{
  width: 0.746rem;
  height: 0.533rem;
  background-image: url(../../../assets/user/many.png);
  background-size: 100%;
  display: inline-block;
  float: left;
  margin-top: 0.2rem;
}
.ordermany{
}
.order_price{
  font-size: 0.533rem;
  color: #5dc9c6;
}
 .orderlists .aui-list .aui-list-item{
  height: 2.206rem;
  padding-left: 0.64rem;
  margin-right: 0.64rem;
 }
 .orderlists .aui-list.aui-list-in{
  background-image: none;
 }
 .orderstyle .aui-list-item-title,.orderstyle .aui-list-item-right{
  font-size: 0.597rem;
  color: #999999;
 }
  .orderstyle .aui-list .aui-list-item-inner{
    padding-right: 0;
  }
  /*订单金额颜色*/
  .orderstyle .originallycolor{
    color: #ff372c;
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
    background: url(../../../assets/user/weixin.png);
    background-size: 100%;
    background-repeat: no-repeat;
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
    font-size: 0.64rem;
    color: #ff372c;
  }
  .rmbs{
    font-size: 0.853rem;
  }
  .end{
    width: 5.546rem;
    height: 2.56rem;
    background: #ff393a;
    color: #fff;
    text-align: center;
    line-height: 2.56rem;
    float: right;
  }
  /*抵扣券*/
  .dikou{
    color: #53c7c4!important;
    position: relative;
  }
  .dikou input{
    text-align: right;
    font-size: 0.64rem;
    color: #333;
    z-index: 500;
  }
  /*抵扣余额*/
  .dikou .dikouyue{
    z-index: 100;
    position: absolute;
    top: 50%;
    margin-top: -0.32rem;
    right: 0;
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
    color:#53c7c4;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:#53c7c4;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:#53c7c4;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    color:#53c7c4;
  }
  /*添加收货地址*/
  .goAdd{
    line-height: 2.9rem;
    font-size: 0.8rem;
    color: #333;
  }
</style>
