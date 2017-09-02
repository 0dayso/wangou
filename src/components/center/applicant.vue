<template>
  <div>
    <div v-title data-title="申请推广员">
    </div>
    <!-- 用户信息 -->
    <component :is="currentView" transition="fade" transition-mode="out-in"></component>
   <!-- 通知消息 -->
   <div class="notice">
     {{msg}}
   </div>
   <!-- 个人信息卡 -->
    <div class="aui-content-padded applicant_usercard">
        <ul class="aui-list">
            <li class="aui-list-header">个人身份信息</li>
            <li class="aui-list-item aui-arrow-right">
              <label for="name">姓名:</label><input maxlength="5" type="text" id="name" v-model="username" placeholder="请输入姓名">
            </li>
            <li class="aui-list-item aui-arrow-right">
            <label for="usernumber">身份证号:</label><input type="text" v-model="cardnumber" v-validate="'required|userId'" name="userId" maxlength="18" id="usernumber" placeholder="请输入18为身份证号">
            <span class="err" v-show="errors.has('userId')">x</span>
            </li>
            <li class="aui-list-item aui-arrow-right">
            <label for="usertelephone">联系电话:</label><input type="number" oninput="if(value.length>11)value=value.slice(0,11)" v-validate="'required|mobile'" name="mobile" v-model="bank_phone" id="usertelephone" placeholder="请输入手机号">
            <span class="err" v-show="errors.has('mobile')">x</span>
            </li>
        </ul>
    </div>
    <!-- 个人银行卡        -->
    <div class="aui-content-padded applicant_usercard" style="height:3.8rem" v-if="isBank == 0">
        <ul class="aui-list">
            <li class="aui-list-header">收款银行信息</li>
            <li class="aui-list-item aui-arrow-right">
            <label for="banknum">银行卡号:</label><input type="number" oninput="if(value.length>19)value=value.slice(0,19)"  v-validate="'required|bankRe'" name="bankRe" v-model="bank_number" id="banknum" placeholder="请输入银行卡号">
            <span class="err" v-show="errors.has('bankRe')">x</span>
            </li>
        </ul>
    </div>
  <!-- 确认按钮      -->
  <div class="colse-button" @click="submitdata">确认申请</div>
  </div>      
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
import '../../../static/css/aui.css'
import { Validator } from 'vee-validate'
// 手机检测
Validator.extend('mobile', {
  messages: {
    en: field => field + '必须是11位手机号码'
  },
  validate: value => {
    return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
})
// 银行卡正则
Validator.extend('bankRe', {
  messages: {
    en: field => field + '银行卡号不正确'
  },
  validate: value => {
    return value.length >= 16 && /^(\d{16}|\d{18}|\d{19})$/.test(value)
  }
})
// 身份证号正则
Validator.extend('userId', {
  messages: {
    en: field => field + '身份证号码不正确'
  },
  validate: value => {
    return value.length >= 15 && /(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)
  }
})
export default {
  data () {
    return {
      bg: require('../../assets/user/backuser.png'),
      msg: '成为我们公众号推广员，开启你的玩购之旅，请完善下面信息：',
      currentView: 'businesscard',
      bank_phone: '',
      bank_number: '',
      username: '',
      cardnumber: '',
      ssAuth: this.$store.state.ssAuth,
      isBank: this.$store.state.isBankCard
    }
  },
  methods: {
    submitdata: function () {
      let postdata =
        {
          ssAuth: this.ssAuth,
          gzh_code: this.$store.state.gzhCode,
          realName: this.username,
          idNum: this.cardnumber,
          phone: this.bank_phone,
          bankCard: this.cardnumber
        }
      if (this.errors.errors.length === 0 && this.bank_phone !== '' && this.username !== '' && this.cardnumber !== '') {
        this.$http.post(this.$store.state.postUrl + '/Api/User/applyTGY', postdata,
          {emulateJSON: true}
        )
        .then(function (res) {
          Toast(res.body.message)
          if (res.code === 10000) {
            this.$store.state.isAgent = 1
            this.$router.push({ path: '/center' })
          }
        })
      } else {
        Toast('请输入完整')
      }
    }
  },
  components: {
    // 名片
    'businesscard': require('./businesscard.vue')
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
  /*通知消息框*/
  .notice{
    width: 100%;
    background-color: #f8f8f8;
    color: #fb004d;
    font-size: 0.533rem;
    text-align: center;
    line-height: 2.023rem;
  }
  /*个人信息卡*/
  .applicant_usercard{
    width: 14.72rem;
    height: 7.253rem;
    margin:0.597rem auto 0;
    border:0.03rem solid #eeeeee;
    border-radius: 0.213rem;
    overflow: hidden;
  }
  .applicant_usercard .aui-list-header{
    background-color: #f2f6f5;
    color: #333;
    font-size: 0.597rem;
    padding: 0.64rem;
  }
  .applicant_usercard .aui-arrow-right{
    height: 1.706rem;
    min-height: 1.706rem;
    padding-right: 0;
    background-image: none;
    position: relative;
  }
  .applicant_usercard label{
    width: 4.413rem;
    line-height: 1.706rem;
    font-size: 0.64rem;
    color: #333333;
  }
  .applicant_usercard input,.applicant_usercard select{
    height: 1.706rem;
    max-width: 10.66rem;
    font-size: 0.64rem;
    margin-right: 0.64rem;
    text-align: center;
  }
  .applicant_usercard select {
    direction: rtl;
  }
  .applicant_usercard option{
     direction: rtl;
  }
input:-moz-placeholder,   
textarea:-moz-placeholder {  
    color: #ddd;   
    font-size: 0.64rem;
    text-align: right;
}
input:-ms-input-placeholder,   
textarea:-ms-input-placeholder {   
    color: #ddd;  
    font-size: 0.64rem;
    text-align: right;
}   
  
input::-webkit-input-placeholder,   
textarea::-webkit-input-placeholder {   
    color: #ddd; 
    font-size: 0.64rem;
    text-align: right;
}  
.colse-button{
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #53c7c4;
  text-align: center;
  line-height: 2.133rem;
  font-size: 0.682rem;
  color: #fff;
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
  right: 0.64rem;
  color: #fff;
  border-radius: 100%;
  top: 50%;
  margin-top: -0.5rem;
}
.err .aui-iconfont{
  font-size: 0.64rem;
}
</style>
