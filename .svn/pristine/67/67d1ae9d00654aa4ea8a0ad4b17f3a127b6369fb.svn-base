<template>
  <div>
    <div v-title data-title="选择省份">
  </div>
  <form>
    <div class="list"  v-for="city in projson" @click="showMessage(city.name,city.id)">
        {{city.name}} <span></span>
    </div>
  </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      projson: '',
      message: 1
    }
  },
  mounted () {
    let th = this
    this.$http.post('http://wechatapi.7618.com/index.php/Api/Position/getProvinceList', {}, {emulateJSON: true})
    .then(function (res) {
      th.projson = res.body.data
    }, function () {
    })
  },
  methods: {
    showMessage (name, id) {
      this.$store.state.pro = name
      this.$store.state.city = ''
      this.$store.state.proId = id
      this.$router.push({ path: '/address/city' })
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
