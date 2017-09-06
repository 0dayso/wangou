import Vue from 'vue'

import Router from 'vue-router'

import Index from '@/components/index' // 首页

import userCenter from '@/components/usercenter' // 我的（个人中心）

import wgStore from '@/components/store' // 店铺

import wgSmatch from '@/components/match' // 比赛

import wgShopmall from '@/components/shopmall'  // 商城

import wgSetup from '@/components/center/setup' // 个人中心 --> 设置

import wgApplicant from '@/components/center/applicant' // 个人中心 --> 申请推广员

import wgRecharge from '@/components/center/recharge' // 个人中心 --> 我的充值

import wgPrize from '@/components/center/prize' // 个人中心 --> 我的奖品

import wgShoporder from '@/components/center/shoporder' // 个人中心 --> 我的店铺订单

import wgWaitfororder from '@/components/center/order/waitfororder' //  店铺订单-->待付款

import wgExension from '@/components/center/extension' // 个人中心--> 我的推广

import wgAddress from '@/components/center/address' // 购买 --> 选择收货地址

import WgManaddress from '@/components/center/manaddress' // 个人中心 --> 管理收货地址

import WgBanklist from '@/components/center/banklist' // 个人中心 -->银行卡列表

import Wgmessage from '@/components/center/message'   // 个人中心 -- > 系统消息

import Wgmodifypw from '@/components/center/password/modifypw' // 个人中心 --> 修改密码

import wgBindmobile from '@/components/center/bindmobile/bindmobile' // 个人中心 --> 绑定手机

import wgChangemobile from '@/components/center/bindmobile/changemobile' // 个人中心 --> 更换绑定手机

import wgOpinion from '@/components/center/opinion/opinion' // 个人中心-->意见反馈

import wgLogistics from '@/components/center/logistics/logistics'  //  我的奖品-->物流查询

import wgOrderdetails from '@/components/center/order/orderdetails' // 我的订单 -- 去付款  -->订单详情

import wgCheck from '@/components/center/order/check' // 待付款--> 结账买单

import wgSeeExtension from '@/components/center/extension/seeextension'  // 我的推广--> 查看推广

import wgAchievementmx from '@/components/center/extension/achievementmx'  // 我的推广 -->业绩明细

import wgWithdrawals from '@/components/withdrawals/withdrawals'  //   我的推广-->我要提现

import wgMoneyrecord from '@/components/record/moneyrecord' // 我要提现-->提现列表

import wgApendaddress from '@/components/address/apendaddress'  // 管理收货地址-->添加收货地址

import wgModifyress from '@/components/address/modifyress'  // 管理收货地址-->编辑收货地址

import wgProvince from '@/components/address/province'  // 添加收货地址--> 选择省份

import wgCity from '@/components/address/city' // 添加收货地址 --> 选择城市

import wgTown from '@/components/address/town' // 添加收货地址 --> 选择区县

import wgAddbank from '@/components/center/bank/addbank' // 银行卡列表-->添加银行卡

import wgNews from '@/components/news/news' // 消息列表--> 消息详情

import wgStoreint from '@/components/store/storeint' // 店铺-->店铺详情

import wgStorephoto from '@/components/store/storephoto' // 店铺-->店铺详情

import wgPrizeint from '@/components/prize/prizeint' // 奖品-- >奖品详情

import wgRoomcard from '@/components/purchase/roomcard' // 猫钻充值

import wgGamerech from '@/components/purchase/gamerech' // 游戏充值

import wgBuygames from '@/components/purchase/buygames' // 购买游戏币

import wgCheckout from '@/components/prize/checkout' // 店铺详情 -- >结账买单

import wgCommentindex from '@/components/comment/index' // 全部评论--> 店铺评论

import wgGocomment from '@/components/comment/gocomment' // 待评论 --> 评价店铺

import wgGame from '@/components/game' // 启动游戏

import wgViews from '@/components/imgcon/views' // 查看大图

import wgGoodsback from '@/components/callback/goodsback' // 支付完成

