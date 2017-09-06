<template>
<div>
<!-- 标题 -->
  <div v-title data-title="游戏币购买">
  </div>
<!-- 广告 -->
  <div class="aui-card-list-content advert" v-bind:style="{'background-image':'url('+indexGao.imgUrl+')'}">
  </div>
<!-- 跑马灯广告   -->
  <marquee scrollamount="3" behavior="alternate" class="advert_txt">
  	游戏币奖池，50000元快来抢购吧！
  </marquee>
<!-- 购买金额   -->
  <div class="choice">
  <i class="aui-iconfont aui-icon-down downz aui-collapse-arrow"></i>
	<div class="choice_sele">
  <span class="selediv">选择购买金额</span>
	 <select class="selebox"  style="text-agine: right" v-model="selected"  @change="chooseMedicine($event)">
		<option v-for="item in bili" :value="item.money">{{item.money}}</option>
	 </select>
	</div>
  </div>
  <!-- 获取 -->
   <div class="aui-content aui-margin-b-15 orderstyle">
      <ul class="aui-list aui-list-in">
          <li class="aui-list-item">
            <div class="aui-list-item-inner">
                <div class="aui-list-item-title">获得游戏币</div>
                <div class="aui-list-item-right originallycolor">{{jiben}}</div>
            </div>
          </li>
          <li class="aui-list-item pay-wx">
            <div class="aui-list-item-inner" style="border:0;">
               <div class="aui-list-item-title">获得公众券：</div>
                  <div class="aui-list-item-right payment">{{fuliquan}}</div>
            </div>
          </li>
        </ul>
    </div>  
<!-- 提示  -->
    <div class="prompt">
    	说明： 公众券可进行商城兑换和店铺消费，不可以提现和其他用途
    </div>
<!-- 底部付款栏 -->
    <div class="footers">
      <div class="heji">合计: &nbsp;&nbsp;<span class="rmb">¥ <span class="rmbs">{{selected}}</span></span></div>
      <div class="end" :class="selected > 0 ? 'endactive' : ''">确认支付</div>
    </div>
</div>
</template>
<script>
import '../../../static/css/aui.css'
let guanggao = require('../../assets/shopmall/shopmall_gg0.png')
export default {
  data () {
    return {
      guanggao: guanggao,
      indexGao: '',
      jiben: 0,
      seleNum: 0,
      // 公众券
      fuliquan: 0,
      ssAuth: this.$store.state.ssAuth,
      bili: '',
      medicine: '',
      selected: 0,
      // 获得券的百分比
      baifen: ''
    }
  },
  mounted () {
    this.$http.post(this.$store.state.postUrl + '/Api/Pay/payBL', {'ssAuth': this.ssAuth}, {emulateJSON: true})
    .then(function (res) {
      if (res.body.code === 10000) {
        this.bili = res.body.data
      }
    })
    // 获取广告
    this.getGao()
  },
  methods: {
    chooseMedicine: function () {
      if (this.selected !== '0') {
        // 遍历比例
        for (let i = 0; i < this.bili.length; i++) {
          if (this.bili[i].money === this.selected) {
            this.baifen = this.bili[i].pre / 100
          }
        }
        // 游戏币
        this.jiben = parseInt(this.selected) * 10000
        // 福利券
        this.fuliquan = parseInt(this.selected) * this.baifen
      } else {
        this.jiben = 0
        this.fuliquan = 0
      }
    },
    getGao: function () {
      // 获取广告数据
      this.$http.post(this.$store.state.postUrl + '/Api/App/getAppAdv', {'position': 6}, {emulateJSON: true})
      .then(function (res) {
        console.log(res)
        if (res.body.code === 10000) {
          this.indexGao = res.body.data
        }
      })
    }
  }
}
</script>
<style scoped>
/*广告*/
.advert{
	width: 100%;
	height: 4.266rem;
	background-size: 100%;
	background-repeat: no-repeat;
}
/*跑马灯广告*/
.advert_txt{
	width: 100%;
	line-height: 1.28rem;
　　white-space: nowrap;
　　overflow:-webkit-marquee;
	color: #9f572a;
	font-size: 0.64rem;
	background: #fff6da;
}
/*选择购买金额*/
.choice{
	position: relative;
	padding: 0.533rem 0.64rem;
	background: #fff;
	margin: 0.64rem 0;
	overflow: hidden;
}
/*选择购买头像*/
.choice .choice_sele{
	position: relative;
	width: 100%;
	line-height: 1.4506rem;
	float: left;
	padding-left: 1.92rem;
	background-image: url('../../assets/shopmall/golds.png');
	background-size: 1.4506rem 1.4506rem;
	background-repeat: no-repeat;
	margin-right: 0.64rem;
	background-position:center left;
}
.choice .choice_sele select{
	font-size: 0.64rem;
	color: #999999;
}
.downz{
	position: absolute;
	right: 0.64rem;
	top: 50%;
	margin-top: -0.35rem;
	font-size: 0.64rem;
	color: #cccccc;
}
  /*微信支付底线*/
  .aui-list.aui-list-in .pay-wx{
    background-image: none;
  }
  .orderstyle .aui-list-item{
    padding: 0 0.64rem;
    background-image: none;
  }
  .orderstyle .aui-list-item-inner{
    border-bottom:0.03rem solid #dddddd;
  }
  .orderstyle .aui-list-in{
    background-image: none;
  }
  .orderstyle .aui-list .aui-list-item-title{
    font-size: 0.64rem;
    color: #999999;
  }
  .orderstyle .discount{
    color: #4fc73a;
  }
  .orderstyle .payment{
    color: #333333;
  }
  /*提示*/
  .prompt{
  	padding: 0 0.853rem;
  	margin-top: 0.64rem;
  	font-size: 0.64rem;
  	color: #ff372c;
  }
    /*底部付款栏*/
  .footers{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2.56rem;
    background: #fff;
    border-top:0.03rem solid #dddddd;
    padding-left: 0.64rem;
  }
  /*heji*/
  .heji{
    font-size: 0.64rem;
    color: #333;
    float: left;
    line-height: 3rem;
  }
  .rmb{
    font-size: 0.6rem;
    color: #ff372c;
  }
  .rmbs{
    font-size: 0.853rem;
  }
  .end{
    width: 5.546rem;
    height: 2.56rem;
    background: #ccc;
    color: #fff;
    text-align: center;
    line-height: 2.56rem;
    float: right;
  }
  .endactive{
    background: #ff393a;
  }
  /*下拉框*/
  .selediv{
    display: inline-block;
    float: left;
    line-height: 2.2rem;
    width: 35%;
    font-size: 0.64rem;
    color: #999999;
  }
  .selebox{
    width: 60%;
    text-align: right;
  }
</style>
