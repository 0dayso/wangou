<template>
<div>
   <table class="tables" border="0" cellspacing="0" cellpadding="0"  v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10" >
     <tr><th>用户信息</th><th>业绩次数</th><th>业绩产出</th></tr>
     <tr v-for="item in tableData"><td>山楂树的味道</td><td>{{item.count}}</td><td class="chanchu">{{item.money}}</td></tr>
   </table>
    <div v-if="nomore" class="noMore">没有更多</div>
   <div class="loading" v-if="loadings"><mt-spinner  type="fading-circle"></mt-spinner></div>
   <h5 v-if="dataLength">暂无相关记录</h5>
</div>
</template>
<script>
import '../../../../static/css/aui.css'
export default {
  data () {
    return {
      page: 1,
      tableData: [],
      ssAuth: this.$store.state.ssAuth,
      dataLength: false,
      loadings: true,
      nomore: false,
      type: 2,
      loading: true
    }
  },
  methods: {
    getData: function (e) {
      // 判断是否进行筛选 并进行数据重置
      if (e !== undefined) {
        this.type = e
        this.tableData = []
        this.page = 1
        this.dataLength = false
        this.loadings = true
      }
      // 获取数据
      this.$http.post(this.$store.state.postUrl + '/Api/Agent/getMyUserNew', {'ssAuth': this.ssAuth, 'showType': this.type, 'page': this.page, 'pageSize': 10}, {emulateJSON: true})
      .then(function (res) {
        console.log(res)
        if (res.body.data.length > 0) {
          for (let i = 0; i < res.body.data.length; i++) {
            this.tableData.push(res.body.data[i])
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
  }
  table tr{
    line-height: 1.2rem;
  }
  table tr th{
    font-size: 0.597rem;
    border:0;
    color: #666666!important;
    font-weight: 100;
    text-align: center;
  }
  .tables td{
    color: #333!important;
  }
  table, td, th{
    padding: 0.64rem 0;
    border:0 !important;
  }
  table tr:nth-child(odd) {  
            background-color: #fff; 
  }  
  table tr:nth-child(even) {  
   background-color: #f2f6f5; 
  }
  .tables .chanchu{
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
    width: 0.64rem;
    height: 0.64rem;
    margin: 0.64rem auto 0;
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
