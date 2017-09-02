<template>
  <div>
    <div v-title data-title="选择地区">
  </div>
  <form>
    <div class="list"  v-for="town in townjson" @click="showMessage(town.id,town.name)">
        {{town.name}} <span></span>
    </div>
  </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      townjson: '',
      message: 1
    }
  },
  mounted () {
    let th = this
    this.$http.post('http://wechatapi.7618.com/index.php/Api/Position/getAreaList', {cityId: this.$store.state.cityId}, {emulateJSON: true})
    .then(function (res) {
      if (res.body.length === 0) {
        this.$router.push({ path: '/apendaddress' })
      }
      th.townjson = res.body.data
    }, function () {
    })
  },
  methods: {
    showMessage (id, name) {
      this.$store.state.townId = id
      this.$store.state.townname = name
      window.history.go(-3)
    }
  },
  deactivated () {
    this.$destroy(true)
  }
}
</script>
<style scoped>
.list{
  padding: 0.64rem;
  width: 100%;
  overflow: hidden;
  background: #ffffff;
  position: relative;
  border-bottom: 0.03rem solid #dddddd;
  font-size: 0.64rem;
  color: #333;
}
.list span{
    display: none;
}
</style>
