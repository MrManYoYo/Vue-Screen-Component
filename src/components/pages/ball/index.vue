<template>
  <div class='content'>
    <div class='show-item bg-black'>
      <ball-style-1 sid='ball1' :source='eventMonthsSource' />
      <Spin size='large' fix v-if='spinShow1' />
    </div>
  </div>
</template>
<script>
import BallStyle1 from '../../cell/ball/ball-style-1'
export default {
  components: {
    'ball-style-1': BallStyle1,
  },
  data() {
    return {
      eventMonthsSource: [],
      spinShow1: true,
    }
  },
  mounted() {
    this.fetchEventMonths()
  },
  methods: {
    fetchEventMonths() {
      this.$http.get('/ball/eventMonthsSource')
        .then(res => {
          this.eventMonthsSource = res.data
          this.spinShow1 = false
        })
        .catch(err => {
          console.log(err)
          this.$fetchMock('/static/mock/ball/eventMonthsSource.json')
            .then(res => {
              this.eventMonthsSource = res
              this.spinShow1 = false
            })
        })
    },
  },
}
</script>
<style lang="scss" scoped>
  @import './ball.scss'
</style>

