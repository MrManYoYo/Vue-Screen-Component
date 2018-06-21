<template>
  <div class='content'>
    <box-container class='bg-grey' :spinShow='spinShow1'>
      <line-style-1 sid='line1' :source='eventMonthsSource' />
    </box-container>
  </div>
</template>
<script>
import boxContainer from '../common/box-container'
import LineStyle1 from '../../cell/line/line-style-1'
export default {
  name: 'LinePage',
  components: {
    'box-container': boxContainer,
    'line-style-1': LineStyle1,
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
      this.$http.get('/line/eventMonthsSource')
        .then(res => {
          this.eventMonthsSource = res.data
          this.spinShow1 = false
        })
        .catch(err => {
          console.log(err)
          this.$fetchMock('/static/mock/line/eventMonthsSource.json')
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
@import './line.scss'
</style>

