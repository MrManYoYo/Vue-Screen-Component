<template>
  <div class='funnel-container' :id='sid' />
</template>
<script>
export default {
  props: {
    sid: {
      type: String,
      default: () => 'funnel1',
    },
    source: {
      type: Array,
      default: () => {
        return [
          { 'value': 60, 'name': '访问' },
          { 'value': 40, 'name': '咨询' },
          { 'value': 20, 'name': '订单' },
          { 'value': 80, 'name': '点击' },
          { 'value': 100, 'name': '展现' },
        ]
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
      if (source.constructor === Array) {
        const sourceTemp = [...source]
        return sourceTemp.sort((a, b) => a.value - b.value)
      } else if (source.constructor === Object) {
        const seriesData = []
        Object.entries(source).forEach(([key, value]) => {
          seriesData.push({
            'value': value,
            'name': key,
          })
        })
        return seriesData.sort((a, b) => a.value - b.value)
      }
    },
    updateChart(source) {
      const data = this.initData(source)
      this.chart.setOption({
        color: ['#efbb1a', '#d77169', '#c14f60', '#953f61', '#72355f'],
        series: [{
          name: '漏斗图',
          type: 'funnel',
          x: '5%',
          y: 20,
          y2: 20,
          width: '90%',
          min: 0,
          max: 100,
          minSize: '0%',
          maxSize: '100%',
          sort: 'descending',
          gap: 0,
          data: data,
          roseType: true,
          label: {
            normal: {
              formatter: function (params) {
                return `${params.name} ${params.value}%`
              },
              position: 'center',
            },
          },
          itemStyle: {
            normal: {
              borderWidth: 0,
              shadowBlur: 30,
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        }],
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.funnel-container{
  width: 100%;
  height: 100%;
}
</style>

