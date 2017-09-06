<template>
<div class="newsbg" :style="{height: winH + 'px'}">
  <div v-title data-title="消息详情">
  </div>
  <!-- 弹框 -->
  <div class="bomb" >
    <div class="title">
      <span><span style="display: inline-block;width: 8.5rem;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">{{msgCont.title}}</span><span class="newsTime">{{msgCont.create_time}}</span></span>
    </div>
    <div class="newsContent">
      {{msgCont.content}}
    </div>
  </div>
  <div class="cosle" v-on:click="closebtn()"></div>
</div>
</template>
<script>
let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
export default {
  data () {
    return {
      winH: h,
      ssAuth: this.$store.state.ssAuth,
      msgCont: ''
    }
  },
  mounted () {
    let msgids = this.$route.query.msgid
    let msgtype = this.$route.query.msytype
    this.$http.post(this.$store.state.postUrl + '/Api/Message/getMessageInfo', {'ssAuth': this.ssAuth, 'msgType': msgtype, 'msgId': msgids}, {emulateJSON: true})
    .then(function (res) {
      this.msgCont = res.body.data
    })
  },
  computed: {
  },
  methods: {
    closebtn: function () {
      history.go(-1)
    }
  }
}
</script>
<style scoped>
.newsbg{
  background: #49494b;
  overflow: hidden;
  margin: 0 !important;
}
.bomb{
  width: 93.3%;
  height: 20.48rem;
  background: #ffffff;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0.810rem auto 0.853rem;
  box-shadow:5px -80px 80px #f0f0f0 inset;
}
/*标题*/
.bomb .title{
  width: 100%;
  padding: 0.64rem;
  color: #fff;
  font-size: 0.746rem;
  background: #0fc9bf;
}
/*时间*/
.newsTime{
  float: right;
}
.newsContent{
  padding: 0.853rem 0.746rem;
  color: #999999;
  height: 88%;
  font-size: 0.64rem;
  text-indent:2em;
  line-height: 1.2rem;
  overflow:scroll;
  position: relative;
}
.cosle{
  width: 1.813rem;
  height: 1.813rem;
  background: url(../../assets/close.png);
  background-size: 100%;
  margin: 0  auto;
}
</style>
