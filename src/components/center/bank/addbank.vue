<template>
  <div>
    <div v-title data-title="添加银行卡详情">
  </div>
  <form>
    <div class="list">
      <label for="">持卡人姓名</label><input type="text" v-model="bank_name" placeholder="请输入用户真实姓名" maxlength="5">
    </div>
    <div class="list">
      <label for="">卡号</label><input type="number" oninput="if(value.length>19)value=value.slice(0,19)"  v-validate="'required|bankRe'" name="bankRe" v-model="bank_number" placeholder="请输入姓名对应的银行卡号" >
      <span class="err" v-show="errors.has('bankRe')">x</span>
    </div>
    <div class="list">
      <label for="">手机号</label><input type="number" oninput="if(value.length>11)value=value.slice(0,11)" v-validate="'required|mobile'" name="mobile" v-model="bank_phone" placeholder="输入银行卡绑定的手机号码">
      <span class="err" v-show="errors.has('mobile')">x</span>
    </div>
  </form>
  <!-- 确认按钮      -->
  <div class="colse-button" @click="addData">确认添加</div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
import { Validator } from 'vee-validate'
// 手机号正则
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
    en: field => field + '必须是11位手机号码'
  },
  validate: value => {
    return value.length >= 16 && /^(\d{16}|\d{18}|\d{19})$/.test(value)
  }
})
export default {
  data () {
    return {
      bank_name: '',
      bank_number: '',
      bank_phone: '',
      ssAuth: this.$store.state.ssAuth
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    // 添加银行卡
    addData: function () {
      if (this.errors.errors.length === 0 && this.bank_name !== '' && this.bank_number !== '' && this.bank_phone !== '') {
        this.$http.post(this.$store.state.postUrl + '/Api/UserInfo/addBankInfo',
          {
            ssAuth: this.ssAuth,
            bankCard: this.bank_number,
            realName: this.bank_name,
            phone: this.bank_phone
          },
          {emulateJSON: true}
        )
        .then(function (res) {
          Toast(res.body.message)
          this.$router.push({path: '/banklist'})
        })
      } else {
        Toast('请输入完整')
      }
    }
  },
  deactivated () {
    this.$destroy(true)
  }
}
</script>

<style scoped>
/* 确认 */
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
.list{
  padding: 0.64rem;
  width: 100%;
  display: block;
  overflow: hidden;
  background: #ffffff;
  position: relative;
  border-bottom: 0.03rem solid #dddddd;
}
.list:first-child{
  margin-top: 0.64rem;
}
.list:last-child{
  border: 0;
}
.list label{
  display: inline-block;
  font-size: 0.64rem;
  margin-right: 0.64rem;
  float: left;
  color: #999999;
}
.list input{
  float: left;
  width: 70%;
  font-size: 0.64rem;
  height: 1rem;
}
::-webkit-input-placeholder { /* WebKit browsers */
    color:    #cecece;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #cecece;
   opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #cecece;
   opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
   color:    #cecece;
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
  line-height: 1rem;
  border-radius: 100%;
}
.err .aui-iconfont{
  font-size: 0.64rem;
}
</style>
