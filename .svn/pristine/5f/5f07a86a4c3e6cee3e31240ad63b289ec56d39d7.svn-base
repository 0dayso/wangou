<template>
  <div>
    <div v-title data-title="管理收货地址">
    </div>
  <!-- 地址列表  -->
    <div class="dizhi" v-if="dataType" v-for="item in ressdata">
    <div class="addreelist" @click="chose(item.id)">
      <!-- 基本信息 -->
      <div class="addreeIns">
        <div class="addreename">收货人 ：<span>{{item.realName}}</span></div>
        <div class="addreephone">{{item.telephone}}</div>
      </div>
      <!-- 地址 -->
      <div class="addrees">
        <span>{{item.provinceName}}{{item.cityName}}{{item.areaName}}{{item.address}}</span>
      </div>
    </div>
      <!-- 操作 -->
      <div class="operation">
        <div class="setDefault" :class="okbtn==item.isDefault ? 'oksetDefault' : 'oksetDefaults'"><div class="circular" :class="okbtn==item.isDefault ? 'okcircular' : 'okcirculars'" 
        @click="choice(item.id)"></div>&nbsp;<span>{{okbtn==item.isDefault ?"默认地址":"设为默认"}}</span></div>
        <div class="eidtbtn">
          <!-- 编辑 -->
          <div class="caozuo" @click="editRess(item)">
            <div class="eitdbtn"></div><span>&nbsp;编辑</span>
          </div>
          <div class="caozuo" @click="delRess(item.id)">
            <div class="eitdbtn dels"></div><span>&nbsp;删除</span>
          </div>
        </div>
      </div>       
    </div>
  <div class="colse-button" @click="goAdd">添加新地址</div>
  </div>
</template>
<script>
import '../../../static/css/aui.css'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      okbtn: 1, // 默认地址状态
      nomoren: '设为默认',
      moren: '默认地址',
      dataType: false, // 是否显示数据
      ressdata: '', // 设置默认数据为空
      ssAuth: this.$store.state.ssAuth
    }
  },
  methods: {
    // 设置为默认收货地址
    choice: function (e) {
      this.$http.post(this.$store.state.postUrl + '/Api/UserInfo/setDefaultAddress',
        {
          ssAuth: this.ssAuth,
          id: e
        }, {emulateJSON: true})
        .then(function (res) {
          if (res.body.code === 10000) {
            // 弹出操作状态
            Toast(res.body.message)
            this.getData()
          }
        }, function () {
        })
    },
    // 获取收货地址
    getData: function () {
      this.$http.post(this.$store.state.postUrl + '/Api/UserInfo/getAddressList',
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
    // 删除收货地址
    delRess: function (e) {
      this.$http.post(this.$store.state.postUrl + '/Api/UserInfo/deleteAddress',
        {
          ssAuth: this.ssAuth,
          id: e
        }, {emulateJSON: true})
      .then(function (res) {
        console.log(res)
        if (res.body.code === 10000) {
          // 弹出操作状态
          Toast(res.body.message)
          this.ressdata = []
          this.getData()
        }
      }, function () {
      })
    },
    // 编辑收货地址
    editRess: function (e) {
      this.$store.state.add_edit = 1
      sessionStorage.setItem('address_id', e.id)
      sessionStorage.setItem('address_name', e.realName)
      sessionStorage.setItem('address_phone', e.telephone)
      sessionStorage.setItem('address_zipcode', e.zipcode)
      sessionStorage.setItem('address_pro', e.provinceName)
      sessionStorage.setItem('address_city', e.cityName)
      sessionStorage.setItem('address_area', e.areaName)
      sessionStorage.setItem('address_address', e.address)
      sessionStorage.setItem('address_proid', e.provinceId)
      sessionStorage.setItem('address_cityid', e.cityId)
      sessionStorage.setItem('address_areaid', e.areaId)
      this.$router.push({path: '/modifyress'})
    },
    // 跳转
    goAdd: function () {
      this.$router.push({path: '/apendaddress'})
      // 清除缓存
      sessionStorage.setItem('ress_username', '')
      sessionStorage.setItem('ress_telephone', '')
      sessionStorage.setItem('ress_code', '')
      sessionStorage.setItem('ress_ress', '')
    },
    // 选择收货地址并返回 清除地址状态
    chose: function (id) {
      if (this.$store.state.choseAddress === 1) {
        this.$store.state.addressId = id
        this.$store.state.choseAddress = 0
        window.history.go(-1)
      }
    }
  },
  mounted () {
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getData()
    })
  }
}
</script>

<style scoped>
.dizhi{
  background: #fff;
  margin-bottom: 0.64rem;
}
.addreelist{
  border-bottom: 0.03rem solid #eee;
  overflow: hidden;
  background-color: #fff;
  padding: 0.64rem;
}
/*默认*/
.addrees{
  margin-top: 0.32rem;
  font-size: 0.64rem;
  color: #666666;
}
.addreelist .addreeIns{
  width: 100%;
  font-size: 0.682rem;
  color: #333333;
  overflow: hidden;
}
.addreelist .addreename{
  float: left;
}
.addreelist .addreephone{
  float: right;
  display: inline-block;
}
/*操作*/
.operation{
  padding: 0.64rem;
  font-size: 0.746rem;
}
/*选择框*/
.setDefault{
  display: inline-block;
  color: #666;
}
.circular{
  margin-top: 0.2rem;
  display: inline-block;
  color: #666;
  width: 0.7rem;
  height: 0.7rem;
  font-size: 0.64rem;
  background: url(../../assets/user/yuan.png);
  background-size: 100%;
  float: left;
}
/*选中*/
.okcircular{
   background: url(../../assets/user/yuan1.png);
   background-size: 100%;
   color: #53c7c4;
}
.oksetDefault{
  color: #53c7c4;
}
/*编辑删除*/
.eidtbtn{
  float: right;
}
.caozuo{
  float: left;
  width: 2.6rem;
  color: #999999;
  margin-left: 0.746rem;
}
.eitdbtn{
  margin-top: 0.05rem;
  width: 0.853rem;
  height: 0.96rem;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(../../assets/user/edit.png);
  float: left;
}
.dels{
  background-image: url(../../assets/user/del.png);
}
/*添加新地址*/
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
