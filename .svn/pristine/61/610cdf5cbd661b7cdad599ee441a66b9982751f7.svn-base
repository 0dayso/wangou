<template>
<div>
   <div v-title data-title="我要提现">
  </div>
  <!-- header -->
  <div class="wgheader" :style="{backgroundImage: 'url(' +bg + ')'}">
    <!-- 提现列表 -->
    <router-link class="moneyList" to="/moneyrecord">提现列表</router-link>
    <div class="money">{{totalMoney}}</div>
    <div class="yue">业绩余额(元)</div>        
  </div>

<!-- 银行     -->
    <section class="aui-content" style="margin-top:0.64rem;"> 
        <ul class="aui-list aui-list-noborder userlist">
<!-- 提现银行 -->
            <li class="aui-list-item" >
                <div @click="gobank" class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title usertxtsize"><div class="bankicon"></div><span class="tibans" style="color:#666666">提现银行</span> <span class="banknum">{{bankname}}{{banknum}}</span></div>
                    <div class="aui-list-item-right" style="color:#cccccc;">更换银行</div>
                </div>
            </li>
<!-- 提现金额 -->
            <li class="aui-list-item">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-title usertxtsize"><div class="bankicon limoney"></div><span class="tibans" style="color:#666666">提现金额</span></div>
                    <input type="number" class="aui-list-item-right" v-validate="'required|tixian'" name="tixian" v-model="money" oninput="if(value.length>5)value=value.slice(0,5)" maxlength="5" placeholder="输入金额" style="color:#f96268;font-size:0.746rem;text-align:right;"/>
                    <span class="err" v-show="errors.has('tixian')">x</span>
                </div>
            </li>
        </ul>
    </section> 
<!-- 提示 -->
    <div class="prompt">
      {{msg}}
    </div>
<!-- 确认提现 -->
    <div class="extractbtn" @click="withdrawals">确认提现</div>
 </div>   
</template>
<script>
import '../../../static/css/aui.css'
import { Toast } from 'mint-ui'
import { Validator } from 'vee-validate'
// 手机号正则
Validator.extend('tixian', {
  messages: {
    en: field => field + ''
  },
  validate: value => {
    return value.length >= 3 && /^[1-9]\d*00$/.test(value)
  }
})
let pic = require('../../assets/user/rec.png')
export default {
  data () {
    return {
      msg: '提示: 提现金额都必须大于100.00元,每笔限额10000.00元',
      bg: pic,
      ssAuth: this.$store.state.ssAuth,
      totalMoney: this.$store.state.totalMoney,
      bankname: '未绑定银行卡',
      banknum: '',
      bankNumber: '',
      money: ''
    }
  },
  methods: {
    // 选择银行卡
    gobank: function () {
      this.$router.push({path: '/banklist'})
      this.$store.state.ischangeBank = true
    },
    // 获取银行卡第一个
    getbank: function () {
      this.$http.post(this.$store.state.postUrl + '/Api/UserInfo/bankInfo',
        {
          ssAuth: this.ssAuth
        }, {emulateJSON: true})
      .then(function (res) {
        console.log(res)
        if (res.body.code === 10000) {
          if (res.body.data.length >= 1) {
            this.banknum = res.body.data[0].bankCard.substr(res.body.data[0].bankCard.length - 4)
            this.bankNumber = res.body.data[0].bankCard
            this.bankname = res.body.data[0].bankName
          }
        }
      })
    },
    // 提现
    withdrawals: function () {
      if (this.errors.errors.length === 0 && this.money !== '' && this.bankNumber !== '') {
        if (this.money <= 10000) {
          this.$http.post(this.$store.state.postUrl + '/Api/Agent/withdraw',
            {
              ssAuth: this.ssAuth,
              bankCard: this.bankNumber,
              amount: this.money
            }, {emulateJSON: true})
          .then(function (res) {
            Toast(res.body.message)
          })
        } else {
          Toast('提现金额不能超过10000元')
        }
      } else {
        Toast('请填写完整')
      }
    }
  },
  components: {
  },
  mounted () {
  },
  // 进入页面判断是否已选择银行卡  没有则请求银行卡列表
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (sessionStorage.getItem('bankName') !== null) {
        vm.bankNumber = sessionStorage.getItem('banknum')
        vm.banknum = sessionStorage.getItem('banknum').substr(sessionStorage.getItem('banknum').length - 4)
        vm.bankname = sessionStorage.getItem('bankName')
      } else {
        vm.getbank()
      }
    })
  }
}
</script>
<style scoped>
.wgheader{
  width: 100%;
  height: 7.893rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
/*提现列表*/
.moneyList{
  font-size: 0.746rem;
  color: #fff;
  padding-top: 0.64rem;
  padding-right: 0.64rem;
  display: block;
  text-align: right;
}
/*用户金额*/
.money{
  font-size: 1.92rem;
  color: #fff;
  font-weight: 600;
  text-align: center;
  margin: 0.64rem 0 0.3rem 0;
}
.yue{
  text-align: center;
  color: #c5edec;
  font-size: 0.64rem;
}
/*清除默认li高度*/
.aui-list .aui-list-item,.aui-list .aui-list-item-inner{
  min-height: 0;
  background-image: none;
}
.userlist li{
  padding:0.64rem;
}
.aui-list-item:first-child{
  border-bottom:0.03rem solid #eee;
}
/*右侧字*/
.aui-list .aui-list-item-right{
  line-height: 0.746rem;
  height: auto;
}
/*银行图标*/
.bankicon{
  width: 0.96rem;
  height: 0.96rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(../../assets/withdrawals/bank.png);
  background-position:  center;
  float: left;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -0.48rem;
}
.usertxtsize{
  font-size: 0.64rem;
}
.banknum{
  font-size: 0.746rem;
  color: #333;
  margin-left: 0.64rem;
    max-width: 5rem;
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.tibans{
  margin-left: 1.386rem;
}
/*提现金额*/
.usertxtsize .limoney{
  background-image: url(../../assets/withdrawals/jine.png);
}
/*提现提示*/
.prompt{
  margin-top: 0.64rem;
  font-size: 0.597rem;
  color: #fb0007;
  text-align: center;
}
/*确认提现*/
.extractbtn{
  width: 93%;
  background-color: #53c7c4;
  color: #fff;
  border-radius: 1.92rem;
  text-align: center;
  line-height: 1.92rem;
  margin: 6.4rem auto 0;
}
/*错误logo*/
.err{
  display: block;
  width: 1rem;
  height: 1rem;
  font-size: 0.64rem;
  background: #f44336;
  text-align: center;
  position: absolute;
  right: -0.32rem;
  color: #fff;
  line-height: 1rem;
  border-radius: 100%;
}
.err .aui-iconfont{
  font-size: 0.64rem;
}
</style>
