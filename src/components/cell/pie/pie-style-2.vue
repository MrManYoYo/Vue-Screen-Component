<template>
  <div class='pie-container' :id='sid' />
</template>
<script>
export default {
  name: 'PieStyle2',
  props: {
    sid: {
      type: String,
      default: () => 'pie2',
    },
    source: {
      type: [Array, Object],
      default: () => [
        { name: '刑满释放人员', value: 3445 },
        { name: '社区矫正人员', value: 3313 },
        { name: '重点青少年', value: 3213 },
        { name: '吸毒人员', value: 1213 },
        { name: '艾滋病危险人员', value: 1213 },
      ],
    },
    colorDic: {
      type: Object,
      default: () => {
        return {
          fillColor: [
            '#a51650',
            '#a8208b',
            '#772cbc',
            '#2650b7',
            '#1574b3',
            '#158f85',
            '#b33355',
          ],
        }
      },
    },
    title: {
      type: String,
      default: '关怀对象',
    },
    hasLegend: {
      type: Boolean,
      default: false,
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
      return source
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
      const data = this.initData(source)
      const legend = []
      const _colorDicLen = 7
      const _fixedNum = 2
      data.forEach(ele => legend.push({ name: ele.name }))
      let postion = ['50%', '50%']
      let radius = {
        outside: ['40%', '60%'],
        inner: ['34%', '35%'],
      }
      const options = {}
      if (this.hasLegend) {
        options['legend'] = {
          type: 'scroll',
          show: true,
          bottom: 0,
          data: legend,
          textStyle: {
            color: '#fff',
          },
          pageIconColor: '#fff',
          pageIconInactiveColor: '#0051ff',
          pageTextStyle: {
            color: '#fff',
          },
          left: '20',
          right: '20',
        }
        postion = ['50%', '50%']
        radius = {
          outside: ['40%', '60%'],
          inner: ['34%', '35%'],
        }
      }
      this.option = Object.assign({}, options, {
        tooltip: {
          formatter: '{b}: {c} ( {d}% )',
        },
        series: [
          {
            type: 'pie',
            zlevel: 1,
            avoidLabelOverlap: true,
            minAngle: 30,
            radius: radius.outside,
            center: postion,
            data: data,
            itemStyle: {
              normal: {
                color: params => this.colorDic.fillColor[params.dataIndex % _colorDicLen],
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
            label: {
              normal: {
                formatter: params =>
                  [
                    `{a|${this.getTextFormat(
                      params.data.name
                    )}} {b|${params.percent.toFixed(_fixedNum)}%}`,
                  ].join('\n'),
                rich: {
                  a: {
                    color: '#00deff',
                    lineHeight: 14,
                    fontSize: 14,
                  },
                  b: {
                    color: '#dbe225',
                    lineHeight: 12,
                    fontSize: 12,
                  },
                },
              },
            },
          },
          {
            type: 'pie',
            zlevel: 2,
            hoverAnimation: false,
            selectedMode: 'single',
            radius: radius.inner,
            center: postion,
            label: {
              normal: {
                show: true,
                position: 'center',
                formatter: this.title,
                textStyle: {
                  fontSize: '18',
                  fontWeight: 'bold',
                  color: '#00deff',
                },
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                color: '#818181',
              },
            },
            data: [{ value: 1, name: '' }],
          },
        ],
      })
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

