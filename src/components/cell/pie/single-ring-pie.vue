<template>
  <div :id='chartId' :ref='chartId' />
</template>

<script>
export default {
  props: {
    chartId: {
      type: String,
      default: 'singleRingPie',
    },
    source: {
      type: [Array, Object],
      default: () => [
        { name: 'done', value: 50 },
        { name: 'todo', value: 50 },
      ],
    },
  },
  data() {
    return {
      chart: null,
    }
  },
  mounted() {
    this.initChart()
    this.updateChart(this.source)
  },
  methods: {
    initChart() {
      if (!this.chartId) {
        return this.$Message.error('Single-Ring-Pie chart init failed')
      }
      this.chart = this.$echarts.init(this.$refs[this.chartId])
    },
    updateChart(source) {
      const _this = this;
      !this.chart && this.initChart()
      this.chart.setOption({
        series: [{
          type: 'pie',
          radius: ['88%', '90%'],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: { show: false },
              labelLine: { show: false },
            },
          },
          data: _this.formatData(source),
        }],
      })
    },
    formatData(data) {
      if (Object.prototype.toString.call(data) !== '[object Array]') {
        return this.$Message.error('Incorrect data format')
      }
      const pieColor1 = {
          normal: {
            color: '#b697cd',
            borderWidth: 5,
            shadowBlur: 20,
            borderColor: '#b697cd',
            shadowColor: '#b697cd',
            label: { show: false },
            labelLine: { show: false },
          },
        },
        placeholderStyle = {
          normal: {
            color: 'rgba(44,59,70,1)',
            label: { show: false },
            labelLine: { show: false },
          },
        }
      return data.map(({ name, value }, idx) => ({
        name,
        value,
        itemStyle: idx % 2 ? pieColor1 : placeholderStyle,
      }))
    },
  },
}
</script>

<style lang='scss' scoped>
</style>