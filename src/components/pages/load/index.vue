<template>
  <div class='content'>
    <box-container :toolsShow='false'>
      <load-style-1 />
    </box-container>
  </div>
</template>
<script>
import boxContainer from '../common/box-container'
import loadStyle1 from '../../cell/load/load-style-1'
export default {
  components: {
    'box-container': boxContainer,
    'load-style-1': loadStyle1,
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
@import './load.scss'
</style>

