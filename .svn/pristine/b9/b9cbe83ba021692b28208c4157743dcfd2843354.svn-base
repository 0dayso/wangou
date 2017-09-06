<style scoped>
.passwordbox{
  margin-top: 0.64rem;
}
.fontcolor{
  color: #666666 !important;
}
.aui-list.aui-form-list{
  background-image: none!important;
}
.aui-list-item{
  background-image: none !important;
  padding: 0 0.64rem !important;
}
.pwfontsize{
  font-size: 0.64rem;
  border-bottom: #333333 solid 0.03rem;
}
input.pwfontsize{
  border: 0;
}
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    font-size: 0.64rem;
    color: #dddddd;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   font-size: 0.64rem;
   color: #dddddd;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   font-size: 0.64rem;
   color: #dddddd;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   font-size: 0.64rem;
   color: #dddddd;
}
/* 提交 */
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
/*标题*/
.telephonetitle{
  font-size: 1.066rem;
  color: #333;
  text-align: center;
  line-height: 6.613rem;
}
.aui-list-item-input{
  position: relative;
}
/*验证码*/
.verification{
  min-width: 3.413rem;
  line-height: 1.28rem;
  color: #666666;
  border:0.03rem solid #666666;
  border-radius: 0.2rem;
  text-align: center;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -0.64rem;
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
    right: 0rem;
    color: #fff;
    top: 50%;
    line-height: 1rem;
    border-radius: 100%;
    margin-top: -0.5rem;
}
.err .aui-iconfont{
  font-size: 0.64rem;
}
</style>
<template>
<div id="shoporder">
  <div v-title data-title="手机绑定">
  </div>
<!-- 标题   -->
<div class="telephonetitle">请输入手机号</div>
<!-- 获取验证码   -->
      <div class="aui-content passwordbox aui-margin-b-15">
        <ul class="aui-list aui-form-list">
            <li class="aui-list-item">
                <div class="aui-list-item-inner pwfontsize">
                    <div class="aui-list-item-label fontcolor">
                        手机号
                    </div>
                    <div class="aui-list-item-input">
                        <input type="number" oninput="if(value.length>11)value=value.slice(0,11)" v-model="phone" onkeyup="this.value=this.value.replace(/\D/g,'')"  v-validate="'required|mobile'" name="mobile" onafterpaste="this.value=this.value.replace(/\D/g,'')" class="pwfontsize"  maxlength="11"  placeholder="输入您的手机号">
                        <span class="err" v-show="errors.has('mobile')">x</span>
                    </div>
                </div>
            </li>   
            <li class="aui-list-item">
                <div class="aui-list-item-inner pwfontsize">
                    <div class="aui-list-item-label fontcolor">
                        验证码
                    </div>
                    <div class="aui-list-item-input">
                        <input type="number"  oninput="if(value.length>6)value=value.slice(0,6)"  v-model="code" class="pwfontsize" maxlength="10" placeholder="输入您的验证码">
                        <div class="verification"  v-on:click="startTimer">{{verification}}</div>
                    </div>
                </div>
            </li>                  
        </ul>
      </div> 
        <!-- 退出按钮      -->
    <div class="colse-button" @click="goDo">立即绑定</div> 
</div>
</template>
<script>
import '../../../../static/css/aui.css'
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
export default {
  data () {
    return {
      verification: '立即获取',
      timer: 60,
      stop: false,
      phone: '',
      ssAuth: this.$store.state.ssAuth,
      code: '',
      clear: ''
    }
  },
  components: {
  },
  methods: {
  // 倒计时
    getcode: function () {
      if (this.timer <= 0) {
        this.timer = 60
        this.verification = '立即获取'
        this.stop = false
        clearInterval(this.clear)
      } else {
        this.timer--
        this.verification = this.timer
      }
    },
    // 启动倒计时
    startTimer (e) {
      if (this.stop === false) {
        // 获取验证码
        if (this.errors.errors.length === 0 && this.phone !== '') {
          this.clear = setInterval(this.getcode, 1000)
          this.$http.post(this.$store.state.postUrl + '/Api/SMS/bindPhone', {'ssAuth': this.ssAuth, 'phone': this.phone}, {emulateJSON: true})
          .then(function (res) {
            console.log(res)
            Toast(res.body.message)
          })
          this.stop = !this.stop
        } else {
          Toast('请输入手机号')
          this.stop = false
        }
      } else {
        Toast('请勿频繁操作')
      }
    },
    // 立即绑定
    goDo: function () {
      let getUrl = ''
      if (this.$store.state.userPhone === '') {
        getUrl = '/Api/UserInfo/bindPhone'
      } else {
        getUrl = '/Api/UserInfo/updateBindPhone'
      }
      this.$http.post(this.$store.state.postUrl + getUrl, {'ssAuth': this.ssAuth, 'phone': this.phone, 'code': this.code}, {emulateJSON: true})
      .then(function (res) {
        Toast(res.body.message)
        if (res.body.code === 10000) {
          this.$store.state.userPhone = res.body.data.phone
          this.$router.push({path: '/setup'})
        }
      })
    }
  }
}
</script>
