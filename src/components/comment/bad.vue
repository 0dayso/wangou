<style scoped>
  #index{
    margin-bottom: 0!important;
  }
  /*评论*/
  .comment{
    border-top:0.03rem solid #dddddd;
    padding: 0.64rem;
    background: #fff;
  }
  .comment .commentNum{
    float: right;
    color: #999999;
  }
  .comment .commentZong{
    position: relative;
    overflow: hidden;
  }
  .comment .storeStart{
    margin-top: 0;
  }
  /*评论*/
  .aui-card-list-header,.aui-card-list-content-padded{
    padding-left: 0;
    padding-right: 0;
  }
  .aui-card-list-content-padded{
    color: #666;
  }
  .aui-row-padded{
    padding: 0;
  }
  .aui-row-padded .aui-col-xs-4{
    width: 3.512rem;
    height: 3.512rem;
    background-image: url(http://p1.meituan.net/460.280/deal/5d9541357d2662793bf939f49bfebe8293662.jpg@460w_280h_1e_1c);
    background-size: cover;
    background-position: center;
    margin-right: 0.298rem;
  }
  .aui-row-padded .aui-col-xs-4:nth-child(2){
    background-image: url(http://p0.meituan.net/dealwaterb/a31bc08647d3df7f46ff57cbf20dcc3944183.jpg@660h_440w_2e_90Q%7Cwatermark=1&&p=7&x=8&y=8);
  }
  .aui-row-padded .aui-col-xs-4:nth-child(3){
    background-image: url(http://p0.meituan.net/dealwatera/ab06e961620ded4a5641ae859677e4ff473095.jpg@702h_702w_2e_90Q%7Cwatermark=1&&p=4);
  }
  .aui-row-padded .aui-col-xs-4:nth-child(4){
    background-image: url(http://p0.meituan.net/dealwatera/1fb6974b6513b241c3e26f30b26560d730798.jpg@467h_702w_2e_90Q%7Cwatermark=1&&p=4);
  }
  .aui-row-padded .aui-col-xs-4:last-child{
    margin-right: 0;
  }
.comment .aui-text-info{
  font-size: 0.64rem;
  color: #333!important;
}
.comment .aui-card-list-user-avatar{
  width: 1.92rem;
}
/*查看评论*/
  /*小星星*/
  .storeStart{
    margin-top: 0.64rem;
    font-size: 0.533rem;
    color: #f5a623;
  }
  .storeStart span{
    margin-left: 0.426rem;
    line-height: 100%;
  }
  .storeStart .allping{
    margin-left: 0;
  }
  .storeStart .start{
    width: 0.64rem;
    height: 0.64rem;
    float: left;
    margin-right: 0.106rem;
    background-image: url(../../assets/shopmall/starsss.png);
    background-size: 100%;
  }
  .storeStart .start1{
    background-image: url(../../assets/shopmall/start0.png);
    background-size: 100%;
  }
.seebtn{
  width: 100%;
  line-height: 1.706rem;
  font-size: 0.533rem;
  color: #999999;
  text-align: center;
  background: #fff;
  padding:0 0.64rem;
  display: block;
}

.storebr.dizhi,.seebtn .storebr{
  margin-top: 0;
}
/*联系电话弹窗*/
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
.btnsArr a{
  width: 100%;
  height: 100%;
  color: #333;
  display: block;
}
/*悬浮框*/
.checkfu{
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 0;
  background: #fff;
  z-index: 500;
}
/*占位框*/
.zhanwei{
  display: block;
  height: 0.01rem;
  width: 100%;
  transition:all 0.2s;
}
.zhanweis{
  display:block;
  visibility:hidden;
  height: 6.4rem;
}
/*总体评价*/
.comment .aui-content-padded{
  margin:0.853rem 0;
}
.storeStart .allping{
  float: left;
  font-size: 0.746rem;
  color: #666666;
}
.pinglunbtn .aui-btn-info{
  height: auto;
  color: #53c7c4!important;
  background-color: #fff!important;
  border:0.03rem solid #53c7c4;
  font-size: 0.64rem;
  width: 3.2rem;
  line-height: 1.28rem;
  padding: 0;
  margin-right: 0.6rem;
}
.userping{
  border-bottom:0.03rem solid #ddd;
  padding-top: 0.853rem;
  width: 120%;
  margin-left: -10%;
}
.comment .aui-content{
  overflow-x: inherit!important;
}
#shoporder{
  margin-bottom: 0!important;
}
</style>
<template>
  <div id="index">
<!-- 评论       -->
      <div class="comment">
        <div class="commentZong">
          <div class="storeStart">
            <span class="allping">总体评价：</span>
            <div class="start" :class="start>=1 ? 'start1' : 'start' "></div>
            <div class="start" :class="start>=2 ? 'start1' : 'start' "></div>
            <div class="start" :class="start>=3 ? 'start1' : 'start' "></div>
            <div class="start" :class="start>=4 ? 'start1' : 'start' "></div>
            <div class="start" :class="start>=5 ? 'start1' : 'start' "></div>
            <span>4分</span>
            <span class="commentNum"><span>1230</span>条 评价</span>
          </div>          
        </div>
        <section class="aui-content-padded pinglunbtn">
          <div class="aui-btn aui-btn-info">好评 100</div>
          <div class="aui-btn aui-btn-info" >中评 200</div>
          <div class="aui-btn aui-btn-info">差评 10</div>
        </section>
        <div class="storebr"></div>
        <!-- 评论详情 -->
        <section class="aui-content">
        <!-- 1111111111   -->
          <div class="aui-card-list">
            <div class="aui-card-list-header aui-card-list-user">
                <div class="aui-card-list-user-avatar">
                    <img src="../../assets/user/user.png" class="aui-img-round">
                </div>
                <div class="aui-card-list-user-name">
                    <div class="aui-text-info">寂寞空庭</div>
                </div>
                <div class="aui-card-list-user-info text-light">
                    <div class="storeStart">
                      <div class="start" :class="start>=1 ? 'start1' : 'start' "></div>
                      <div class="start" :class="start>=2 ? 'start1' : 'start' "></div>
                      <div class="start" :class="start>=3 ? 'start1' : 'start' "></div>
                      <div class="start" :class="start>=4 ? 'start1' : 'start' "></div>
                      <div class="start" :class="start>=4 ? 'start1' : 'start' "></div>
                      <span style="color:#9d9d9d">2017-06-25</span>
                </div>        
                </div>
            </div>
            <div class="aui-card-list-content-padded aui-padded-t-5 aui-padded-b-5">
                正一味烧肉饭，去的是大兴旧宫店，在地下一层，地方挺好找的，到了店里先扫码验证，等了几分钟服务员就把烧肉饭端上来了，味道挺好吃的，还有一杯饮料，烧肉饭吃起来孜然味，有点像羊肉串的味道，喜欢团购正一味烧肉饭的可以来尝尝.
            </div>
            <div class="aui-card-list-content">
                <div class="aui-row aui-row-padded">
                    <div class="aui-col-xs-4">
                    </div>
                </div>
            </div>
            <div class="userping"></div>
          </div>
          <!-- 222222 -->
          <div class="aui-card-list">
            <div class="aui-card-list-header aui-card-list-user">
                <div class="aui-card-list-user-avatar">
                    <img src="../../assets/user/user.png" class="aui-img-round">
                </div>
                <div class="aui-card-list-user-name">
                    <div class="aui-text-info">寂寞空庭</div>
                </div>
                <div class="aui-card-list-user-info text-light">
                    <div class="storeStart">
                      <div class="start" :class="start>=1 ? 'start1' : 'start' "></div>
                      <div class="start" :class="start>=2 ? 'start1' : 'start' "></div>
                      <div class="start" :class="start>=3 ? 'start1' : 'start' "></div>
                      <div class="start" :class="start>=4 ? 'start1' : 'start' "></div>
                      <div class="start" :class="start>=4 ? 'start1' : 'start' "></div>
                      <span style="color:#9d9d9d">2017-06-25</span>
                </div>        
                </div>
            </div>
            <div class="aui-card-list-content-padded aui-padded-t-5 aui-padded-b-5">
                正一味烧肉饭，去的是大兴旧宫店，在地下一层，地方挺好找的，到了店里先扫码验证，等了几分钟服务员就把烧肉饭端上来了，味道挺好吃的，还有一杯饮料，烧肉饭吃起来孜然味，有点像羊肉串的味道，喜欢团购正一味烧肉饭的可以来尝尝.
            </div>
            <div class="aui-card-list-content">
                <div class="aui-row aui-row-padded">
                    <div class="aui-col-xs-4">
                    </div>
                    <div class="aui-col-xs-4">
                    </div>
                </div>
            </div>
            <div class="userping"></div>
          </div>
          <!-- 33333333333333           -->
          <div class="aui-card-list">
            <div class="aui-card-list-header aui-card-list-user">
                <div class="aui-card-list-user-avatar">
                    <img src="../../assets/user/user.png" class="aui-img-round">
                </div>
                <div class="aui-card-list-user-name">
                    <div class="aui-text-info">寂寞空庭</div>
                </div>
                <div class="aui-card-list-user-info text-light">
                    <div class="storeStart">
                      <div class="start" :class="start>=1 ? 'start1' : 'start' "></div>
                      <div class="start" :class="start>=2 ? 'start1' : 'start' "></div>
                      <div class="start" :class="start>=3 ? 'start1' : 'start' "></div>
                      <div class="start" :class="start>=4 ? 'start1' : 'start' "></div>
                      <div class="start" :class="start>=4 ? 'start1' : 'start' "></div>
                      <span style="color:#9d9d9d">2017-06-25</span>
                </div>        
                </div>
            </div>
            <div class="aui-card-list-content-padded aui-padded-t-5 aui-padded-b-5">
                正一味烧肉饭，去的是大兴旧宫店，在地下一层，地方挺好找的，到了店里先扫码验证，等了几分钟服务员就把烧肉饭端上来了，味道挺好吃的，还有一杯饮料，烧肉饭吃起来孜然味，有点像羊肉串的味道，喜欢团购正一味烧肉饭的可以来尝尝.
            </div>
            <div class="aui-card-list-content">
                <div class="aui-row aui-row-padded">
                    <div class="aui-col-xs-4">
                    </div>
                    <div class="aui-col-xs-4">
                    </div>
                    <div class="aui-col-xs-4">
                    </div>
                </div>
            </div>
            <div class="userping"></div>
          </div>          
        </section>        
      </div>     
  </div>
</template>
<script>
import '../../../static/css/aui.css'
export default {
  components: {
  },
  data () {
    return {
      // 店铺评分
      start: 4
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
