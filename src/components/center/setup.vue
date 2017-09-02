<template>
  <div>
    <div v-title data-title="设置">
  </div>
  <!-- 二维码 -->
    <div class="qrcode">
      <div class="codeImg" :style="{backgroundImage: 'url(' +bg + ')'}"></div>
    </div>
  <!-- 列表 -->
    <section class="aui-content">
        <ul class="aui-list aui-list-noborder userlist">
            <li class="aui-list-item">
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title usertxtsize">更改头像</div>
                    <div class="aui-list-item-right userhead"></div>
                </div>
                <!-- <input  type="file" name="file" v-on:change="upPic($event)" accept="image/*" class="filephone" > -->
            </li>
            <li class="aui-list-item">
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title usertxtsize">昵称</div>
                    <div class="aui-list-item-right" style="color:#cccccc;">{{nicheng}}</div>
                </div>
            </li>
            <li class="aui-list-item" v-on:click="sexr()">
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title usertxtsize">性别</div>
                    <div class="aui-list-item-right" style="color:#666;"><span v-if="this.sex == 0">男</span><span v-if="this.sex == 1">女</span></div>
                </div>
            </li>
            <li class="aui-list-item">
                <router-link class="aui-list-item-inner aui-list-item-arrow" to="/modifypw">
                    <div class="aui-list-item-title usertxtsize">{{psw}}</div>
                    <div class="aui-list-item-right"></div>
                </router-link>
            </li>
            <div @click="goSetphone" class="aui-list-item">
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title usertxtsize"><span v-if="phoneType == ''">绑定手机</span><span v-if="phoneType != ''">更换绑定手机</span></div>
                </div>
            </div>
            <li class="aui-list-item" tapmode onclick="openDialog('text')">
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title usertxtsize">在线客服</div>
                </div>
            </li> 
             <router-link class="aui-list-item" to="opinion">
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title usertxtsize">意见反馈</div>
                </div>
            </router-link>       
        </ul>
    </section>   
    <!-- 性别选择 -->
    <div class="rodiasex" :style="{display: displays}">
      <div class="sexs">
        <div class="sexTitle">修改性别</div>
         <div class="aui-list-item-inner" style="margin:0 auto;display:block;text-align:center;font-size:0.64rem;line-height:1.2rem;">
                <label><input class="aui-radio" value="0" v-model='sex' type="radio" name="radio2" > 男</label>
                <label><input class="aui-radio" value="1" v-model='sex' type="radio" name="radio2"> 女</label>
          </div>
          <!-- 确定按钮框 -->
          <div class="btnsArr">
          <div v-on:click="tijiao()">取消</div>
          <div v-on:click="tijiao()">确定</div>
          </div>
      </div>
    </div>
  <!-- 退出按钮      -->
    <div class="colse-button">退出登录</div>
  </div>
</template>
<script>
import { MessageBox, Toast } from 'mint-ui'
import '../../../static/css/aui.css'
export default {
  data () {
    return {
      bg: require('../../assets/user/erbg.png'),
      displays: 'none',
      phoneType: this.$store.state.userPhone,
      ssAuth: this.$store.state.ssAuth,
      sex: this.$store.state.sex,
      nicheng: sessionStorage.getItem('wgName'),
      imgUrl: '',
      psw: '修改密码'
    }
  },
  methods: {
    // 修改性别
    tijiao: function () {
      this.$http.post(this.$store.state.postUrl + '/Api/UserInfo/updateSex', {'ssAuth': this.ssAuth, 'sex': this.sex}, {emulateJSON: true})
      .then(function (res) {
        if (res.body.code === 10000) {
          Toast(res.body.message)
          this.$store.state.sex = res.body.data.sex
        }
      })
      this.displays = 'none'
    },
    sexr: function () {
      this.displays = 'block'
    },
    // 绑定手机
    goSetphone: function () {
      if (this.phoneType === '') {
        this.$router.push({path: '/bindmobile'})
      } else if (this.phoneType !== '') {
        this.$router.push({path: '/changemobile'})
      }
    },
    // 修改昵称
    xiugainame: function () {
      MessageBox.prompt(' ', '修改昵称', {inputPlaceholder: '请输入昵称'}).then(({ value, action }) => {
        if (value !== '') {
          this.$http.post(this.$store.state.postUrl + '/Api/UserInfo/nickName', {'ssAuth': this.ssAuth, 'nickName': value}, {emulateJSON: true})
          .then(function (res) {
            if (res.body.code === 10000) {
              Toast(res.body.message)
              console.log(res)
              sessionStorage.wgName = res.body.data.nickName
              this.nicheng = res.body.data.nickName
            }
          })
        }
      })
    },
    // 更换头像
    upPic: function (e) {
      var th = this
      var file = e.target.files[0]
      var reader = new FileReader()
      reader.readAsDataURL(file) // 读出 base64
      reader.onload = function (e) {
        th.imgUrl = this.result.split(',')[1]
        if (th.imgUrl !== '') {
          th.$http.post(th.$store.state.postUrl + '/Api/UserInfo/head', {'ssAuth': th.ssAuth, 'headImg': th.imgUrl}, {emulateJSON: true})
          .then(function (res) {
            if (res.body.code === 10000) {
              Toast(res.body.message)
              sessionStorage.wgPic = res.body.data.headImg
            }
          })
        }
      }
    }
  },
  mounted () {
    if (this.$store.state.isHavePass === 0) {
      this.psw = '设置密码'
    }
  },
  components: {
  }
}
</script>

<style scoped>
/* 二维码 */
.qrcode{
  position: relative;
  width: 100%;
  height: 7.893rem;
  background: #f8f8f8;
}
.qrcode .codeImg{
  position: absolute;
  width: 4.586rem;
  height: 4.586rem;
  background-size: 100%;
  left: 50%;
  margin-left: -2.293rem;
  top: 50%;
  margin-top: -2.293rem;
}
/* 头像 */
.userhead{
  width: 1.386rem;
  height: 1.386rem;
  background-image: url(../../assets/user/userpoto.png);
  background-size: 100%;
}
/* 信息列表 */
.userlist .aui-list-item{
  height: 2.1333rem;
  padding-left:0.64rem;
}
.aui-list .usertxtsize{
  font-size: 0.64rem;
  color: #666666;
}
.aui-list .aui-list-item-inner{
  border:0;
}
/* 箭头颜色 */
.aui-list-item-arrow:before{
  border-color: #cdcdcd;
  width: 0.32rem;
  height: 0.32rem;
  margin-top: -0.16rem;
  right: 0.64rem;
}
.aui-list-item-inner.aui-list-item-arrow{
  padding-right: 1.28rem;
}
/* 退出登录 */
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
.filephone{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  opacity: 0;
}
/*性别选择*/
.rodiasex{
  position:fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0,0,0,.8); 
  z-index: 200;

}
.sexs{
  z-index: 500;
  position: absolute;
  top: 50%;
  margin-top: -5rem;
  left: 50%;
  margin-left: -6rem;
  background: #fff;  
  width: 12rem;
  height: 6rem;
  border-radius: .3rem;
    overflow: hidden;
}
.sexTitle{
  line-height: 2rem;
  text-align: center;
}
.aui-radio{
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 0.2rem;
}
label{
  margin: 2rem;
}
/*按钮组*/
.btnsArr{
  width: 100%;
  height: 2.2rem;
  position: absolute;
  bottom: 0;
  border-top: 0.03rem solid #eee;
}
.btnsArr div{
  width: 50%;
  float: left;
  line-height: 2.2rem;
  border-right:0.03rem solid #eee; 
  text-align: center;
}
</style>
