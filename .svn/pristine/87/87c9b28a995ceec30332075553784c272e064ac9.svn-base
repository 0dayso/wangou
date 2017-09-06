<template>
  <div>
    <div v-title data-title="添加收货地址">
  </div>
  <form>
    <div class="list">
      <label for="">收货人姓名</label><input type="text" v-on:blur="blurData('ress_username',username)" v-model="username" placeholder="限制2-4个汉字" maxlength="4">
    </div>
    <div class="list">
      <label for="">联系电话</label><input type="number"  v-on:blur="blurData('ress_telephone',telephone)" v-validate="'required|mobile'" name="mobile" v-model="telephone" placeholder="限制11个数字" oninput="if(value.length>11)value=value.slice(0,11)">
      <span class="err" v-show="errors.has('mobile')">x</span>
    </div>
    <div class="list">
      <label for="">邮政编码</label><input type="number" v-on:blur="blurData('ress_code',zipcode)" v-validate="'required|zipCode'" name="zipCode" v-model="zipcode" placeholder="输入邮政编码" oninput="if(value.length>6)value=value.slice(0,6)">
      <span class="err" v-show="errors.has('zipCode')">x</span>
    </div>
    <router-link class="list sheng" to="/address/province">
      <label for="">{{pro}} {{city}} {{town}}</label>
    </router-link>
    <div class="list">
      <label for="">详细地址</label><input type="text" v-model="address" v-on:blur="blurData('ress_ress',address)" placeholder="限制15个汉字" maxlength="15">
    </div>
  </form>
  <!-- 确认按钮      -->
  <div class="colse-button" v-on:click = "submit">确认添加</div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
import { Validator } from 'vee-validate'
import 'mint-ui/lib/style.css'
// 手机号正则
Validator.extend('mobile', {
  messages: {
    en: field => field + '必须是11位手机号码'
  },
  validate: value => {
    return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
})
// 邮编正则
Validator.extend('zipCode', {
  messages: {
    en: field => field
  },
  validate: value => {
    return value.length >= 6
  }
})
export default {
  data () {
    return {
      username: '',
      telephone: '',
      zipcode: '',
      address: ''
    }
  },
  mounted () {
  },
  computed: {
    pro () {
      return this.$store.state.pro
    },
    city () {
      return this.$store.state.city
    },
    town () {
      return this.$store.state.townname
    },
    proId () {
      return this.$store.state.proId
    }
  },
  methods: {
    pansheng: function (id) {
      if (id !== 0) {
        this.$router.push({path: '/address/city'})
      } else {
        alert('请选择省份')
      }
    },
 // 提交收货地址
    submit: function () {
      if (this.errors.errors.length === 0 && this.username !== '' && this.telephone !== '' && this.zipcode !== '' && this.address) {
        this.$http.post('http://wechatapi.7618.com/Api/UserInfo/addAddress',
          {
            ssAuth: this.$store.state.ssAuth,
            realName: this.username,
            telephone: this.telephone,
            zipcode: this.zipcode,
            provinceId: this.$store.state.proId,
            cityId: this.$store.state.cityId,
            areaId: this.$store.state.townId,
            address: this.address
          }, {emulateJSON: true})
        .then(function (res) {
          console.log(res)
          let toast = ''
          if (res.body.code === 10003) {
            toast = '输入不完整'
            // 提示框
            Toast({
              message: toast,
              duration: 5000
            })
          } else {
            if (res.body.code === 10000) {
              // 弹出操作状态
              Toast(res.body.message)
              this.$router.push({path: '/manaddress'})
            }
          }
        }, function () {
        })
      } else {
        Toast('请输入完整')
      }
    },
    blurData: function (name, val) {
      sessionStorage.setItem(name, val)
    },
    getBlurdata: function () {
      this.username = sessionStorage.getItem('ress_username')
      this.telephone = sessionStorage.getItem('ress_telephone')
      this.zipcode = sessionStorage.getItem('ress_code')
      this.address = sessionStorage.getItem('ress_ress')
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getBlurdata()
    })
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
  width: 50%;
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
.sheng :before,.shi :before{
    content: '';
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    top: 50%;
    right: 0.75rem;
    margin-top: -0.2rem;
    background: transparent;
    border: 1px solid #dddddd;
    border-top: none;
    border-right: none;
    z-index: 2;
    -webkit-border-radius: 0;
    border-radius: 0;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
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
