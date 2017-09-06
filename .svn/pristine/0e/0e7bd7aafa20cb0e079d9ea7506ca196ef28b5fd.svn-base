<style scoped>
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
/*图片*/
.photoimgs{
  height: 5rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
  <div id="shoporder" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
    <div v-title data-title="店铺相册">
    </div>
    <!-- 头部tab按钮 -->
    <div class="aui-tab orderTab" id="tab">
      <div class="aui-tab-item" :class="active==1 ? 'aui-active' : 'aui-actives'" v-on:click="tabclick(1)">店铺相册({{im1}})<div  class="tabBorder" :class="active==1 ? 'yesBorder' : 'noBorder'"></div></div>
      <div class="aui-tab-item" :class="active==2 ? 'aui-active' : 'aui-actives'" v-on:click="tabclick(2)">评论相册({{im2}})<div class="tabBorder" :class="active==2 ? 'yesBorder' : 'noBorder'"></div></div>
    </div>
    <div class="aui-content aui-margin-b-15" v-if="photoArr.length>0">
      <ul class="aui-list aui-media-list">
          <li class="aui-list-item">
              <div class="aui-list-item-inner" >
                  <div class="aui-row aui-row-padded">
                      <div class="aui-col-xs-6" v-for="item in photoArr">
                        <div class="photoimgs" v-bind:style="{'background-image':'url('+item.imgUrl+')'}" @click="goImg(item.imgUrl)"></div>
                      </div>
                  </div>
              </div>
          </li>
      </ul>
    </div>
    <div v-if="nomore" class="noMore"></div>
    <div class="loading" v-if="loadings"><mt-spinner  type="fading-circle"></mt-spinner></div>
    <h5 v-if="dataLength">暂无相关相册</h5>
</div>
</template>
<script>
import { InfiniteScroll } from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../../../static/css/aui.css'
export default {
  name: 'shoporder',
  data () {
    return {
      active: 1,
      page: 1,
      dataLength: false,
      loadings: true,
      nomore: false,
      loading: true,
      photoArr: [],
      im1: 0,
      im2: 0
    }
  },
  components: {
    InfiniteScroll
  },
  mounted () {
    this.getData()
    this.im1 = this.$route.query.img1
    this.im2 = this.$route.query.img2
  },
  methods: {
    // 查看图片
    goImg: function (url) {
      this.$router.push({ path: '/imgcon/views?url=' + url })
    },
    tabclick: function (e) {
      if (e === 1) {
        this.active = 1
      } else if (e === 2) {
        this.active = 2
      }
      this.dataLength = false
      this.loadings = true
      this.nomore = false
      this.loading = true
      this.photoArr = []
      this.getData()
    },
    getData: function (e) {
    // 获取商品数据
      this.$http.post(this.$store.state.postUrl + '/Api/Store/getStoreAlbum', {'storeId': this.$route.query.storeId, 'page': this.page, 'pageSize': 10, 'type': this.active}, {emulateJSON: true})
      .then(function (res) {
        console.log(res)
        if (res.body.data.length > 0) {
          for (let i = 0; i < res.body.data.length; i++) {
            this.photoArr.push(res.body.data[i])
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
