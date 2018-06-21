<template>
  <div class='pie-container'>
    <div class='chart-container' :id='sid' />
    <div class='label-container'>
      <span v-for='item in initData(source)' :key='item.name'>{{item.name}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PieStyle3',
  props: {
    sid: {
      type: String,
      default: () => 'pie3',
    },
    source: {
      type: [Array, Object],
      default: () => {
        return {
          '受理率': '65%',
          '办理率': '85%',
          '办结率': '95%',
        }
      },
    },
    colorDic: {
      type: Object,
      default: () => {
        return {
          fillColor: [
            '#3dd4de',
            '#b697cd',
            '#a6f08f',
          ],
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
    source(newSource) {
      if (this.chart === null) {
        this.initChart()
      }
      this.updateChart(newSource)
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
      if (source && Object.prototype.toString.call(source) === '[object Object]') {
        const _rst = []
        Object.entries(source).forEach(([key, value]) => {
          _rst.push({
            name: key,
            value: this.getPercentFormat(value),
          })
        })
        return _rst
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
    getPercentFormat(str) {
      if (typeof str === 'string' && str.indexOf('%') !== -1) {
        return Number(str.replace('%', ''))
      } else if (typeof str === 'number') {
        return str
      }
    },
    getSeries(source) {
      const data = this.initData(source)
      const _series = []
      data.forEach((item, index) => {
        _series.push({
          name: `${item.value}%`,
          type: 'pie',
          radius: ['35%', '40%'],
          center: [`${16 + index * 33.8}%`, '45%'],
          hoverAnimation: false,
          label: {
            normal: {
              show: false,
            },
          },
          data: [{
            value: item.value,
            label: {
              normal: {
                show: true,
                position: 'center',
                formatter: '{d}%',
                textStyle: {
                  fontSize: '20',
                  fontWeight: 'bold',
                },
              },
            },
            itemStyle: {
              normal: {
                color: this.colorDic.fillColor[index],
                shadowBlur: 10,
                shadowColor: this.colorDic.fillColor[index],
              },
            },
          }, {
            value: 100 - item.value,
            itemStyle: {
              normal: {
                color: '#3c227b',
                shadowBlur: 10,
                shadowColor: '#3c227b',
              },
            },
          }],
        })
      })
      return _series
    },
    updateChart(source) {
      const series = this.getSeries(source)
      this.option = {
        series: series,
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
  position: relative;
  .chart-container{
    width: 100%;
    height: 100%;
  }
  .label-container{
    width: 100%;
    height: 30px;
    bottom: 15%;
    position: absolute;
    display: flex;
    & > span{
      flex: 1;
      text-align: center;
      font-size: 14px;
      color: #00deff;
    }
  }
}
</style>

