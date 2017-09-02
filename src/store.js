import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
Vue.use(Vuex, Vue, VueResource)
const store = new Vuex.Store({
  state: {
    postUrl: 'http://wechatapi.7618.com',
    ssAuth: '',
    pro: '省、',
    proId: 0,
    city: '市、',
    cityId: 0,
    totalMoney: '0.00', // 可用余额
    townname: '区',
    add_edit: 0,
    townId: 0, // 添加地址默认状态
    userPhone: 0, // 是否绑定手机
    gzhCode: '',
    isBankCard: '', // 是否绑定银行卡
    isAgent: '', // 是否成为代理
    ischangeBank: false, // 启动选择银行卡
    sex: 0, // 默认性别
    choseAddress: 0, // 选择收货地址状态
    addressId: -1, // 已选地址id
    ticket: '', // 公众号微信授权
    wxConfig: [], // 公众号配置信息
    shijianc: '', // 时间戳
    shijianState: 0, // 时间戳状态
    jingweidu: {'latitude': '39.9', 'longitude': '116. 3'}, // 经纬度
    openid: '', // 微信openid
    isHavePass: '', // 是否设置过密码
    comments: '' // 评论传值
  },
  mutations: {
    increment (state) {
      let newTime = Date.parse(new Date()) / 1000
      newTime = newTime - state.shijianc
      if (newTime >= 7200) {
        state.shijianState = 1
      }
    }
  }
})

export default store
