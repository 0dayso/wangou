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
    background-size: cover;
    background-position: center;
    margin-right: 0.298rem;
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
<template>
  <div id="index" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1">
<!-- 评论       -->
      <div class="comment" >
        <div class="commentZong">
          <div class="storeStart">
            <span class="allping">总体评价：</span>
            <div class="start" :class="allData.level>=1 ? 'start1' : 'start' "></div>
            <div class="start" :class="allData.level>=2 ? 'start1' : 'start' "></div>
            <div class="start" :class="allData.level>=3 ? 'start1' : 'start' "></div>
            <div class="start" :class="allData.level>=4 ? 'start1' : 'start' "></div>
            <div class="start" :class="allData.level>=5 ? 'start1' : 'start' "></div>
            <span>{{allData.level}}分</span>
            <span class="commentNum"><span>{{allData.numAll}}</span>条 评价</span>
          </div>          
        </div>
        <section class="aui-content-padded pinglunbtn">
          <div class="aui-btn aui-btn-info" @click="pings(1)">好评 {{allData.comment1}}</div>
          <div class="aui-btn aui-btn-info" @click="pings(2)">中评 {{allData.comment2}}</div>
          <div class="aui-btn aui-btn-info" @click="pings(3)">差评 {{allData.comment3}}</div>
        </section>
        <div class="storebr"></div>
        <!-- 评论详情 -->
        <section class="aui-content">
        <!-- 1111111111   -->
          <div class="aui-card-list" v-for="item in cData">
            <div class="aui-card-list-header aui-card-list-user">
                <div class="aui-card-list-user-avatar">
                    <img :src="item.userHead" class="aui-img-round">
                </div>
                <div class="aui-card-list-user-name">
                    <div class="aui-text-info">{{item.userName}}</div>
                </div>
                <div class="aui-card-list-user-info text-light">
                    <div class="storeStart">
                      <div class="start" :class="item.level>=1 ? 'start1' : 'start' "></div>
                      <div class="start" :class="item.level>=2 ? 'start1' : 'start' "></div>
                      <div class="start" :class="item.level>=3 ? 'start1' : 'start' "></div>
                      <div class="start" :class="item.level>=4 ? 'start1' : 'start' "></div>
                      <div class="start" :class="item.level>=4 ? 'start1' : 'start' "></div>
                      <span style="color:#9d9d9d">{{item.createTime}}</span>
                </div>        
                </div>
            </div>
            <div class="aui-card-list-content-padded aui-padded-t-5 aui-padded-b-5">{{item.content}}</div>
            <div class="aui-card-list-content">
                <div class="aui-row aui-row-padded">
                    <div class="aui-col-xs-4" v-for="im in item.picture">
                      <img :src="im" alt="" @click="goImg(im)">
                    </div>
                </div>
            </div>
            <div class="userping"></div>
          </div>         
        </section>        
      </div>   
      <div v-if="nomore" class="noMore"></div>
      <div class="loading" v-if="loadings"><mt-spinner  type="fading-circle"></mt-spinner></div>
      <h5 v-if="dataLength">暂无相关评论</h5>    
  </div>
</template>
<script>
import '../../../static/css/aui.css'
import { InfiniteScroll } from 'mint-ui'
import 'mint-ui/lib/style.css'
export default {
  components: {
    InfiniteScroll
  },
  data () {
    return {
      // 店铺评分
      start: 0,
      storeId: this.$route.query.storeId, // 店铺id
      page: 1, // 当前页码
      selectType: 2, // 查询类型
      selectLevel: 0, // 查询等级
      allData: [],
      cData: [],
      dataLength: false,
      loadings: true,
      nomore: false,
      loading: true
    }
  },
  computed: {
  },
  mounted () {
    this.getData()
  },
  methods: {
    pings: function (s) {
      this.selectLevel = s
      this.cData = []
      this.getData()
      this.dataLength = false
      this.loadings = true
      this.nomore = false
      this.loading = true
    },
    // 查看图片
    goImg: function (url) {
      this.$router.push({ path: '/imgcon/views?url=' + url })
    },
    getData: function () {
      this.$http.post(this.$store.state.postUrl + '/Api/Store/getStoreCommentList', {'storeId': this.storeId, 'selectType': this.selectType, 'selectLevel': this.selectLevel, 'page': this.page, 'pageSize': 5}, {emulateJSON: true})
      .then(function (res) {
        res.body.data.level = parseInt(res.body.data.level)
        this.allData = res.body.data
        if (res.body.data.commentData.length > 0) {
          for (let i = 0; i < res.body.data.commentData.length; i++) {
            this.cData.push(res.body.data.commentData[i])
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
