<template>
<div>
   <div v-title data-title="评价店铺">
  </div>
  <!-- 订单号 -->
  <div class="ordernum">
    <span>订单号 <span>{{commentData.orderSn}}</span></span>
    <span class="ordertime">{{commentData.createTime}}</span>
  </div>
  <!-- 店铺信息 -->
  <section class="aui-content">
    <ul class="aui-list aui-media-list orderul">
      <div class="aui-list-item">
        <div class="aui-media-list-item-inner">
        <div class="aui-list-item-media orderpic stopBg" style="background-size: cover;background-position: center;background-repeat: no-repeat;" v-bind:style="{'background-image':'url('+commentData.storeLogo+')'}">
        </div>  
        <div class="aui-list-item-inner">
          <div class="aui-list-item-text">
            <div class="aui-list-item-title">{{commentData.storeName}}</div>
          </div>
          <div class="aui-list-item-text fu">
            {{commentData.feature}}
          </div>
        </div>
        </div>
      </div>
    </ul>
  </section>
  <!-- 输入框 -->
  <div class="inputbox">
    <textarea placeholder="写点评论吧" @input="descInput" v-model="desc" maxlength="200">      
    </textarea>
    <p>您还可以输入{{remnant}}个字</p>
  </div>
  <!-- 添加图片 -->
  <div class="addimg">
    <div class="add" v-if="app>=0"  @click="fileimg(1)">
      <img src="" id="add1" alt="" >
    </div>
    <div class="add" v-if="app>=1" @click="fileimg(2)">
    <img src="" id="add2" alt="" >
    </div>
    <div class="add"  v-if="app>=2" @click="fileimg(3)">
    <img src="" id="add3" alt="" >
    </div>
    <div class="add" v-if="app>=3" @click="fileimg(4)">
    <img src="" id="add4" alt="" >
    </div>
  </div>
    <input type="file" style="display:none"  accept="image/*"  ref="chg1" v-on:change="filepic($event)"/>
    <input type="file" style="display:none"  accept="image/*"  ref="chg2" v-on:change="filepic($event)"/>
    <input type="file" style="display:none"  accept="image/*"  ref="chg3" v-on:change="filepic($event)"/>
    <input type="file" style="display:none"  accept="image/*"  ref="chg4" v-on:change="filepic($event)"/>
  <!-- 满意度 -->
  <div class="commentZong">
  <div class="manyi">用户综合满意度</div>
    <div class="storeStart">
      <span class="startfen">综合评分</span>
      <div class="start" :class="start>=1 ? 'start1' : 'start' "></div>
      <div class="start" :class="start>=2 ? 'start1' : 'start' "></div>
      <div class="start" :class="start>=3 ? 'start1' : 'start' "></div>
      <div class="start" :class="start>=4 ? 'start1' : 'start' "></div>
      <div class="start" :class="start>=5 ? 'start1' : 'start' "></div>
    </div>          
   </div>
   <!-- 评论 -->
    <section class="aui-content aui-margin-b-10">
        <div class="aui-grid">
            <div class="aui-row">
                <div class="aui-col-xs-4" v-on:click="pingf(1)">
                    <div class="lian cha" :class="ping==1 ? 'cha1' : 'cha' "></div>
                    <div class="aui-grid-label">差评</div>
                </div>
                <div class="aui-col-xs-4" v-on:click="pingf(3)">
                    <div class="lian zhong" :class="ping==3 ? 'zhong1' : 'zhong' "></div>
                    <div class="aui-grid-label">中评</div>
                </div>
                <div class="aui-col-xs-4" v-on:click="pingf(5)">
                    <div class="lian hao" :class="ping==5 ? 'hao1' : 'hao' "></div>
                    <div class="aui-grid-label">好评</div>
                </div>
            </div>
        </div>
    </section>
    <!-- 提交 -->
    <div class="submits" @click="submits">发表评论</div>
 </div>   
