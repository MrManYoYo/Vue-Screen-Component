<template>
  <div class='load-container'>
    <div class='loading-cont' id='loading-cont' />
  </div>
</template>
<script>
import LoadDotClass from '../../../assets/lib/load-class-dot'
export default {
  data() {
    return {}
  },
  mounted() {
    const load = new LoadDotClass({
      el: 'loading-cont',
    })
    load.init()
  },
}
</script>
<style lang="scss" scoped>
.load-container{
  width: 100%;
  height: 100%;

  .loading-cont{
    width: 100%;
    height: 100%;
  }
}
</style>

