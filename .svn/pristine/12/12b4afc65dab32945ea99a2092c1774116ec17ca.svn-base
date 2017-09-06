<template>
  <div>
    <div v-title data-title="我的奖品">
    </div>
   <!-- 订单列表 -->
   <section class="aui-content orderlist">
        <!-- 订单基本信息 -->
        <div class="aui-card-list aui-border-t aui-border-b">
            <div class="order-txt">
              <div class="logisticepic">
                <img src="../../../assets/user/shunfeng.png" alt="">
              </div>
              <div class="orderbox">
                <div>顺丰快递</div>
                <div class="ordertime">运单编号：15056156115</div>
              </div>
            </div>
            <div class="aui-card-list-header aui-card-list-user artbox">
                <div class="aui-card-list-user-avatar artpic">
                    <img src="../../../assets/shopmall/1310.png">
                </div>
                <div class="aui-card-list-user-name">
                    <div class="aui-font-size-16 ordertitle">指挥者桌游</div>
                </div>
                <div class="aui-card-list-user-info">价格：<span class="order_price">64.00</span></div>
        </div>   
        </div>
        <!-- 订单物流 -->
        <div class="logisticsflow">
            <!-- 每个站点信息 -->
            <div class="logisticsli firstli">
              <p>由 [江苏航空部] 发往 [北京中转站]</p>
              <p>2017-06-07 17:43:03</p>
            </div>
             <div class="logisticsli">
              <p>由 [江苏航空部] 发往 [北京中转站]</p>
              <p>2017-06-07 17:43:03</p>
            </div>
             <div class="logisticsli lastlogis">
              <p>由 [江苏航空部] 发往 [北京中转站]</p>
              <p>2017-06-07 17:43:03</p>
            </div>
        </div>
   </section>
  </div>
</template>
<script>
import '../../../../static/css/aui.css'
export default {
  data () {
    return {
      bg: require('../../../assets/user/backuser.png'),
      currentView: 'businesscard'
    }
  },
  methods: {
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
    background: url(../../../assets/user/setting.png);
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
    background: url(../../../assets/user/vip2.png);
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
    background-image: url(../../../assets/user/tuiguangyuan.png);
    background-size: 2.56rem 0.96rem;
    position: absolute;
    right: 0.64rem;
    width: 2.56rem;
    height: 0.96rem;
    top: 2.24rem;
  }
  /*用户资料卡片样式 end*/
  /*订单信息*/
  .order-txt{
    padding: 0.32rem 0 0.32rem 0.64rem;
    font-size: 0.64rem;
    color: #999999;
    line-height: 0.853rem;
    border-bottom: 0.03rem solid #eeeeee;
  }
  /*订单信息*/
  .orderbox{
  }
  /*快递logo*/
  .logisticepic{
    width: 1.49rem;
    height: 1.49rem;
    float: left;
    margin: 0.213rem  0.533rem 0 0;
  }
  .logisticepic img{
    width: 100%;
    height: 100%;
  }
  .ordertime{
    margin-top: 0.32rem;
  }
  .aui-card-list{
    background-image: none;
  }
  .orderlist .aui-card-list-header {
    padding: 0;
  }
  .orderlist .aui-card-list-user{
    padding: 0.64rem;
  }
  .orderlist .aui-card-list-user-avatar{
    margin-left: 0;
    margin-right: 0.64rem;
  }
  .orderlist .ordertitle{
    font-size: 0.746rem !important;
    margin-top: 0.32rem;
  }
  .orderlist .aui-card-list-user-info{
    font-size: 0.533rem;
  }
  .order_price{
    font-size: 0.64rem;  
    color: #fc474b;
  }
  /*商品图片*/
  .artpic{
    width: 2.56rem;
    height: 2.56rem;
  }
  .artbox{
    overflow: hidden;
    width: 100%;
  }
  /*物流*/
  .logisticsflow{
    margin-top: 0.64rem;
    padding: 0 0.426rem 0 2.986rem;
    height: 10rem;
    background: #fff;
    position: relative;
    overflow: hidden;
  }
  .logisticsflow::before{
    content: '';
    position: absolute;
    top: 1.28rem;
    left: 1.493rem;
    height: 100%;
    width: 0.05rem;
    background: #dddddd;
  }
  /*每个站点信息*/
  .logisticsli{ 
    padding-top: 0.64rem;
    padding-bottom: 0.426rem;
    border-bottom: 0.03rem solid #ededed;
    line-height: 1.066rem;
    position: relative;
  }
  .logisticsli::before{
    content: '';
    position: absolute;
    top: 1rem;
    left: -1.68rem;
    width: 0.426rem;
    height: 0.426rem;
    border-radius: 100%;
    background: #ddd;
  }
  .firstli::before{
    content: '';
    position: absolute;
    top: 1rem;
    left: -1.75rem;
    width: 0.426rem;
    height: 0.426rem;
    border-radius: 100%;
    background: #53c7c4; 
    border: 0.1rem solid #a9e3e2;
  }
  .logisticsli p{
     font-size: 0.64rem;
     color: #999;
  }
  .lastlogis{
    border: 0;
  }
  /*最新数据样式*/
  .firstli p{
    color: #53c7c4;
  }
</style>
