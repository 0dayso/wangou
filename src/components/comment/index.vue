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
</style>
<template>
  <div>
  <div v-title data-title="店铺评论">
  </div>
  <!-- 头部tab按钮 -->
  <div class="aui-tab orderTab" id="tab">
    <div class="aui-tab-item" :class="active==1 ? 'aui-active' : 'aui-actives'" v-on:click="tabclick(1)">全部({{alls}}) <div  class="tabBorder" :class="active==1 ? 'yesBorder' : 'noBorder'"></div></div>
    <div class="aui-tab-item" :class="active==2 ? 'aui-active' : 'aui-actives'" v-on:click="tabclick(2)">晒图({{images}})<div class="tabBorder" :class="active==2 ? 'yesBorder' : 'noBorder'"></div></div>
<!--     <div class="aui-tab-item" :class="active==3 ? 'aui-active' : 'aui-actives'" v-on:click="tabclick(3)">低分(15) <div class="tabBorder" :class="active==3 ? 'yesBorder' : 'noBorder'" ></div></div> -->
    <div class="aui-tab-item" :class="active==4 ? 'aui-active' : 'aui-actives'" v-on:click="tabclick(4)">最新 <div class="tabBorder" :class="active==4 ? 'yesBorder' : 'noBorder'" ></div></div>
  </div>
  <!-- tab表单试图 -->
  <div class="tabs">
    <component :is="currentView" transition="fade" transition-mode="out-in"></component>
  </div>
</div>
</template>
<script>
import '../../../static/css/aui.css'
export default {
  data () {
    return {
      storeId: this.$route.query.storeId, // 店铺id
      active: 1,
      currentView: 'all',
      alls: 0,
      images: 0
    }
  },
  components: {
    // 全部评论
    all: require('./all.vue'),
    // 晒图
    slide: require('./slide'),
    // 低分
    // bad: require('./bad'),
    // 最新
    newest: require('./newest')
  },
  mounted () {
    this.getData()
  },
  methods: {
    tabclick: function (e) {
      if (e === 1) {
        this.active = 1
        this.currentView = 'all'
      } else if (e === 2) {
        this.active = 2
        this.currentView = 'slide'
      } else if (e === 3) {
        this.active = 3
        this.currentView = 'bad'
      } else if (e === 4) {
        this.active = 4
        this.currentView = 'newest'
      }
    },
    getData: function () {
      this.$http.post(this.$store.state.postUrl + '/Api/Store/getStoreCommentList', {'storeId': this.storeId, 'selectType': 1, 'selectLevel': 1, 'page': 1, 'pageSize': 1}, {emulateJSON: true})
      .then(function (res) {
        this.alls = res.body.data.numAll
        this.images = res.body.data.numImg
      })
    }
  }
}
</script>
