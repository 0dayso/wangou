<template>
  <div>
    <div v-title data-title="银行卡列表">
    </div>
    <div style="width:100%;margin-bottom:0.64rem" v-for="item in ressdata" @click="changeBank(item.bankCard, item.bankName)">
      <left-slider @deleteItem="deleteItem(item.bankCard)" >
        <!-- 地址列表  --> 
    <div class="addreelist">
      <!-- 基本信息 -->
      <div class="addreeIns">
        <div class="addreename material-design" data-color="#000000">卡号&nbsp;&nbsp;<span>{{item.bankCard}}</span></div>
      </div>
      <!-- 地址 -->
      <div class="addrees">
        <span class="moren"><span v-if="1 == item.isDefault">[默认]</span></span>
        <span>{{item.bankName}}</span>
      </div>
      <!-- 设为默认 -->
      <div class="setups" v-if="0 == item.isDefault" @click=setDefault(item.bankCard)>设为默认</div>
    </div>
      </left-slider>
    </div>
    <router-link class="addbtn" to="/addbank">
      <div class="addbtnImg">
      </div>
      <span>添加提现银行</span>
    </router-link>          
  </div>
</template>
<script>
import '../../../static/css/aui.css'
import LeftSlider from '../slidedelete.vue'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      ressdata: '',
      ssAuth: this.$store.state.ssAuth
    }
  },
  methods: {
    // 删除银行卡
    deleteItem: function (e) {
      this.$http.post(this.$store.state.postUrl + '/Api/UserInfo/deleteBankInfo',
        {
          ssAuth: this.ssAuth,
          bankCard: e
        }, {emulateJSON: true})
      .then(function (res) {
        if (res.body.code === 10000) {
          this.getData()
          Toast(res.body.message)
        }
      }, function () {
      })
    },
    // 获取银行卡
    getData: function () {
      this.$http.post(this.$store.state.postUrl + '/Api/UserInfo/bankInfo',
        {
          ssAuth: this.ssAuth
        }, {emulateJSON: true})
      .then(function (res) {
        console.log(res)
        if (res.body.data.length > 0) {
          this.dataType = true
          this.ressdata = res.body.data
        }
      }, function () {
      })
    },
    // 设置默认
    setDefault: function (e) {
      this.$http.post(this.$store.state.postUrl + '/Api/UserInfo/setDefaultBank',
        {
          ssAuth: this.ssAuth,
          bankCard: e
        }, {emulateJSON: true})
      .then(function (res) {
        if (res.body.code === 10000) {
          this.getData()
          Toast(res.body.message)
        }
      }, function () {
      })
    },
    // 选择银行卡（提现）
    changeBank: function (num, name) {
      if (this.$store.state.ischangeBank) {
        sessionStorage.setItem('bankName', name)
        sessionStorage.setItem('banknum', num)
        this.$router.push({path: '/withdrawals'})
      }
    }
  },
  components: {
    LeftSlider
  },
  mounted () {
    this.getData()
  },
  beforeRouteLeave (to, from, next) {
    this.$store.state.ischangeBank = false // 改变状态管理（银行卡列表）
    next()
  }
}
</script>

<style scoped>
.addreelist{
  position: relative;
  overflow: hidden;
  background-color: #fff;
  padding: 0.746rem 0 0.746rem 0.746rem;
}
.addreelist .addreeIns{
  font-size: 0.682rem;
  color: #333333;
  overflow: hidden;
}
.addreelist .addreename{
  float: left;
}
/*默认*/
.addrees{
  margin-top: 0.32rem;
  font-size: 0.64rem;
  color: #666666;
}
.addrees .moren{
  display: inline-block;
  width: 1.706rem;
    color: #fc476b;
}
/*设为默认*/
.setups{
  position: absolute;
  right: 0.64rem;
  top: 0.746rem;
  width: 3.626rem;
  line-height: 2rem;
  float: right;
  text-align: center;
  border-left: 0.03rem solid #eeeeee;
  font-size: 0.64rem;
}
/*添加银行卡*/
.addbtn{
  display: block;
  padding:0.32rem 0.597rem;
  background-color: #fff;
  color: #666666;
  font-size: 0.64rem;
  line-height: 1.4rem;
}
.addbtnImg{
  width:1.28rem;
  float: left;
  margin-right: 0.426rem;
  height:1.28rem;
  background-image: url(../../assets/user/addbtn.png);
  background-size: 100%;
}
</style>
