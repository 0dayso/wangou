<template>
  <div>
    <div v-title data-title="查看推广">
    </div>
    <!-- 用户信息 -->
    <component :is="currentView" transition="fade" transition-mode="out-in"></component>
    <!-- table切换 -->
    <section class="aui-content tabtn aui-grid aui-margin-b-15">
        <div class="aui-row">
            <div class="aui-col-xs-6 aui-border-r everybox" v-on:click="tabclick(1)">
                <div class="tabpic" :class="active==1 ? 'userbg1' : 'userbg0'"></div>
                <div class="aui-gird-lable aui-font-size-12" :class="active==1 ? 'activecolor' : 'activecolors'" >用户详情</div>
            </div>
            <div class="aui-col-xs-6 aui-border-r everybox" v-on:click="tabclick(2)">
                <div class="tabpic" :class="active==2 ? 'yeji1' : 'yeji0'"></div>
                <div class="aui-gird-lable aui-font-size-12" :class="active==2 ? 'activecolor' : 'activecolors'">业绩详情</div>
            </div>
        </div>
    </section>
    <!-- table -->
    <component :is="tableView" transition="fade" transition-mode="out-in"></component>
  </div>
</template>
<script>
import '../../../../static/css/aui.css'
export default {
  data () {
    return {
      active: 1,
      bg: require('../../../assets/user/backuser.png'),
      msg: '成为我们公众号推广员，开启你的玩购之旅，请完善下面信息：',
      currentView: 'businesscard',
      tableView: 'des'
    }
  },
  methods: {
    tabclick: function (e) {
      if (e === 1) {
        this.active = 1
        this.tableView = 'des'
      } else if (e === 2) {
        this.active = 2
        this.tableView = 'yjdes'
      }
    }
  },
  components: {
    // 名片
    'businesscard': require('../businesscard.vue'),
    // 用户详情
    'des': require('./userdetails.vue'),
    // 业绩详情
    'yjdes': require('./achievement.vue')
  }
}
</script>

<style scoped> 
  /*tab切换按钮*/
  .tabtn{
    margin-top: 0.426rem;
  }
  /*tab按钮间距*/
  .everybox{
    padding: 0.746rem 0;
    background-image: none;
  }
  /*按钮图标*/
  .tabpic{
    width: 1.28rem;
    height: 1.3rem;
    background-size: 100%;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position:  center; 
  }
  .everybox .aui-font-size-12{
    color: #999999;
    font-size: 0.64rem;
    margin-top: 0.426rem;
  }
  /*选中颜色变化*/
  .activecolor{
    color: #53c7c4!important;
  }
  .userbg0{
    background-image: url(../../../assets/user/wguser.png);
  }
  .userbg1{
    background-image: url(../../../assets/user/wguser1.png);
  }
  .yeji1{
    background-image: url(../../../assets/user/yejilogo1.png);
  }
  .yeji0{
    background-image: url(../../../assets/user/yejilogo.png);
  }
</style>
