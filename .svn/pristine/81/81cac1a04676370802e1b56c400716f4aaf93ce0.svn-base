<template>
  <div>
    <div v-title data-title="业绩明细">
    </div>
    <!-- 用户信息 -->
    <component :is="currentView" transition="fade" transition-mode="out-in"></component>
      <!-- 头部tab按钮 -->
  <div class="aui-tab orderTab" id="tab">
    <div class="aui-tab-item" :class="active==0 ? 'aui-active' : 'aui-actives'" v-on:click="getData(0)">全部 <div  class="tabBorder" :class="active==0 ? 'yesBorder' : 'noBorder'"></div></div>
    <div class="aui-tab-item" :class="active==1 ? 'aui-active' : 'aui-actives'" v-on:click="getData(1)">收入<div class="tabBorder" :class="active==1 ? 'yesBorder' : 'noBorder'"></div></div>
    <div class="aui-tab-item" :class="active==2 ? 'aui-active' : 'aui-actives'" v-on:click="getData(2)">支出 <div class="tabBorder" :class="active==2 ? 'yesBorder' : 'noBorder'" ></div></div>
  </div>
    <!-- 列表 -->
    <!-- 房卡 -->
    <div v-infinite-scroll="loadMore"  infinite-scroll-disabled="loading"  infinite-scroll-distance="10">
    <div v-for="item in moneydata">
    <div class="aui-content achieve aui-margin-b-15" v-if="item.remarkType == 'card'">
        <ul class="aui-list aui-media-list">
            <li class="aui-list-item mingxili">
                <div class="aui-media-list-item-inner">
                    <div class="aui-list-item-media wgpic">
                        <img src="../../../assets/user/card.png">
                    </div>
                    <div class="aui-list-item-inner">
                        <div class="aui-list-item-text">
                            <div class="aui-list-item-title cardtitle">用户房卡购买</div>
                            <div class="aui-list-item-right cardtime">{{item.createTime}}</div>
                        </div>
                        <div class="aui-list-item-text cardBalance">
                            余额:&nbsp;{{item.balance}} <span>+ 0.63</span>
                        </div>
                    </div>
                </div>
            </li>        
        </ul>
    </div>  
    <!-- 游戏币      -->
     <div class="aui-content achieve aui-margin-b-15" v-if="item.remarkType == 'user_charge'">
        <ul class="aui-list aui-media-list">
            <li class="aui-list-item mingxili">
                <div class="aui-media-list-item-inner">
                    <div class="aui-list-item-media wgpic">
                        <img src="../../../assets/user/gamecz.png">
                    </div>
                    <div class="aui-list-item-inner">
                        <div class="aui-list-item-text">
                            <div class="aui-list-item-title cardtitle">用户游戏币充值</div>
                            <div class="aui-list-item-right cardtime">{{item.createTime}}</div>
                        </div>
                        <div class="aui-list-item-text cardBalance">
                            余额:&nbsp;{{item.balance}}<span>+ 9.20</span>
                        </div>
                    </div>
                </div>
            </li>        
        </ul>
    </div>
    <!-- 商城兑换 -->
    <div class="aui-content achieve aui-margin-b-15" v-if="item.remarkType == 'mall'">
        <ul class="aui-list aui-media-list">
            <li class="aui-list-item mingxili">
                <div class="aui-media-list-item-inner">
                    <div class="aui-list-item-media wgpic">
                        <img src="../../../assets/user/shopmall.png">
                    </div>
                    <div class="aui-list-item-inner">
                        <div class="aui-list-item-text">
                            <div class="aui-list-item-title cardtitle">用户商城兑奖</div>
                            <div class="aui-list-item-right cardtime">{{item.createTime}}</div>
                        </div>
                        <div class="aui-list-item-text cardBalance">
                            余额:&nbsp;{{item.balance}} <span>+ 19.78</span>
                        </div>
                    </div>
                </div>
            </li>        
        </ul>
    </div>
    <!-- 店铺消费     -->
    <div class="aui-content achieve aui-margin-b-15" v-if="item.remarkType == 'store'">
        <ul class="aui-list aui-media-list">
            <li class="aui-list-item mingxili">
                <div class="aui-media-list-item-inner">
                    <div class="aui-list-item-media wgpic">
                        <img src="../../../assets/user/yejimx.png">
                    </div>
                    <div class="aui-list-item-inner">
                        <div class="aui-list-item-text">
                            <div class="aui-list-item-title cardtitle">用户店铺消费</div>
                            <div class="aui-list-item-right cardtime">{{item.createTime}}</div>
                        </div>
                        <div class="aui-list-item-text cardBalance">
                            余额:&nbsp;{{item.balance}} <span>+ 10.63</span>
                        </div>
                    </div>
                </div>
            </li>        
        </ul>
    </div>
    <!-- 业绩提成      -->
    <div class="aui-content achieve aui-margin-b-15" v-if="item.remarkType == 'tx'">
        <ul class="aui-list aui-media-list">
            <li class="aui-list-item mingxili">
                <div class="aui-media-list-item-inner">
                    <div class="aui-list-item-media wgpic">
                        <img src="../../../assets/user/yjtx.png">
                    </div>
                    <div class="aui-list-item-inner">
                        <div class="aui-list-item-text">
                            <div class="aui-list-item-title cardtitle">业绩提成</div>
                            <div class="aui-list-item-right cardtime">{{item.createTime}}</div>
                        </div>
                        <div class="aui-list-item-text cardBalance">
                            余额:&nbsp;{{item.balance}} <span :class="item.type == '-' ? 'expenditure' : ''"><i>{{item.type}}</i> {{item.amount}}</span>
                        </div>
                    </div>
                </div>
            </li>        
        </ul>
    </div> 
   </div> 
   </div>
    <div v-if="nomore" class="noMore">没有更多</div>
   <div class="loading" v-if="loadings"><mt-spinner  type="fading-circle"></mt-spinner></div>
   <h5 v-if="dataLength">暂无相关记录</h5>  
  </div>
