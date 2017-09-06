<style scoped>
/*用户资料卡片样式 start*/
.aui-content{
  overflow-x:initial;
}
  .aui-content-padded{
    height: 4.266rem;
    background-color: #ddd;
    margin: 0;
    overflow: hidden;
  }
  .userBg{
    background-size: cover; 
  }
  .aui-card-list-user-avatar{
    width: 2.133rem;
    height: 2.133rem;
    margin-left: 0.64rem;
    position: relative;
  }
  .aui-card-list-user-avatar img{
    width: 100%;
    height: 100%;
  }
  .set{
    width: 0.854rem;
    height: 0.854rem;
    background: url(../../assets/user/setting.png);
    background-size: cover;
    position: absolute;
    right: 0.64rem;
    top: 0.64rem;
  }
  .aui-content-padded .aui-content{
    margin-top: 1.173rem;
  }
  .aui-list-item-title{
    color: #333;
    font-size:0.746rem !important;
    margin-top: 0.1065rem;
    display: inline-block;
    float: left;
  }
  .userid{
    font-size: 0.64rem;
    color: #9d9d9d;
    line-height: 0;
    line-height: 0.512rem;
    margin-top: 0.22rem;
  }
  .userdengji{
    width: 0.768rem;
    height: 0.768rem;
    background: url(../../assets/user/vip2.png);
    background-size: cover;
    float: left;
    margin:0.2rem 0.32rem 0 0.32rem;
    border-radius: 100%;
  }
  .username{
    overflow: hidden;
  }
  .userType{
    font-size:0.64rem !important;
    margin-top: 0.32rem;
    line-height: 100%;
    color: #0fc9c0;
  }
  .apply{
    background-image: url(../../assets/user/tuiguangyuan.png);
    background-size: 2.56rem 0.96rem;
    position: absolute;
    right: 0.64rem;
    width: 2.56rem;
    height: 0.96rem;
    top: 2.24rem;
  }
  /*成为推广员*/
  .agent{
    width: 2rem;
    height: 0.8rem;
    background-image: url(../../assets/user/tuiguang1.png);
    background-size: 100%;
    position: absolute;
    bottom: -0.4rem;
    background-repeat: no-repeat;
    left: 50%;
    margin-left: -1rem;
  }
  /*用户资料卡片样式 end*/
  </style>
  <template>
  <div>
    <!-- 用户信息 -->
   <section class="aui-content-padded userBg" :style="{backgroundImage: 'url(' +bg + ')'}">
          <!-- 用户资料 -->
          <section id="user" class="aui-content">
              <div class="aui-card-list-user-avatar">
                 <img v-bind:src="wgpic" class="aui-img-round">
                 <div class="agent" v-if="isAgent == 1"></div>
              </div> 
              <div class="aui-list-item-inner">
                    <div class="aui-list-item-text username">
                      <div class="aui-list-item-title aui-font-size-14">{{wgname}}</div>
                      <div class="userdengji"></div>
                      <div class="userType"><span v-if="userPhone != 0">已绑定</span><span v-if="userPhone == 0" style="color:#666;">未绑定</span></div>
                    </div>
                     <div class="userid">
                              玩购ID:{{wguserid}}
                     </div>
              </div>
              <!-- 申请推广员 -->
              <router-link to='/applicant' class="apply" v-if="isAgent == 0">
                
              </router-link>
          </section>
          <!-- 设置 -->
          <router-link to='/setup'  class="set">
          </router-link>
   </section>
  </div>
</template>
<script>
import '../../../static/css/aui.css'
import TypeButton from '../TypeButton.vue'
import BaseButton from '../BaseButton.vue'
export default {
  data () {
    return {
      bg: require('../../assets/user/backuser.png'),
      wgpic: require('../../assets/user/user.png'),
      wguserid: '未获取信息',
      wgname: '未获取信息',
      isAgent: this.$store.state.isAgent, // 是否成为代理
      userPhone: this.$store.state.userPhone // 是否绑定手机
    }
  },
  methods: {
  },
  mounted () {
    let wgid = sessionStorage.getItem('wgUserid')
    let wgname = sessionStorage.getItem('wgName')
    let wgpics = sessionStorage.getItem('wgPic')
    if (wgname !== 'null') {
      this.wgname = wgname
      this.wguserid = wgid
    }
    if (wgpics.length > 50) {
      this.wgpic = wgpics
    }
  },
  components: {
    TypeButton,
    BaseButton
  }
}
</script>
