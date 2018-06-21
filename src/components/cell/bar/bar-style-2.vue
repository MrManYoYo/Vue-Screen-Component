<template>
  <div class='charts-wrapper' :id='chartId' />
</template>
<script>

import _lodash_sortBy from 'lodash/sortBy'
export default {
  props: {
    chartId: {
      type: String,
      default: 'horizontal-bar-charts',
    },
    source: {
      type: Array,
      default: () => [
        { des: '低保', value: 33621 },
        { des: '出生婴儿', value: 9574 },
        { des: '计生人员', value: 12541 },
        { des: '孕妇登记', value: 8574 },
        { des: '老年人', value: 35231 },
        { des: '残疾人', value: 7574 },
        { des: '未成年人', value: 21542 },
        { des: '企业退休人员', value: 6574 },
      ],
    },
    colorDic: {
      type: Object,
      default: () => {
        return {
          fillColor: ['rgba(164,24,77,0.9)', 'rgba(154,53,18,0.9)', 'rgba(156,88,14,0.9)', 'rgba(49,68,168,0.9)'],
          borderColor: ['#d92b75', '#ca5637', '#cb7729', '#425ad8'],
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
    source: function (newSource) {
      if (this.chart === null) {
        this.chart = this.initCharts()
      }
      this.updateCharts(newSource)
    },
  },
  mounted() {
    this.chart = this.initCharts()
    this.updateCharts(this.source)
  },
  methods: {
    initCharts() {
      const el = document.getElementById(this.chartId)
      const charts = this.$echarts.init(el)
      return charts
    },
    initData(source) {
      const defaultFillColor = this.colorDic.fillColor[this.colorDic.fillColor.length - 1]
      const defaultBorderColor = this.colorDic.borderColor[this.colorDic.borderColor.length - 1]
      const yAxis = []
      const data = []
      const temp = _lodash_sortBy(source, (info) => -info.value)
      temp.forEach((info, index) => {
        yAxis.unshift(info.des)
        data.unshift({
          name: info.des,
          value: info.value,
          itemStyle: {
            normal: {
              color: this.colorDic.fillColor[index] || defaultFillColor,
              borderColor: this.colorDic.borderColor[index] || defaultBorderColor,
              borderWidth: 1,
            },
          },
        })
      })
      return { yAxis, data }
    },
    updateCharts(source) {
      const data = this.initData(source)
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' },
        },
        grid: {
          top: '5%',
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          splitNumber: 8,
          // axisLabel: {
          //   color: '#00deff',
          // },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              color: '#1b357e',
              type: 'dashed',
            },
          },
          axisLabel: {
            show: false,
          },
        },
        yAxis: {
          type: 'category',
          data: data.yAxis,
          axisLabel: {
            color: '#00deff',
            formatter: this.formatLabel,
          },
          axisLine: {
            lineStyle: {
              color: '#00deff',
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [{
          type: 'bar',
          barWidth: '50%',
          data: data.data,
          label: {
            normal: {
              show: true,
              position: 'right',
              formatter: '{c}',
              color: '#00deff',
            },
          },
        }],
      }
      this.chart.setOption(this.option)
    },
    formatLabel(value) {
      let name = value
      if (value.length > 7) {
        // name = value.slice(0,7) + '...'
        name = `${value.slice(0, 7)}...`;
      }
      return name
    },
  },
}
</script>

<style scoped>
  .charts-wrapper{
    height: 100%;
    width: 100%;
  }
</style>