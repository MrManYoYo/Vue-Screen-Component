<template>
  <div class='pie-container' :id='sid' />
</template>
<script>
export default {
  name: 'PieStyle1',
  props: {
    sid: {
      type: String,
      default: () => 'pie1',
    },
    source: {
      type: [Array, Object],
      default: () => [
        { name: '重点青少年', value: 6213 },
        { name: '艾滋病危险人员', value: 3313 },
        { name: '吸毒人员', value: 3213 },
        { name: '刑满释放人员', value: 1213 },
        { name: '社区矫正人员', value: 1213 },
      ],
    },
    radiusDic: {
      type: Object,
      default: () => {
        return {
          outside: ['25%', '70%'],
          center: ['25%', '35%'],
          inner: ['0%', '26%'],
        }
      },
    },
    colorDic: {
      type: Object,
      default: () => {
        return {
          fillColor: ['#a51650', '#a8208b', '#772cbc', '#2650b7', '#1574b3', '#158f85', '#b33355'],
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
  created() {
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
        const _rst = []
        Object.entries(source).forEach(([key, value]) => {
          _rst.push({
            name: key,
            value: value,
          })
        })
        return _rst
      } else if (Object.prototype.toString.call(source) === '[object Array]') {
        return source
      }
    },
    getTextFormat(str) {
      const startIndex = 0
      const maxStrLen = 8
      if (str.length > maxStrLen) {
        return `${str.slice(startIndex, maxStrLen)}...`
      }
      return str
    },
    updateChart(source) {
      const _this = this
      const data = this.initData(source)
      this.option = {
        series: [{
          type: 'pie',
          zlevel: 1,
          radius: _this.radiusDic.outside,
          center: ['50%', '50%'],
          data: data,
          itemStyle: {
            normal: {
              color: (params) => this.colorDic.fillColor[params.dataIndex % Number('7')],
              borderColor: '#000',
              borderWidth: 4,
            },
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          label: {
            normal: {
              formatter: (params) => [
                `{a|${this.getTextFormat(params.data.name)}}`,
                `{b|${params.data.value.toLocaleString()}}{b|( ${Math.round(params.percent)}% )}`,
              ].join('\n'),
              rich: {
                a: {
                  color: '#00deff',
                  lineHeight: 25,
                  fontSize: 14,
                },
                b: {
                  color: '#f8bc39',
                  lineHeight: 20,
                  fontSize: 12,
                },
              },
            },
          },
        }, {
          type: 'pie',
          zlevel: 2,
          hoverAnimation: false,
          selectedMode: 'single',
          radius: _this.radiusDic.center,
          label: {
            normal: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              color: 'rgba(20,19,23,.4)',
            },
          },
          data: [
            { value: 1, name: '', color: '#000' },
          ],
        }, {
          type: 'pie',
          zlevel: 2,
          hoverAnimation: false,
          selectedMode: 'single',
          radius: _this.radiusDic.inner,
          label: {
            show: false,
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              color: '#171029',
              opacity: 0.7,
            },
          },
          data: [{ value: 1, name: '' }],
        }],
      }
      this.chart.setOption(this.option)
    },
  },
}
</script>
<style lang='scss' scoped>
.pie-container{
  width: 100%;
  height: 100%;
}
</style>
