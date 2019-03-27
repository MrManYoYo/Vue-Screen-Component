<template>
  <div :id='chartId' :ref='chartId' />
</template>

<script>
export default {
  props: {
    chartId: {
      type: String,
      default: 'ringPieChart',
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.initChart()
    this.updateChart()
  },
  methods: {
    initChart() {
      if (!this.chartId) {
        return this.$Message.error('Ring-Pie chart init failed')
      }
      this.chart = this.$echarts.init(this.$refs[this.chartId])
    },
    updateChart() {
      !this.chart && this.initChart()
      const pieColor1 = this.createGradient({
          dir: [0, 0, 0, 1],
          colors: ['#ff9f60', '#fdd27a'],
        }),
        pieColor2 = this.createGradient({
          dir: [0, 0, 0, 1],
          colors: ['#7958ff', '#ac80ff'],
        }),
        pieColor3 = this.createGradient({
          dir: [0, 0, 0, 1],
          colors: ['#37a0ff', '#60c2fe'],
        }),
        borderConfig = {
          value: 1,
          itemStyle: {
            normal: {
              color: 'rgba(68, 82, 122, 1)',
              borderWidth: 2,
              borderColor: 'rgba(68, 82, 122, 1)',
            },
          },
        };
      this.chart.setOption({
        series: [
          {
            type: 'pie',
            radius: ['40%', '42%'],
            silent: true,
            label: {
              normal: {
                show: false,
              },
            },
            data: [borderConfig],
          },
          {
            type: 'pie',
            radius: ['65%', '67%'],
            silent: true,
            label: {
              normal: {
                show: false,
              },
            },
            data: [borderConfig],
          },
          {
            type: 'pie',
            radius: ['90%', '92%'],
            silent: true,
            label: {
              normal: {
                show: false,
              },
            },
            data: [borderConfig],
          },
          {
            type: 'pie',
            name: 'pie1',
            hoverAnimation: false,
            clockwise: true,
            startAngle: 135,
            radius: ['40%', '42%'],
            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 50,
                show: false,
                itemStyle: {
                  normal: {
                    color: 'rgba(68, 82, 122, 0)',
                  },
                },
              },
              {
                value: 50,
                itemStyle: {
                  normal: {
                    label: {
                      show: false,
                    },
                    color: pieColor1,
                    shadowColor: '#3dd4de',
                    shadowBlur: 5,
                    borderWidth: 5,
                    borderColor: pieColor1,
                  },
                },
              },
            ],
          },
          {
            type: 'pie',
            name: 'pie1',
            hoverAnimation: false,
            clockwise: false,
            startAngle: 180,
            radius: ['65%', '67%'],
            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 25,
                show: false,
                itemStyle: {
                  normal: {
                    color: 'rgba(68, 82, 122, 0)',
                  },
                },
              },
              {
                value: 75,
                itemStyle: {
                  normal: {
                    label: {
                      show: false,
                    },
                    color: pieColor2,
                    shadowColor: '#3dd4de',
                    shadowBlur: 5,
                    borderWidth: 5,
                    borderColor: pieColor2,
                  },
                },
              },
            ],
          },
          {
            type: 'pie',
            name: 'pie1',
            hoverAnimation: false,
            clockwise: true,
            startAngle: 90,
            radius: ['90%', '92%'],
            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 25,
                show: false,
                itemStyle: {
                  normal: {
                    color: 'rgba(68, 82, 122, 0)',
                  },
                },
              },
              {
                value: 75,
                itemStyle: {
                  normal: {
                    label: {
                      show: false,
                    },
                    color: pieColor3,
                    shadowColor: '#3dd4de',
                    shadowBlur: 5,
                    borderWidth: 5,
                    borderColor: pieColor3,
                  },
                },
              },
            ],
          },
        ],
      });
    },
  },
};
</script>

<style lang='scss' scoped>
</style>