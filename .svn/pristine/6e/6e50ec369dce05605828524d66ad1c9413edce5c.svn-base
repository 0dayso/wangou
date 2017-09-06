<template>
<div>
    <div v-title data-title="提现列表">
    </div>
    <!-- 用户信息 -->
    <component :is="currentView" transition="fade" transition-mode="out-in"></component>
     <table class="tables" border="0" cellspacing="0" cellpadding="0" v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
     <tr><th>提现金额</th><th>提现时间</th><th>审核状态</th></tr>
     <tr v-for="item in moneydata"><td>{{item.amount}}</td><td><span class="createtime">{{item.createTime}}</span></td><td :class="active==item.status ? 'examineing' : 'notexamine'"><span v-if="item.status==0">审核中</span><span v-if="item.status==1">成功</span><span v-if="item.status==2">未通过</span></td></tr>

   </table>
   <div v-if="!loadings" class="noMore">没有更多</div>
   <div class="loading" v-if="loadings"><mt-spinner  type="fading-circle"></mt-spinner></div>
   <h5 v-if="dataLength">暂无提现记录</h5>
</div>
</template>
<script>
import '../../../static/css/aui.css'
import { InfiniteScroll } from 'mint-ui'
import 'mint-ui/lib/style.css'
export default {
  data () {
    return {
      currentView: 'businesscard',
      // tab样式判断
      active: 0,
      // 令牌
      ssAuth: this.$store.state.ssAuth,
      // 初始数据为空
      moneydata: [],
      // 当前分页
      page: 1,
      dataLength: false,
      loadings: true,
      nomore: false,
      loading: true
    }
  },
  methods: {
    getdata: function () {
      this.$http.post(this.$store.state.postUrl + '/Api/Agent/withdrawList', {'ssAuth': this.ssAuth, 'page': this.page, 'pageSize': 10}, {emulateJSON: true})
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
        this.getdata()
      }, 2500)
    }
  },
  components: {
    // 名片
    'businesscard': require('../center/businesscard.vue'),
    InfiniteScroll
  },
  mounted () {
    this.loadMore()
  }
}
</script>

<style scoped>
  #app div{
    margin-bottom: 0!important;
  }
  table{
    margin-top: 0.64rem;
    width: 100%;
    border:0;
  }
  table td{
    border:0;
    text-align: center;
    font-size: 0.64rem;
  }
  table tr{
    line-height: 1.2rem;
  }
  table tr th{
    font-size: 0.597rem;
    border:0;
    color: #999!important;
    font-weight: 100;
    text-align: center;
  }
  .tables td{
    color: #666!important;
  }
  .tables tr td:first-child{
    color: #333!important;
  }
  table, td, th{
    padding: 0.64rem 0 0;
    border:0 !important;
  }
  table tr:nth-child(odd) {  
            background-color: #fff; 
  }  
  table tr:nth-child(even) {  
   background-color: #f2f6f5; 
  }
  /*时间换行*/
  .createtime{
    width: 3rem;
    display: inline-block;
  }
  /*审核中颜色*/
  .tables .examineing{
    color: #4fcf78!important;
  }
  /*未通过*/
  .tables .notexamine{
    color: #fc474b!important;
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
