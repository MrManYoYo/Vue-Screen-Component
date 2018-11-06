<template>
  <div class='bar'>
    <div :id='chartId' class='chart-wrap' />
    <div class='area-info-wrapper'>
      <div class='area-menu-wrapper'>
        <span
          :class='`menu-item ${currentAreaMenu === menu.des ?
            "active": ""} ${menu.disabled ? "disabled" : ""}`'
          @click='update(menu)'
          v-for='(menu, i) in menus'
          :key='i'>
          {{menu.des}}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import _lodash_findIndex from 'lodash/findIndex';
import _lodash_sortBy from 'lodash/sortBy';
import _lodash_ceil from 'lodash/ceil';
import _lodash_round from 'lodash/round';
export default {
  props: {
    chartId: {
      type: String,
      default: 'chartId',
    },
    isShowTab: {
      type: Boolean,
      default: false,
    },
    menus: {
      type: Array,
      default: () => [{
        des: '事件',
        disabled: false,
      }, {
        des: '服务',
        disabled: false,
      }],
    },
    source: {
      type: Array,
      default: () => {
        return [
          { name: '淳化', value1: 250 },
          { name: '横溪', value1: 350 },
          { name: '湖熟', value1: 550 },
          { name: '江宁', value1: 450 },
          { name: '东山', value1: 650 },
          { name: '禄口', value1: 350 },
          { name: '汤山', value1: 750 },
          { name: '麒麟', value1: 850 },
          { name: '谷里', value1: 350 },
          { name: '秣陵', value1: 650 },
        ]
      },
    },
  },
  data() {
    return {
      charts: '',
      currentAreaMenu: this.menus['0'].des || this.menus['1'].des,
    }
  },
  watch: {
    source: function (newSource) {
      this.updateCharts(newSource)
    },
  },
  mounted() {
    this.charts = this.initCharts()
    this.updateCharts(this.source)
  },
  methods: {
    initCharts() {
      const el = document.getElementById(this.chartId)
      const charts = this.$echarts.init(el)
      return charts
    },
    initData(source) {
      const xAxis = []
      const data = []
      const currentIndex = _lodash_findIndex(this.menus, { des: this.currentAreaMenu })
      // currentIndex = currentIndex < 0 ? 0 : currentIndex
      source.forEach((info) => {
        xAxis.push(info.name)
        data.push(info.value1)
      })
      const max = this.getMax(source, currentIndex)
      let dataZoomEnd = 100;
      const maxXaxisLen = 10;
      const mmp = 100;
      if (xAxis.length > maxXaxisLen) {
        dataZoomEnd = maxXaxisLen / xAxis.length * mmp
      }
      return { xAxis, data, max, dataZoomEnd }
    },
    updateCharts(source) {
      const info = this.initData(source);
      const infoXaxisMaxLen = 10;
      const isLarge = info.xAxis.length > infoXaxisMaxLen;
      this.charts && this.charts.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          top: '15%',
          left: '3%',
          right: '4%',
          bottom: '0%',
          containLabel: true,
        },
        dataZoom: [{
          type: 'inside',
          disabled: !isLarge,
          zoomLock: true,
          start: 0,
          end: info.dataZoomEnd,
        }],
        xAxis: [
          {
            type: 'category',
            data: info.xAxis,
            axisLabel: {
              color: '#00deff',
              fontSize: 12,
              interval: 0,
              rotate: 45,
              formatter: function (value) {
                let rst = value;
                const maxLen = 6;
                const substrStartIndex = 0;
                const substrEndIndex = 5;
                if (value.length > maxLen) {
                  const valSubStr = value.substr(substrStartIndex, substrEndIndex);
                  // rst = value.substr(0, 5) + '...'
                  rst = `${valSubStr}...`
                }
                return rst
              },
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
        ],
        yAxis: [{
          type: 'value',
          max: info.max,
          axisLine: {
            lineStyle: {
              color: '#00deff',
              width: 1,
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
          type: 'bar',
          barWidth: 15,
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#73f4cd', // 0% 处的颜色
                }, {
                  offset: 1, color: '#4687c9', // 100% 处的颜色
                }],
                globalCoord: false, // 缺省为 false
              },
            },
          },
          data: info.data,
        }],
      })
    },
    update(menu) {
      // this.charts.dispose();
      this.currentAreaMenu = menu.des;
      // this.initData(this.source);
      // this.charts = this.initCharts();
      this.$emit('listenChild', this.currentAreaMenu);
      this.updateCharts(this.source);
    },
    getMax(source) {
      let temp = Object.assign([], source);
      // const currentIndexAdd = 1;
      // const key = `value${currentIndex + currentIndexAdd}`
      const key = 'value1';
      temp = _lodash_sortBy(temp, (ele) => {
        return -parseFloat(ele[key])
      });
      const tempIndex = 0;
      const max = temp[tempIndex][key];
      const str = String(max);
      // const str = `${max}`;
      const len = str.length;
      const addIndex = 1;
      const ceilIndex = 2;
      const mMax = _lodash_ceil(max, -len + addIndex);
      const sMax = _lodash_round(max, -len + addIndex);
      return (mMax + sMax) / ceilIndex;
    },
  },
}
</script>
<style lang="scss" scoped>
.bar{
  width: 100%;
  height:100%;
  position: relative;
  .chart-wrap{
    width: 100%;
    height:100%;
  }
  .area-info-wrapper{
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    height: 40px;
    display: flex;
    align-items: center;
      .area-menu-wrapper{
        // display: flex;
        flex: 1;
        // margin-left: 300px;
        margin-right: 20px;
        height: 100%;
        align-items: center;
        justify-content: center;
          .menu-item{
            flex: 1;
            color: #00deff;
            font-size: 14px;
            margin: 0 10px;
            text-align: center;
          }
          .active {
            color: #2d8cf0;
            font-size: 16px;
            border-bottom: 2px solid #2d8cf0;
          }

          .disabled{
            color: #dedede;
          }
    }
  }
}
</style>


