<style scoped>
    .aaaa{
      width: 100%;
      background: #000;
    }
    .m-img-view img{
      margin-top: 2.5rem;
      width: 100%;
      display: inline-block;
      position: absolute;
    }
</style>
<template>
    <div class="m-img-view aaaa" :style="{'height':hs + 'px'}" @click="eClick">
        <img :src="items" alt="">
    </div>
</template>
<script>
export default {
  data () {
    return {
      items: this.$route.query.url,
      hs: 0
    }
  },
  mounted () {
    this.hs = window.screen.height
  }
}
</script>
