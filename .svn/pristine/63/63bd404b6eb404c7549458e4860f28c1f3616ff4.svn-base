<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
    <div v-title data-title="个人消息">
    </div>
    <div class="aui-content aui-margin-b-15 msgbox" >
        <ul class="aui-list aui-list-in">   
            <li class="aui-list-item aui-list-item-middle" v-for='item in msgArr' v-on:click="gonews(item.msgId)">
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <span class="msgtype" :class="item.is_show==1 ? 'msoktype' : ''"><span v-if="item.is_show==0">未读</span><span v-if="item.is_show==1">已读</span></span><div class="msgTxt">{{item.title}}</div><span class="msgtime">{{item.create_time}}</span>
                </div>    
            </li>                                 
        </ul>
        <div v-if="nomore" class="noMore">没有更多</div>
        <div class="loading" v-if="loadings"><mt-spinner  type="fading-circle"></mt-spinner></div>
        <h5 v-if="dataLength">暂无系统消息</h5> 
    </div>
  </div>
</template>
<script>
import '../../../../static/css/aui.css'
import 'mint-ui/lib/style.css'
import { InfiniteScroll } from 'mint-ui'
export default {
  components: {
    InfiniteScroll
  },
  data () {
    return {
      page: 1,
      dataLength: false,
      loadings: true,
      nomore: false,
      loading: true,
      msgArr: [],
      // 令牌
      ssAuth: this.$store.state.ssAuth
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    gonews: function (id) {
      this.$router.push({ path: '/newslist/news?msytype=1&msgid=' + id })
    },
    getData: function (e) {
    // 获取家乡游戏数据
      this.$http.post(this.$store.state.postUrl + '/Api/Message/getMessageList', {'ssAuth': this.ssAuth, 'pageSize': 10, 'page': this.page, 'msgType': 2}, {emulateJSON: true})
      .then(function (res) {
        if (res.body.data.length > 0) {
          for (let i = 0; i < res.body.data.length; i++) {
            this.msgArr.push(res.body.data[i])
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
  }
}
</script>

<style scoped>
/*距离顶部*/
.msgbox{
  margin-top: 0.64rem;
}
.msgbox li{
  padding-left: 0.64rem !important;
  background-image: none !important;
  font-size: 0.64rem;
  border-bottom : 0.03rem solid #ddd!important;
}
/*消息信息*/
.msgbox ul{
  background-image: none;
}
.msgTxt{
  display: inline-block;
    float: left;
    width: 8.53rem;
    color: #666;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
/*未读*/
.msgtype{
  color: #ff3764;
}
/*已读*/
.msoktype{
  color: #999999;
}
.msgtime{
  font-size: 0.533rem;
  color: #b5b5b5;
}
.msgbox .aui-list-item-inner.aui-list-item-arrow{
  padding-right: 1.28rem;
}
.msgbox .aui-list-item-arrow:before{
  right: 0.64rem;
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
