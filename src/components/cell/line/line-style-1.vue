<template>
  <div class='line-container' :id='sid' />
</template>
<script>
export default {
  name: 'LineStyle1',
  props: {
    sid: {
      type: String,
      default: () => 'line1',
    },
    source: {
      type: [Array, Object],
      default: () => {
        return {
          '2016/12': 8000,
          '2017/1': 10000,
          '2017/2': 9000,
          '2017/3': 11000,
          '2017/4': 8000,
          '2017/5': 12000,
        }
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
      if (source && Object.prototype.toString.call(source) === '[object Object]') {
        const _xAxisData = []
        const _seriesData = []
        Object.entries(source).forEach(([key, value]) => {
          _xAxisData.push(key)
          _seriesData.push(value)
        })
        return {
          xAxis: _xAxisData,
          seriesData: _seriesData,
        }
      } else if (source && Object.prototype.toString.call(source) === '[object Array]') {
        const _xAxisData = []
        const _seriesData = []
        source.forEach(item => {
          _xAxisData.push(Object.keys(item)[0])
          _seriesData.push(Object.values(item)[0])
        })
        return {
          xAxis: _xAxisData,
          seriesData: _seriesData,
        }
      }
    },
    updateChart(source) {
      const data = this.initData(source)
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            label: {
              backgroundColor: 'rgba(14,25,69,.9)',
              borderColor: '#2a92ce',
              borderWidth: 3,
            },
            lineStyle: {
              color: '#0e9ac2',
            },
          },
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          top: '10%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: data.xAxis,
          axisLabel: {
            color: '#00deff',
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
        yAxis: [{
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#00deff',
            },
          },
          splitLine: {
            lineStyle: {
              color: '#1b357e',
              type: 'dashed',
            },
          },
          axisLabel: {
            color: '#00deff',
          },
          axisTick: {
            show: false,
          },
        }],
        series: [{
          type: 'line',
          stack: '总量',
          smooth: true,
          showSymbol: false,
          label: {
            normal: {
              show: false,
              position: 'top',
            },
          },
          lineStyle: {
            normal: {
              color: '#34cbf6',
            },
          },
          areaStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#082fa2', // 0% 处的颜色
                }, {
                  offset: .5, color: 'rgba(8,47,162,.3)',
                }, {
                  offset: 1, color: 'transparent', // 100% 处的颜色
                }],
                globalCoord: false, // 缺省为 false
              },
            },
          },
          itemStyle: {
            normal: {
              color: '#34cbf6',
              borderWidth: 1,
            },
          },
          data: data.seriesData,
        }],
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.line-container{
  width: 100%;
  height: 100%;
}
</style>

