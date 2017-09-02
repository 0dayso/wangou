<template>
  <div>
    <div v-title data-title="我的充值">
    </div>
    <!-- 用户信息 -->
    <component :is="currentView" transition="fade" transition-mode="out-in"></component>
   <table border="0" cellspacing="0" cellpadding="0" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
     <tr><th>类型</th><th>金额</th><th>时间</th><th>支付方式</th></tr>
     <tr v-for="item in rechargeData"><td>{{item.appName}}</td><td>{{item.amount}}</td><td>{{item.createtime}}</td><td>{{item.payType}}</td></tr>
   </table>
   <div v-if="nomore" class="noMore">没有更多</div>
   <div class="loading" v-if="loadings"><mt-spinner  type="fading-circle"></mt-spinner></div>
   <h5 v-if="dataLength">暂无相关记录</h5>  
  </div>
</template>
<script>
import '../../../static/css/aui.css'
import { InfiniteScroll } from 'mint-ui'
import 'mint-ui/lib/style.css'
export default {
  data () {
    return {
      bg: require('../../assets/user/backuser.png'),
      msg: '成为我们公众号推广员，开启你的玩购之旅，请完善下面信息：',
      currentView: 'businesscard',
      type: 0,
      ssAuth: this.$store.state.ssAuth,
      page: 1,
      dataLength: false,
      loadings: true,
      nomore: false,
      loading: true,
      rechargeData: []
    }
  },
  methods: {
    getData: function (e) {
      // 获取数据
      this.$http.post(this.$store.state.postUrl + '/Api/Pay/payList', {'ssAuth': this.ssAuth, 'page': this.page, 'pageSize': 10}, {emulateJSON: true})
      .then(function (res) {
        console.log(res)
        if (res.body.data.length > 0) {
          for (let i = 0; i < res.body.data.length; i++) {
            this.rechargeData.push(res.body.data[i])
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
    'businesscard': require('./businesscard.vue'),
    InfiniteScroll
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>
  table{
    margin-top: 0.64rem;
    width: 100%;
    border:0;
  }
  table td{
    border:0;
    text-align: center;
    font-size: 0.64rem;
    color: #666;
  }
  table tr{
    line-height: 2.133rem;
  }
  table tr th{
    font-size: 0.597rem;
    border:0;
    color: #999999;
    font-weight: 400;
    text-align: center;
  }
  table, td, th{
    border:0 !important;
  }
  table tr:nth-child(odd) {  
            background-color: #fff; 
  }  
  table tr:nth-child(even) {  
   background-color: #f2f6f5; 
  }  
  h5{
    display: block!important;
    text-align: center;
    width: 100%;
    line-height: 5rem;
  }
  /*加载*/
  .loading{
    width: 0.64rem;
    height: 0.64rem;
    margin: 0.64rem auto 0;
    text-align: center;
  }
  /*没有更多*/
  #app .noMore{
    text-align: center;
    margin: 1rem 0 !important;
    font-size: 0.64rem;
    color: #333;
  }  
</style>
