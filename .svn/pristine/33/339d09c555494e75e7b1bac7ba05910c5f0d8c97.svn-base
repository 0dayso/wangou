<template>
  <div>
    <div v-title data-title="修改收货地址">
  </div>
  <form>
    <div class="list">
      <label for="">收货人姓名</label><input type="text" v-model="username" placeholder="限制2-4个汉字" maxlength="4">
    </div>
    <div class="list">
      <label for="">联系电话</label><input type="number" v-model="telephone" placeholder="限制11个数字" name="mobile" 
      v-validate="'required|mobile'" oninput="if(value.length>11)value=value.slice(0,11)">
      <span class="err" v-show="errors.has('mobile')">x</span>
    </div>
    <div class="list">
      <label for="">邮政编码</label><input type="number" v-model="zipcode" v-validate="'required|zipCode'" name="zipCode" placeholder="输入邮政编码" oninput="if(value.length>6)value=value.slice(0,6)">
      <span class="err" v-show="errors.has('zipCode')">x</span>
    </div>
    <router-link class="list sheng" to="/address/province">
      <label for="">{{pro}} {{city}} {{town}}</label>
    </router-link>
    <div class="list">
      <label for="">详细地址</label><input type="text" v-model="address" placeholder="限制15个汉字" maxlength="15">
    </div>
  </form>
  <!-- 确认按钮      -->
  <div class="colse-button" v-on:click = "submit">确认修改</div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
import 'mint-ui/lib/style.css'
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
      username: sessionStorage.getItem('address_name'),
      telephone: sessionStorage.getItem('address_phone'),
      zipcode: sessionStorage.getItem('address_zipcode'),
      address: sessionStorage.getItem('address_address')
    }
  },
  mounted () {
  },
  computed: {
    pro () {
      if (this.$store.state.add_edit === 1) {
        return sessionStorage.getItem('address_pro')
      } else {
        return this.$store.state.pro
      }
    },
    city () {
      if (this.$store.state.add_edit === 1) {
        return sessionStorage.getItem('address_city')
      } else {
        return this.$store.state.city
      }
    },
    town () {
      if (this.$store.state.add_edit === 1) {
        return sessionStorage.getItem('address_area')
      } else {
        return this.$store.state.townname
      }
    },
    proId () {
      return this.$store.state.proId
    }
  },
  methods: {
 // 修改收货地址
    submit: function () {
      let proid = ''
      let cityid = ''
      let areaId = ''
      if (this.$store.state.add_edit === 0) {
        proid = this.$store.state.proId
        cityid = this.$store.state.cityId
        areaId = this.$store.state.townId
      } else {
        proid = sessionStorage.getItem('address_proid')
        cityid = sessionStorage.getItem('address_cityid')
        areaId = sessionStorage.getItem('address_areaid')
      }
      let data =
        {
          id: sessionStorage.getItem('address_id'),
          ssAuth: 'a69a8da0af2ea4ae5e5d55e20c4e6996',
          realName: this.username,
          telephone: this.telephone,
          zipcode: this.zipcode,
          provinceId: proid,
          cityId: cityid,
          areaId: areaId,
          address: this.address
        }
      this.$http.post('http://wechatapi.7618.com/Api/UserInfo/updateAddress',
        data, {emulateJSON: true})
      .then(function (res) {
        let toast = ''
        if (res.body.code === 10003) {
          toast = '请输入完整'
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
    }
  },
  deactivated () { // 禁止缓存数据
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
