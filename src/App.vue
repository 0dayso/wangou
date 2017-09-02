<style>
.aui-bar-tab{
  background-color: #000;
}
.aui-bar-tab-label{
  color: #fff;
}
#app{
  overflow: hidden;
}
#footer a{
  color: #fff;
}
.aui-bar{
  min-height: 2.56rem;
}
.footer_img{
  width: 0.981rem;
  display: block;
  margin: 0.32rem auto 0.213rem;
  height: 0.981rem;
  background-size: 100%;
  background-repeat: no-repeat;
  margin-bottom: 0.213rem;
}
.router-link-exact-active  .foortcolor{
  color: #53c7c4;
}
.aui-bar-tab-item .fhome{
  background-image: url('./assets/bottomimg/home0.png');
}
.router-link-exact-active .fhome{
  background-image: url('./assets/bottomimg/home1.png');
}
.aui-bar-tab-item .fdianpu{
  background-image: url('./assets/bottomimg/shop0.png');
}
.router-link-exact-active .fdianpu{
  background-image: url('./assets/bottomimg/shop1.png');
}
.aui-bar-tab-item .fgame{
  background-image: url('./assets/bottomimg/game0.png');
}
.router-link-exact-active .fgame{
  background-image: url('./assets/bottomimg/game1.png');
}
.aui-bar-tab-item .fshangcheng{
  background-image: url('./assets/bottomimg/shangcheng0.png');
}
.router-link-exact-active .fshangcheng{
  background-image: url('./assets/bottomimg/shangcheng1.png');
}
.aui-bar-tab-item .fmy{
  background-image: url('./assets/bottomimg/my0.png');
}
.router-link-exact-active .fmy{
  background-image: url('./assets/bottomimg/my1.png');
}
.foortcolor{
  color: #bababa;
}
#add{
    width: 100%;
    overflow: hidden;
}
.aui-bar-tab .aui-bar-tab-item{
  background: #000;
}
.aui-bar-tab{
  background-color: none;
}
.element::-webkit-scrollbar {display:none}
::-webkit-scrollbar{
  display:none;
  }   
</style>
<template>
  <div id="app">
  <!-- 加载页面 -->
  <keep-alive>
    <router-view v-wechat-title="$route.meta.title" style='margin-bottom:2.56rem;' v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
  <router-view v-wechat-title="$route.meta.title" v-if="!$route.meta.keepAlive"></router-view>
</div>
</template>
<script>
import '../static/css/aui.css'
export default {
  name: 'app',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.title()
    })
  },
  mounted () {
  }
}
</script>
