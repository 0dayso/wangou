<style>
</style>
<template>
  <div id="shoporder" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
  <div v-title data-title="待付款">
  </div>
   <!-- 订单列表 -->
   <section class="aui-content orderlists">
        <div class="aui-card-list aui-border-t aui-border-b" v-for="item in orderArr">
            <div class="order-txt">
              <div>订单号：{{item.orderSn}}</div>
              <div>订单时间：{{item.createTime}}</div>
            </div>
            <div class="aui-card-list-header aui-card-list-user" @click="goInt(item.storeId)">
                <div class="aui-card-list-user-avatar stopBg" v-bind:style="{'background-image':'url('+item.storeLogo+')'}">
                </div>
                <div class="aui-card-list-user-name">
                    <div class="aui-font-size-16 ordertitle">{{item.storeName}}</div>
                </div>
                <div class="aui-card-list-user-info">价格：<span class="order_price">{{item.totalMoney}}</span></div>
          </div>
          <div class="aui-content aui-margin-b-15 orderstyle">
            <ul class="aui-list aui-list-in">
              <li class="aui-list-item">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-title">订单金额</div>
                    <div class="aui-list-item-right originallycolor">¥{{item.totalMoney}}</div>
                </div>
              </li>
               <li class="aui-list-item">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-title">抵扣卷</div>
                    <div class="aui-list-item-right discount">-¥{{item.pointMoney}}</div>
                </div>
              </li>
               <li class="aui-list-item">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-title">实付金额</div>
                    <div class="aui-list-item-right originallycolor">¥{{item.payMoney}}</div>
                </div>
              </li>
               <li class="aui-list-item pay-wx">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-title">支付类型</div>
                    <div class="aui-list-item-right payment"><div class="aui-wx" v-bind:style="{'background-image':'url('+apply.logo+')'}"></div>{{apply.title}}</div>
                </div>
              </li>
              <div class="listbtn">
                    <div class="orderButtton cancelOrder" @click="escOr(item.orderSn)">取消</div>
                    <router-link class="orderButtton goPayment" to="/orderdetails">去付款</router-link>
              </div>             
            </ul>
            </div>
        </div>
        <div v-if="nomore" class="noMore"></div>
        <div class="loading" v-if="loadings"><mt-spinner  type="fading-circle"></mt-spinner></div>
        <h5 v-if="dataLength">暂无待付款订单</h5>
   </section>
