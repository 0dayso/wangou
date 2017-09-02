// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(require('vue-wechat-title'))
import Mint from 'mint-ui'
Vue.use(Mint)
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
if (process.BROWSER_BUILD) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/ssr')
  Vue.use(VueAwesomeSwiper)
}
/* eslint-disable no-new */
/*
设置title
*/
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})
router.beforeEach((to, from, next) => {
  /* 注册全局命令即title */
  from.meta.savedPositon = document.body.scrollTop || document.documentElement.scrollTop
  next()
})
router.afterEach((to, from) => {
  let flag = to.path.includes('detail') || from.path.includes('detail')
  let time = flag ? 0 : 80
  scroll(to, from, time)
})
function scroll (to, from, time) {
  if (to.meta.savedPositon) {
    if (to.path.includes('detail')) to.meta.savedPositon = 0
    setTimeout(() => {
      window.scrollTo(0, to.meta.savedPositon)
    }, time)
  } else {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, time)
  }
}
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
