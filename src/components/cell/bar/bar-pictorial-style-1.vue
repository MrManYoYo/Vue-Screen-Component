<template>
  <div class='chart-container' :id='chartId' />
</template>
<script>
import _lodash_last from 'lodash/last'
import _lodash_isArray from 'lodash/isArray'
import _lodash_isObject from 'lodash/isObject'
export default {
  props: {
    chartId: {
      type: String,
      default: () => 'pictorailBar1',
    },
    pictorailUrl: {
      type: String,
      default: () => 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC',
    },
    source: {
      type: [Array, Object],
      default: () => {
        return {
          '区域1': 100,
          '区域2': 189,
          '区域3': 79,
          '区域4': 90,
          '区域5': 120,
          '区域6': 10,
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
      let _maxVal = 0
      const _seriesData = []
      const _yAxisData = []
      if (_lodash_isArray(source)) {
        source.forEach(item => {
          _seriesData.push(item.value)
          _yAxisData.push(item.name)
        });
        _maxVal = _lodash_last(_seriesData.slice().sort((a, b) => a - b))
      } else if (_lodash_isObject(source)) {
        Object.entries(source).forEach(([key, value]) => {
          _seriesData.push(value)
          _yAxisData.push(key)
        })
        _maxVal = _lodash_last(_seriesData.slice().sort((a, b) => a - b))
      }
      return {
        max: _maxVal * 1.2,
        yAxisData: _yAxisData,
        seriesData: _seriesData,
      }
    },
    updateChart(source) {
      const _this = this
      const data = this.initData(source)
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{b0}: {c0}',
        },
        grid: {
          left: '5%',
          bottom: '5%',
          top: '5%',
          right: '15%',
          containLabel: true,
        },
        xAxis: {
          max: data.max,
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: 'category',
          inverse: true,
          axisLine: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: '#00deff',
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          data: data.yAxisData,
        },
        series: [{
          // current data
          type: 'pictorialBar',
          symbol: _this.pictorailUrl,
          symbolRepeat: 'fixed',
          symbolMargin: '5%',
          symbolClip: true,
          symbolSize: 20,
          symbolBoundingData: data.max,
          data: data.seriesData,
          z: 10,
        }, {
          // full data
          type: 'pictorialBar',
          itemStyle: {
            normal: {
              // bg bar opacity
              opacity: .2,
            },
          },
          label: {
            normal: {
              show: true,
              formatter: (params) => {
                return `${(params.value / data.max * 100).toFixed(1)} %`
              },
              position: 'right',
              offset: [10, 0],
              textStyle: {
                color: '#00deff',
              },
            },
          },
          animationDuration: 2000,
          symbolRepeat: 'fixed',
          symbolMargin: '5%',
          symbol: _this.pictorailUrl,
          symbolSize: 20,
          symbolBoundingData: data.max,
          data: data.seriesData,
          z: 5,
        }],
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.chart-container{
  width: 100%;
  height: 100%;
}
</style>