</div>
</template>
<script>
import 'mint-ui/lib/style.css'
import { InfiniteScroll, Toast } from 'mint-ui'
import '../../../../static/css/aui.css'
export default {
  data () {
    return {
      page: 1,
      dataLength: false,
      loadings: true,
      nomore: false,
      loading: true,
      apply: '',
      orderArr: [],
      // 令牌
      ssAuth: this.$store.state.ssAuth
    }
  },
  components: {
    InfiniteScroll
  },
  mounted () {
    this.getData()
    // 获取支付方式
    this.$http.post(this.$store.state.postUrl + '/Api/Pay/payTypeList', {}, {emulateJSON: true})
    .then(function (res) {
      if (res.body.code === 10000) {
        for (let i = 0; i < res.body.data.length; i++) {
          if (res.body.data[i].name === 'wxPay') {
            this.apply = res.body.data[i]
          }
        }
      }
    })
  },
  methods: {
    goInt: function (id) {
      this.$router.push({path: '/store/stroeint?storeId=' + id})
    },
    getData: function (e) {
    // 获取家乡游戏数据
      this.$http.post(this.$store.state.postUrl + '/Api/Store/getStoreOrderList', {'ssAuth': this.ssAuth, 'pageSize': 10, 'page': this.page, 'orderType': 0}, {emulateJSON: true})
      .then(function (res) {
        if (res.body.data.length > 0) {
          for (let i = 0; i < res.body.data.length; i++) {
            this.orderArr.push(res.body.data[i])
          }
          // 判断是否还有数据
          if (res.body.pageInfo.more === 0) {
            this.loadings = false
            this.loading = true
            this.nomore = true
          } else {
            this.loading = false
          }
        } else {
          this.nomore = false
          this.loadings = false
          this.dataLength = true
        }
      })
    },
    // 执行底部加载
    loadMore: function () {
      this.page++
      this.loading = true
      setTimeout(() => {
        this.getData()
      }, 2500)
    },
    // 取消订单
    escOr: function (o) {
      this.$http.post(this.$store.state.postUrl + '/Api/Store/delStoreOrder', {'ssAuth': this.ssAuth, 'orderSn': o}, {emulateJSON: true})
      .then(function (res) {
        if (res.body.code === 10000) {
          this.orderArr = []
          this.getData()
        } else {
          Toast('删除订单出现错误')
        }
      })
    }
  }
}
</script>
<style scoped>
    /*订单信息*/
  .order-txt{
    padding: 0.32rem 0 0.32rem 0.64rem;
    font-size: 0.554rem;
    color: #999999;
    line-height: 0.853rem;
    border-bottom: 0.03rem solid #eeeeee;
  }
  .aui-card-list{
    background-image: none;
    margin-top: 0.64rem;
  }
  .orderlists .aui-card-list-header {
    padding: 0;
  }
  .orderlists .aui-card-list-user{
    padding: 0.64rem;
  }
  .orderlists .aui-card-list-user-avatar{
    margin-left: 0;
    margin-right: 0.64rem;
  }
  .orderlists .ordertitle{
    font-size: 0.746rem !important;
  }
  .orderlists .aui-card-list-user-info{
    font-size: 0.533rem;
  }
  .order_price{
    font-size: 0.64rem;  
    color: #fc474b;
  }
  .aui-card-list-user-avatar{
    border: 0.03rem solid #eee;
  }
  /*商品图片大小*/  
  .orderlists .aui-card-list-user-avatar{
    width: 2.56rem;
    height: 2.56rem;
  }
  .orderlists .aui-card-list-user-name{
    margin-top: 0.32rem;
  }
  /*待付款订单背景*/
  .order-txt{
    border: 0;
  }
  .orderlists .aui-card-list-user{
    background: #f8f8f8;
  }
  /*订单列表高度*/
 .orderlists .aui-list .aui-list-item{
  height: 2.206rem;
  padding-left: 0.64rem;
  margin-right: 0.64rem;
 }
 .orderlists .aui-list.aui-list-in{
  background-image: none;
 }
 .orderstyle .aui-list-item-title,.orderstyle .aui-list-item-right{
  font-size: 0.597rem;
  color: #999999;
 }
  .orderstyle .aui-list .aui-list-item-inner{
    padding-right: 0;
  }
  /*订单金额颜色*/
  .orderstyle .originallycolor{
    color: #ff372c;
  }
  .orderstyle .discount{
    color: #4fc73a;
  }
  .orderstyle .payment{
    color: #333333;
  }
  .orderstyle .payment .aui-wx{
    width: 1.066rem;
    height: 1.066rem;
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    margin-top: -0.533rem;
    right: 2.706rem;
  }
  /*微信支付底线*/
  .aui-list.aui-list-in .pay-wx{
    background-image: none;
  }
  /*订单按钮*/
  .orderButtton{
    width: 2.986rem;
    height: 1.28rem;
    background-color: #ddf4f3;
    text-align: center;
    line-height: 1.28rem;
    font-size: 0.554rem;
    border: 0.05rem solid #53c7c4; 
    color: #53c7c4;
    border-radius: 0.8rem;
    position: absolute;
    top: 50%;
    margin-top: -0.64rem;
  }
  .aui-card-list-footer{
    padding: 0;
  }
  .listbtn{
    border-top: 0.03rem solid #dddddd;
    width: 100%;
    height: 2.773rem;
    position: relative;
  }
  .cancelOrder{
    right: 4.266rem;
  }
  .goPayment{
    right: 0.64rem;
  }
  /*店铺头像*/
  .stopBg{
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  h5{
  display: block!important;
  text-align: center;
  width: 100%;
  line-height: 5rem;
}
    /*加载*/
.loading{
  width: 1.2rem;
  height: 2rem;
  margin: 0.64rem auto 0.64rem;
  overflow: hidden;
  text-align: center;
}
  /*没有更多*/
#app .noMore{
  width: 100%;
  height: 1.92rem;
  color: #cccccc;
  line-height: 1.92rem;
  text-align: center;
  font-size: 0.534rem;
}
</style>