</template>
<script>
import '../../../../static/css/aui.css'
import { InfiniteScroll } from 'mint-ui'
import 'mint-ui/lib/style.css'
export default {
  data () {
    return {
      currentView: 'businesscard',
      // 判断tab样式
      active: 0,
      moneydata: [],
      // 请求时的分类
      type: 0,
      // 令牌
      ssAuth: this.$store.state.ssAuth,
      // 分页 默认第一页
      page: 1,
      // 以下是加载更多
      dataLength: false,
      loadings: true,
      nomore: false,
      loading: true
    }
  },
  methods: {
    getData: function (e) {
      // 判断是否进行筛选 并进行数据重置
      if (e !== undefined) {
        this.active = e
        this.type = e
        this.moneydata = []
        this.page = 1
        this.dataLength = false
        this.loadings = true
      }
      // 获取数据
      this.$http.post(this.$store.state.postUrl + '/Api/Agent/cashRecord', {'ssAuth': this.ssAuth, 'type': this.type, 'page': this.page, 'pageSize': 10}, {emulateJSON: true})
      .then(function (res) {
        if (res.body.data.length > 0) {
          for (let i = 0; i < res.body.data.length; i++) {
            this.moneydata.push(res.body.data[i])
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
    }
  },
  components: {
    // 名片
    'businesscard': require('../businesscard.vue'),
    InfiniteScroll
  },
  mounted () {
    // 自动请求第一页
    this.getData(0)
  }
}
</script>
<style scoped> 
  #app div{
    margin-bottom: 0!important;
  }
/*每行*/
.mingxili{
  background-image: url(../../../assets/user/rectangle.png);
  background-size: 100% 100%;
  padding: 0.64rem;
}
.achieve{
  width: 93.3%;
  margin: 0.64rem auto 0;
}
.achieve .aui-media-list{
  background-image: none;
  background: transparent;
}
.aui-list-item .aui-media-list-item-inner{
  border: 0!important;
}
/*图片*/
.aui-list .aui-list-item-media.wgpic{
  width: 2.133rem;
  height: 2.133rem;
  padding: 0;
  margin-right: 0.384rem;
}
.cardtitle{
  margin-top: 0.113rem;
  font-size: 0.746rem;
  color: #333;
}
/*取消自带padding*/
.aui-list .aui-list-item-inner{
  padding: 0;
}
.cardBalance{
  font-size: 0.533rem;
  color: #53c7c4;
}
.cardtime{
  color: #999;
  max-width: 51%;
}
.cardBalance span{
  font-size: 0.64rem;
  color: #ff393a;
}
/*支出*/
.cardBalance .expenditure{
  color: #00c73a;
}
/*tab选中下划线*/
.orderTab .aui-tab-item.aui-active{
  border:0;
  color: #53c7c4;
}
.orderTab .aui-tab-item{
  font-size: 0.597rem;
  color: #666666;
  height: auto;
  line-height: 2.133rem;
}
.orderTab .tabBorder{
  width: 3.413rem;
  height: 0.106rem;
  background: #53c7c4;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -1.5715rem;
}
/*隐藏border*/
.yesBorder{
  display: block;
}
.noBorder{
  display: none;
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