Vue.use(Router)
export default new Router({
  mode: 'hash',
  routes: [
/* 首页 */
    {
      path: '/',
      component: Index,
      meta: {keepAlive: true, scrollToTop: true, title: '首页'}
    },
/* 个人中心 */
    {
      path: '/center',
      component: userCenter
    },
/* 店铺 */
    {
      path: '/store',
      component: wgStore,
      meta: {keepAlive: true, scrollToTop: true, title: '店铺'}
    },
/* 比赛 */
    {
      path: '/match',
      component: wgSmatch,
      meta: {keepAlive: true, scrollToTop: true, title: '比赛'}
    },
/* 商城 */
    {
      path: '/shopmall',
      component: wgShopmall,
      meta: {keepAlive: true, scrollToTop: true, title: '商城'}
    },
/* 个人中心-->设置 */
    {
      path: '/setup',
      component: wgSetup
    },
/* 个人中心-->我的充值 */
    {
      path: '/recharge',
      component: wgRecharge
    },
/* 个人中心-->申请推广员 */
    {
      path: '/applicant',
      component: wgApplicant
    },
/* 个人中心-->我的奖品 */
    {
      path: '/prize',
      component: wgPrize
    },
/* 个人中心-->我的店铺订单 */
    {
      path: '/shoporder',
      component: wgShoporder
    },
/* 个人中心-->店铺订单 -->待付款 */
    {
      path: '/waitfororder',
      component: wgWaitfororder
    },
/* 个人中心-->我的推广 */
    {
      path: '/exension',
      component: wgExension
    },
/* 购买--> 选择收货地址 */
    {
      path: '/address',
      component: wgAddress
    },
/* 个人中心--> 管理收货地址 */
    {
      path: '/manaddress',
      component: WgManaddress
    },
/* 个人中心--> 修改收货地址 */
    {
      path: '/modifyress',
      component: wgModifyress
    },
/* 个人中心 --> 银行卡列表 */
    {
      path: '/banklist',
      component: WgBanklist
    },
/*  个人中心 -- > 系统消息 */
    {
      path: '/message',
      component: Wgmessage,
      meta: {keepAlive: true, scrollToTop: true, title: '系统消息'}
    },
/*  个人中心 -- > 修改密码  */
    {
      path: '/modifypw',
      component: Wgmodifypw
    },
/*  个人中心-->  绑定手机 */
    {
      path: '/bindmobile',
      component: wgBindmobile
    },
/*  个人中心-->  更换绑定手机 */
    {
      path: '/changemobile',
      component: wgChangemobile
    },
/* 设置--》>意见反馈 */
    {
      path: '/opinion',
      component: wgOpinion
    },
/* 我的奖品 --> 物流查询 */
    {
      path: '/logistics',
      component: wgLogistics
    },
/* 消费 --> 结账买单 */
    {
      path: '/check',
      component: wgCheck
    },
/* 去付款 --> 订单详情 */
    {
      path: '/frontend/orderdetails',
      component: wgOrderdetails
    },
/*  我的推广-- > 查看推广  */
    {
      path: '/seeextension',
      component: wgSeeExtension
    },
/*   我的推广--> 业绩明细   */
    {
      path: '/achievementmx',
      component: wgAchievementmx
    },
/*  个人中心--> 我要提现 */
    {
      path: '/withdrawals',
      component: wgWithdrawals
    },
/*   我要提现--> 提现列表 */
    {
      path: '/moneyrecord',
      component: wgMoneyrecord
    },
/*   管理收货地址--> 添加收货地址 */
    {
      path: '/apendaddress',
      component: wgApendaddress
    },
/*   省份   */
    {
      path: '/address/province',
      component: wgProvince
    },
/*  城市  */
    {
      path: '/address/city',
      component: wgCity
    },
/*  区县  */
    {
      path: '/address/town',
      component: wgTown
    },
/* 银行卡列表-->添加银行卡 */
    {
      path: '/addbank',
      component: wgAddbank
    },
/* 消息列表-->消息详情 */
    {
      path: '/newslist/news',
      component: wgNews
    },
/* 店铺-->店铺详情  */
    {
      path: '/store/stroeint',
      component: wgStoreint
    },
/* 店铺-->相册详情  */
    {
      path: '/store/storephoto',
      component: wgStorephoto
    },
/* 奖品--> 奖品详情 */
    {
      path: '/prize/prizeint',
      component: wgPrizeint
    },
    // 房卡充值
    {
      path: '/frontend/roomcard',
      component: wgRoomcard
    },
    // 游戏币充值
    {
      path: '/gamerech',
      component: wgGamerech
    },
    // 游戏币购买
    {
      path: '/buygames',
      component: wgBuygames
    },
    //  店铺详情 --> 买单
    {
      path: '/checkout',
      component: wgCheckout
    },
    // 全部评论-->店铺评论
    {
      path: '/comment/index',
      component: wgCommentindex
    },
    // 待评论 -- > 评论
    {
      path: '/comment/goocomment',
      component: wgGocomment
    },
    // 启动游戏
    {
      path: '/game',
      component: wgGame
    },
    // 查看图片
    {
      path: '/imgcon/views',
      component: wgViews
    },
    // 支付完
    {
      path: '/goods/goodsback',
      component: wgGoodsback
    }
  ]
})
/* 全局注册底部footer */
Vue.component('componentName', {template: '<footer class="aui-bar aui-bar-tab" id="footer"><router-link to="/" class="aui-bar-tab-item" tapmode><i class="footer_img fhome"></i><div class="aui-bar-tab-label foortcolor">首页</div></router-link><router-link to="/store" class="aui-bar-tab-item" tapmode><i class="footer_img fdianpu"></i><div class="aui-bar-tab-label foortcolor">店铺</div></router-link><router-link to="/match" class="aui-bar-tab-item" tapmode><i class="footer_img fgame"></i><div class="aui-bar-tab-label foortcolor">比赛</div></router-link><router-link to="/shopmall" class="aui-bar-tab-item" tapmode><i class="footer_img fshangcheng"></i><div class="aui-bar-tab-label foortcolor">商城</div></router-link><router-link to="/center"  class="aui-bar-tab-item" tapmode><i class="footer_img fmy"></i><div class="aui-bar-tab-label foortcolor">我的</div></router-link></footer>'})
