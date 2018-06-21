<template>
  <div class='chart-container' :id='chartId' />
</template>
<script>
export default {
  props: {
    chartId: {
      type: String,
      default: 'chart',
    },
    source: {
      type: Array,
      default: () => [
        { name: '北京', data1: 100, data2: 10 },
        { name: '上海', data1: 120, data2: 30 },
        { name: '广州', data1: 100, data2: 50 },
        { name: '深圳', data1: 80, data2: 20 },
        { name: '杭州', data1: 150, data2: 40 },
      ],
    },
    colors: {
      type: Array,
      default: () => ['cyan', 'yellowgreen'],
    },
    categorys: {
      type: Array,
      default: () => ['帅哥', '美女'],
    },
  },
  data() {
    return {
      chart: null,
    }
  },
  watch: {
    source: function (newSource) {
      if (this.chart === null) {
        this.chart = this.initCharts()
      }
      this.updatedCharts(newSource)
    },
  },
  mounted() {
    this.chart = this.initCharts()
    this.updatedCharts(this.source)
  },
  methods: {
    initCharts() {
      const el = document.getElementById(this.chartId);
      const charts = this.$echarts.init(el);
      return charts;
    },
    initData(source) {
      const name = [];
      const data1 = [];
      const data2 = [];
      source.forEach(e => {
        name.push(e.name);
        data1.push(e.data1);
        data2.push(e.data2);
      });
      return { name, data1, data2 }
    },
    updatedCharts(source) {
      const info = this.initData(source);
      this.chart.setOption({
        legend: {
          data: this.categorys,
          top: 4,
          right: '5%',
          textStyle: {
            color: '#fff',
          },
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          formatter: '{a}: {c}',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: [{
          show: false,
          left: '4%',
          top: 40,
          bottom: 0,
          containLabel: true,
          width: '41%',
        },
        {
          show: false,
          left: '55%',
          top: 40,
          bottom: 20,
          width: '0%',
        },
        {
          show: false,
          right: '4%',
          top: 40,
          bottom: 0,
          containLabel: true,
          width: '41%',
        },
        ],
        xAxis: [
          {
            type: 'value',
            inverse: true,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            position: 'bottom',
            axisLabel: {
              show: true,
              textStyle: {
                color: '#B2B2B2',
                fontSize: 12,
              },
            },
            splitLine: {
              show: false,
            },
          },
          {
            gridIndex: 1,
            show: false,
            position: 'bottom',
          },
          {
            gridIndex: 2,
            type: 'value',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            position: 'bottom',
            axisLabel: {
              show: true,
              textStyle: {
                color: '#B2B2B2',
                fontSize: 12,
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
              margin: 8,
              textStyle: {
                color: '#9D9EA0',
                fontSize: 12,
              },
            },
            data: info.data1,
          },
          {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#9D9EA0',
                fontSize: 12,
              },
            },
            data: info.name.map(function (value) {
              return {
                value: value,
                textStyle: {
                  align: 'center',
                },
              }
            }),
          },
          {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
              textStyle: {
                color: '#9D9EA0',
                fontSize: 12,
              },
            },
            data: info.data2,
          },
        ],
        series: [
          {
            name: '帅哥',
            type: 'bar',
            barGap: 20,
            barWidth: 20,
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: true,
                position: 'left',
                offset: [0, 0],
                textStyle: {
                  color: '#fff',
                  fontSize: 14,
                },
              },
            },
            itemStyle: {
              normal: {
                color: this.colors[0],
              },
            },
            data: info.data1,
          },
          {
            name: '美女',
            type: 'bar',
            barGap: 20,
            barWidth: 20,
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: true,
                position: 'right',
                offset: [0, 0],
                textStyle: {
                  color: '#fff',
                  fontSize: 14,
                },
              },
            },
            itemStyle: {
              normal: {
                color: this.colors[1],
              },
            },
            data: info.data2,
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
}
</style>