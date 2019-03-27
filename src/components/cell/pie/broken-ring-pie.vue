<template>
  <div :id='chartId' :ref='chartId' />
</template>

<script>
export default {
  props: {
    chartId: {
      type: String,
      default: 'brokenRingPie',
    },
    source: {
      type: [Array, Object],
      default: () => [
        { name: 'item1', value: 20 },
        { name: 'item2', value: 20 },
        { name: 'item3', value: 20 },
        { name: 'item4', value: 20 },
        { name: 'item5', value: 20 },
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
        return this.$Message.error('Ring-Pie chart init failed')
      }
      this.chart = this.$echarts.init(this.$refs[this.chartId])
    },
    updateChart(source) {
      const _this = this;
      !this.chart && this.initChart()
      this.chart.setOption({
        series: [{
          type: 'pie',
          radius: ['80%', '82%'],
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
      const pieColor1 = {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#37a0ff',
            },
            {
              offset: 1,
              color: '#60c2fe',
            },
          ],
        },
        emptyColor = {
          normal: {
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0,
          },
        }
      if (Object.prototype.toString.call(data) !== '[object Array]') {
        return this.$Message.error('Incorrect data format')
      }
      const _data = data.map(({ name, value }) => ({
        name,
        value,
        itemStyle: {
          normal: {
            borderWidth: 5,
            shadowBlur: 30,
            borderColor: pieColor1,
            shadowColor: 'rgba(142, 152, 241, 0.6)',
          },
        },
      }))
      const rst = []
      _data.forEach(item => {
        rst.push(item, {
          value: 5,
          itemStyle: emptyColor,
        })
      })
      return rst
    },
  },
}
</script>
<style lang='scss' scoped>
</style>