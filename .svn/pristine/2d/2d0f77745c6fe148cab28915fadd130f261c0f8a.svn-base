<style scoped>
.passwordbox{
  margin-top: 0.64rem;
}
.fontcolor{
  color: #333 !important;
}
.aui-list.aui-form-list{
  background-image: !important;
}
.aui-list-item{
  background-image: none !important;
  padding: 0 0.64rem !important;
}
.pwfontsize{
  font-size: 0.64rem;
  border-bottom: #dddddd solid 0.03rem;
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
</style>
<template>
<div id="shoporder">
  <div v-title data-title="修改密码">
  </div>
      <div class="aui-content passwordbox aui-margin-b-15">
        <ul class="aui-list aui-form-list">
            <li class="aui-list-item" v-if="isHavePass == 1">
                <div class="aui-list-item-inner pwfontsize">
                    <div class="aui-list-item-label fontcolor">
                        旧密码
                    </div>
                    <div class="aui-list-item-input">
                        <input type="password" v-model="oldps" class="pwfontsize" placeholder="输入您的旧密码">
                    </div>
                </div>
            </li> 
            <li class="aui-list-item">
                <div class="aui-list-item-inner pwfontsize">
                    <div class="aui-list-item-label">
                        新密码
                    </div>
                    <div class="aui-list-item-input">
                        <input type="password" v-model="psd1" class="pwfontsize" placeholder="输入密码">
                    </div>
                </div>
            </li>   
              <li class="aui-list-item">
                <div class="aui-list-item-inner pwfontsize" style="border-bottom:0;">
                    <div class="aui-list-item-label fontcolor">
                        重复密码
                    </div>
                    <div class="aui-list-item-input">
                        <input type="password" v-model="psd2"  class="pwfontsize" placeholder="输入再次输入密码">
                    </div>
                </div>
            </li>               
        </ul>
      </div> 
        <!-- 退出按钮      -->
    <div class="colse-button" @click="submits">提交</div> 
</div>
</template>
<script>
import '../../../../static/css/aui.css'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      // 令牌
      ssAuth: this.$store.state.ssAuth,
      isHavePass: this.$store.state.isHavePass,
      psd1: '',
      psd2: '',
      oldps: ''
    }
  },
  mounted () {
  },
  components: {
  },
  methods: {
    submits: function () {
      if (this.psd1 === '' || this.psd2 === '') {
        Toast('请填写完整')
      } else if (this.psd1 !== this.psd2) {
        Toast('两次密码不一致')
      } else {
        if (this.isHavePass === 1) {
          this.$http.post(this.$store.state.postUrl + '/Api/UserInfo/alterPassword', {'ssAuth': this.ssAuth, 'oldPassword': this.oldps, 'newPassword': this.psd1, 'reNewPassword': this.psd2}, {emulateJSON: true})
          .then(function (res) {
            console.log(res)
            if (res.body.code === 10000) {
              Toast('设置密码成功')
            } else if (res.body.code === 10003) {
              Toast('你已有密码，请勿重新设置')
            }
          })
        } else {
          this.$http.post(this.$store.state.postUrl + '/Api/UserInfo/setPassword', {'ssAuth': this.ssAuth, 'newPassword': this.psd1, 'reNewPassword': this.psd2}, {emulateJSON: true})
          .then(function (res) {
            console.log(res)
            if (res.body.code === 10000) {
              Toast('设置密码成功')
              this.$store.state.isHavePass = 1
            } else if (res.body.code === 10003) {
              Toast('设置密码出现程序错误')
            }
          })
        }
      }
    }
  }
}
</script>
