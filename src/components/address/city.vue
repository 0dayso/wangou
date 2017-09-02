<template>
  <div>
    <div v-title data-title="选择城市">
  </div>
  <form>
    <div class="list"  v-for="city in cityjson" @click="showMessage(city.id,city.name)">
        {{city.name}} <span></span>
    </div>
  </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cityjson: '',
      message: 1
    }
  },
  mounted () {
    let th = this
    this.$http.post(this.$store.state.postUrl + '/index.php/Api/Position/getCityList', {provinceId: this.$store.state.proId}, {emulateJSON: true})
    .then(function (res) {
      console.log(res)
      th.cityjson = res.body.data
    }, function () {
    })
  },
  methods: {
    showMessage (id, name) {
      this.$store.state.cityId = id
      this.$store.state.city = name
      this.$store.state.townname = ''
      this.$store.state.add_edit = 0
      this.$router.push({ path: '/address/town' })
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
