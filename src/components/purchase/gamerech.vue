<template>
  <div>
    <div v-title data-title="游戏币充值">
    </div>
    <div class="ordersite">
<!-- 顶部轮播条 -->
      <div class="aui-card-list-header roompic aui-card-list-user">
          <div class="aui-card-list-user-avatar orderpic">
            <img src="../../assets/shopmall/gold.png">
          </div>
            <div class="inputbox">
                <input type="number" placeholder="输入充值金额" v-model="total"   oninput="if(value.length>5)value=value.slice(0,5)" v-on:input="calculation">
            </div>            
      </div>
      <!-- 实际付款 -->
      <div class="aui-content aui-margin-b-15 orderstyle">
            <ul class="aui-list aui-list-in">
               <li class="aui-list-item">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-title">实付金额</div>
                    <div class="aui-list-item-right originallycolor">¥{{jiben}}</div>
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
      <div class="heji">合计: &nbsp;&nbsp;<span class="rmb">¥ <span class="rmbs">{{jiben}}</span></span></div>
      <div class="end" :class="total > 0 ? 'endactive' : ''" @click="payment">确认支付</div>
    </div>
  </div>
</template>
<script>
import '../../../static/css/aui.css'
let Base64 = require('js-base64').Base64
export default {
  data () {
    return {
      jiben: 0,
      total: '', // 总价
      ssAuth: this.$store.state.ssAuth,
      apply: '',
      gzhCode: this.$store.state.gzhCode
    }
  },
  methods: {
    // 计算房卡价钱
    calculation: function () {
      if (this.total >= 0) {
        this.jiben = this.total
        if (this.total === '') {
          this.jiben = 0
        }
      }
    },
    // 确定支付
    payment: function () {
      if (this.total > 0) {
        // 转化base64加密
        let cpParam = 'ssAuth=' + this.ssAuth + '&goodsName=游戏币' + '&payType=' + this.apply.name + '&cpOrder=1' + '&gzhCode=' + this.gzhCode + '&isSend=0'
        cpParam = Base64.encode(cpParam)
        let dataArr = {
          'ssAuth': this.ssAuth,
          'goodsName': '游戏币',
          'payType': this.apply.name,
          'cpOrder': 1,
          'gzhCode': this.gzhCode,
          'isSend': 0,
          'cpParam': cpParam,
          'goodsPrice': this.total
        }
        // 确认支付接口
        this.$http.post(this.$store.state.postUrl + '/Api/Pay/payOrderNew', dataArr, {emulateJSON: true})
        .then(function (res) {
          if (res.body.code === 10000) {
            console.log(res)
          }
        })
      }
    }
  },
  mounted () {
    // 获取支付方式
    this.$http.post(this.$store.state.postUrl + '/Api/Pay/payTypeList', {}, {emulateJSON: true})
    .then(function (res) {
      console.log(res)
      if (res.body.code === 10000) {
        for (let i = 0; i < res.body.data.length; i++) {
          if (res.body.data[i].name === 'wxPay') {
            this.apply = res.body.data[i]
          }
        }
      }
    })
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
  /*输入框*/
  .inputbox{
    position: absolute;
    width: 70%;
    right: 0.853rem;
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