</template>
<script>
import '../../../static/css/aui.css'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
    // 店铺评分
      start: 0,
      ping: 0, // 评分
      app: 0, // 上传下标
      desc: '', // 评论内容
      bg: '', // 店铺头像
      remnant: 200, // 评论限制字数
      commentData: [],
      imgData: [], // 上传图片保存
      fa: -1, // 判断是否重新上传
      ssAuth: this.$store.state.ssAuth
    }
  },
  mounted () {
    this.commentData = this.$store.state.comments
  },
  methods: {
    descInput: function () {
      var txtVal = this.desc.length
      this.remnant = 200 - txtVal
    },
    pingf: function (e) {
      this.ping = e
      this.start = e
    },
    fileimg: function (e) {
      if (e >= this.app) {
        this.app = e
        this.$refs.chg1.click()
      } else {
        this.fa = e
        this.$refs.chg1.click()
      }
    },
    filepic: function (e) {
      let th = this
      for (var i = 0; i < e.target.files.length; i++) {
        var file = e.target.files.item(i)
        if (!(/^image\/.*$/i.test(file.type))) {
          Toast('请上传图片类型')
        }
        var freader = new FileReader()
        freader.readAsDataURL(file)
        freader.onload = function (e) {
          if (th.fa !== -1) {
            document.getElementById('add' + th.fa).src = e.target.result
            th.imgData[th.fa](e.target.result.split(',')[1])
          } else {
            document.getElementById('add' + th.app).src = e.target.result
            th.imgData.push(e.target.result.split(',')[1])
          }
        }
      }
    },
    submits: function () {
      if (this.desc === '') {
        Toast('请输入评论内容')
      } else if (this.start === '') {
        Toast('请选择满意度')
      } else {
        let imgArr = JSON.stringify(this.imgData)
        let data = {
          'ssAuth': this.ssAuth,
          'orderSn': this.commentData.orderSn,
          'content': this.desc,
          'level': this.start,
          'is_anony': 0,
          'picture': imgArr
        }
        console.log(this.imgData)
        this.$http.post(this.$store.state.postUrl + '/Api/Store/commenter', data, {emulateJSON: true})
        .then(function (res) {
          console.log(res)
        })
      }
    }
  },
  components: {
  }
}
</script>
<style scoped>
/*订单号*/
.ordernum{
  padding: 0.64rem;
  font-size: 0.533rem;
  color: #333;
  background: #fff;
  border-bottom: 0.03rem solid #eee;
}
.ordernum .ordertime{
  float: right;
}
/*取消默认background*/
.orderul{
  background-image: none;
}
/*店铺图片*/
.orderpic{
  width: 3.413rem;
  box-sizing: content-box;
  height: 3.413rem;
  padding: 0;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
}
.orderul .aui-list-item-title{
  margin: 0.213rem 0;
  font-size: 0.853rem;
  color: #000;
}
.orderul .fu{
  font-size: 0.64rem;
}
.inputbox{
  width: 100%;
  background: #fff;
  margin: 0 auto;
  padding: 0.64rem;
}
.inputbox textarea{
  height: 2.5rem;
  padding: 0.3rem;
  width: 100%;
  border: 0.03rem solid #eee;
  margin: 0 auto;
  border-radius: 0.3rem;
  font-size: 0.64rem;
}
.inputbox p{
  text-align: right;
  margin-top: 0.213rem;
  font-size: 0.5rem;
}
/*晒图*/
.addimg{
  padding: 0 0.64rem;
  background: #fff;
  overflow: hidden;
  margin: 0 auto;
  padding-bottom: 0.8rem;
  border-bottom: 0.03rem solid #eee;
}
.addimg .add{
  border:0;
  width: 3.413rem;
  height: 3.413rem;
  margin-right: 0.2rem;
  background-image:url(../../assets/store/addimgs.png); 
  background-size: cover;
  float: left;
}
.add img{
  width: 100%;
  height: 100%;
}
.add:last-child{
  margin-right: 0;
}
.commentZong{
    position: relative;
    overflow: hidden;
    background: #fff;
    padding: 0.64rem;
  }
    /*小星星*/
  .storeStart{
    margin-top: 0.213rem;
    font-size: 0.64rem;
  }
  .storeStart span{
    color: #999;
    line-height: 100%;
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
  .storeStart .startfen{
    float: left;
    margin-right: 0.2rem;
    line-height: 0.8rem;
  }
  .manyi{
    font-size: 0.7rem;
  }
  .lian{
    width: 1.5rem;
    height: 1.5rem;
    margin:0 auto;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .cha{
    background-image: url(../../assets/comment/cha0.png);
  }
  .zhong{
    background-image: url(../../assets/comment/zhong0.png);
  }
  .hao{
    background-image: url(../../assets/comment/hao0.png);
  }
  .cha1{
    background-image: url(../../assets/comment/cha1.png);
  }
  .zhong1{
    background-image: url(../../assets/comment/zhong1.png);
  }
  .hao1{
    background-image: url(../../assets/comment/hao1.png);
  }
  /*店铺头像*/
  .stopBg{
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .submits{
    width: 100%;
    position: relative;
    margin-top: 0.5rem;
    bottom: 0;
    background-color: #53c7c4;
    text-align: center;
    line-height: 2.133rem;
    font-size: 0.682rem;
    color: #fff;
  }
</style>
