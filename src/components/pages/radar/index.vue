<template>
  <div class='content'>
    <box-container class='bg-grey' :spinShow='spinShow1'>
      <radar-style-1 chartId='radar1' :source='ageRangeData' />
    </box-container>
  </div>
</template>
<script>
import boxContainer from '../common/box-container'
import RadarStyle1 from '../../cell/radar/radar-style-1'
export default {
  components: {
    'box-container': boxContainer,
    'radar-style-1': RadarStyle1,
  },
  data() {
    return {
      spinShow1: true,
      ageRangeData: [],
    }
  },
  created() {
    this.$http.get('/radar/ageRangeSource')
      .then(res => {
        if (res.state && res.data) {
          this.ageRangeData = res.data
          this.spinShow1 = false
        }
      })
      .catch(err => {
        console.log(err)
        this.$fetchMock('/static/mock/radar/ageRangeSource.json')
          .then(res => {
            this.ageRangeData = res
            this.spinShow1 = false
          })
      })
  },
}
</script>
<style lang="scss" scoped>
@import './radar.scss';
</style>

