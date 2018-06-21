<template>
  <div class='radar-container' :id='chartId' />
</template>
<script>
export default {
  props: {
    chartId: {
      type: String,
      default: () => 'radar1',
    },
    chartTitle: {
      type: String,
      default: () => '年龄分布',
    },
    source: {
      type: Array,
      default: () => [
        { name: '0~15岁', value: 3213 },
        { name: '16～30岁', value: 3313 },
        { name: '31～45岁', value: 3213 },
        { name: '45～60岁', value: 1213 },
        { name: '60～80岁', value: 1213 },
        { name: '80岁以上', value: 1213 },
      ],
    },
    colorDic: {
      type: Object,
      default: () => {
        return {
          textColor: '#c7e6ff',
          axisLineColor: '#085e99',
          splitLineColor: ['#085e99'],
          splitAreaColor: ['transparent', '#195884'],
          seriesLabelColor: '#c7e6ff',
          seriesLineColor: '#00c8fb',
        }
      },
    },
  },
  data() {
    return {
      chart: null,
      option: {},
    }
  },
  watch: {
    source(newVal) {
      if (this.chart === null) {
        this.initChart()
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
      const el = document.getElementById(this.chartId)
      const _chart = this.$echarts.init(el)
      return _chart
    },
    initData(source) {
      const _rst = []
      const _indicatorName = []
      const _indicatorValue = []
      let maxValue = 1000 // default max number
      if (Object.prototype.toString.call(source) === '[object Object]') {
        Object.entries(source).forEach(([key, value]) => {
          _indicatorName.push(key)
          _indicatorValue.push(value)
        })
      } else if (Object.prototype.toString.call(source) === '[object Array]') {
        source.forEach(({ name, value }) => {
          _indicatorName.push(name)
          _indicatorValue.push(value)
        })
      }
      maxValue = JSON.parse(JSON.stringify(_indicatorValue)).sort()[_indicatorValue.length - 1]
      _indicatorName.forEach(item => {
        _rst.push({
          name: item,
          max: maxValue * 1.5,
        })
      })
      return {
        indicator: _rst,
        value: _indicatorValue,
      }
    },
    updateChart(source) {
      const _this = this
      const data = this.initData(source)
      // console.log(data)
      if (data.indicator && data.indicator.length === 0) {
        return
      }
      this.option = {
        tooltip: {},
        radar: {
          name: {
            textStyle: {
              color: _this.colorDic.textColor,
            },
          },
          indicator: data.indicator,
          axisLine: {
            lineStyle: {
              color: _this.colorDic.axisLineColor,
            },
          },
          splitLine: {
            lineStyle: {
              color: _this.colorDic.splitLineColor,
            },
          },
          splitArea: {
            areaStyle: {
              color: _this.colorDic.splitAreaColor,
            },
          },
        },
        series: [{
          name: _this.chartTitle,
          type: 'radar',
          symbolSize: 0,
          label: {
            color: _this.colorDic.seriesLabelColor,
          },
          lineStyle: {
            color: _this.colorDic.seriesLineColor,
          },
          data: [
            {
              value: data.value,
              name: _this.chartTitle,
            },
          ],
        }],
      }
      this.chart.setOption(this.option)
    },
  },
}
</script>
<style lang="scss" scoped>
.radar-container{
  width: 100%;
  height: 100%;
}
</style>

