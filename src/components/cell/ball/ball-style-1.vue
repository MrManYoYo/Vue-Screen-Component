<template>
  <div class='ball-container' :id='sid' />
</template>
<script>
export default {
  name: 'BallStyle1',
  props: {
    sid: {
      type: String,
      default: () => 'ball1',
    },
    source: {
      type: [Array, Object],
      default: () => {
        return [0.1, 0.3, 0.5, 0.8]
      },
    },
  },
  data() {
    return {
      chart: null,
    }
  },
  watch: {
    source(newVal) {
      if (this.chart === null) {
        this.chart = this.initChart()
      }
      this.updateChart(newVal)
    },
  },
  mounted() {
    this.chart = this.initChart()
    this.updateChart(this.source)
  },
  methods: {
    initChart() {
      const el = document.getElementById(this.sid)
      const _chart = this.$echarts.init(el)
      return _chart
    },
    initData(source) {
      if (Object.prototype.toString.call(source) === '[object Object]') {
        const _indicatorValue = []
        Object.entries(source).forEach((value) => {
          _indicatorValue.push(value)
          return _indicatorValue
        })
      } else if (source && Object.prototype.toString.call(source) === '[object Array]') {
        return source
      }
    },
    updateChart(source) {
      const data = this.initData(source)
      this.chart.setOption({
        series: [{
          type: 'liquidFill',
          data: data,
          radius: '80%',
        }],
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.ball-container{
  width: 100%;
  height: 100%;
}
</style>

