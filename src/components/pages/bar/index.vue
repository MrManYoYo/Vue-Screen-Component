<template>
  <div class='content'>
    <box-container class='bg-grey' :spinShow='spinShow1'>
      <base-Bar :chartId='"chartBar"' :source='infoData' @listenChild='getChild' />
    </box-container>
    <box-container class='bg-grey' :spinShow='spinShow2'>
      <bar-style-two :source='personTypeData' />
    </box-container>
    <box-container class='bg-grey' :spinShow='spinShow3'>
      <bar-pictorial-style-1 :source='personRangeData' />
    </box-container>
    <box-container class='bg-grey' :spinShow='spinShow4'>
      <both-sides-bar :source='bothSource' />
    </box-container>
    <box-container class='bg-grey' :spinShow='spinShow5'>
      <pictorial-bar :source='pictorialSource' />
    </box-container>
  </div>
</template>
<script>
import boxContainer from '../common/box-container'
import baseBar from '~components/cell/bar/bar-style-1.vue';
import barStyleTwo from '~components/cell/bar/bar-style-2.vue';
import pictorialBar1 from '~components/cell/bar/bar-pictorial-style-1.vue';
import bothSidesBar from '~components/cell/bar/both-sides-bar.vue'
import PictorialBar from '~components/cell/bar/pictorial-bar.vue'


export default {
  components: {
    'box-container': boxContainer,
    'base-Bar': baseBar,
    'bar-style-two': barStyleTwo,
    'bar-pictorial-style-1': pictorialBar1,
    'both-sides-bar': bothSidesBar,
    'pictorial-bar': PictorialBar,
  },
  data() {
    return {
      type: '',
      infoData: [
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
      ],
      personTypeData: [
        { des: '低保', value: 222 },
        { des: '出生婴儿', value: 222 },
        { des: '计生人员', value: 222 },
        { des: '孕妇登记', value: 222 },
        { des: '老年人', value: 111 },
        { des: '残疾人', value: 111 },
        { des: '未成年人', value: 111 },
        { des: '企业退休人员', value: 111 },
      ],
      personRangeData: [],
      spinShow1: true,
      spinShow2: true,
      spinShow3: true,
      spinShow4: false,
      spinShow5: false,
      bothSource: [
        { name: '北京', data1: 100, data2: 10 },
        { name: '上海', data1: 120, data2: 30 },
        { name: '广州', data1: 100, data2: 50 },
        { name: '深圳', data1: 80, data2: 20 },
        { name: '杭州', data1: 150, data2: 40 },
      ],
      pictorialSource: {
        '驻村警务人员': 20,
        '网格长': 21,
        '平安志愿者服务队': 20,
        '社会组织': 545,
        '网格联络员': 734,
      },
    }
  },
  mounted() {
    setTimeout(() => {
      this.spinShow1 = false
      this.spinShow2 = false
    }, 1000)
  },
  created() {
    this.$http.get('/bar/personRangeSource')
      .then(res => {
        if (res.state && res.data) {
          this.personRangeData = res.data
          this.spinShow3 = false
        }
      })
      .catch(err => {
        console.log(err)
        this.$fetchMock('/static/mock/bar/personRangeSource.json')
          .then(res => {
            this.personRangeData = res
            this.spinShow3 = false
          })
      })
  },
  methods: {
    getChild(type) {
      this.type = type;
      this.getSource(this.type);
    },
    getSource(type) {

      switch (type) {
        case '事件':
          this.infoData = [
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
          break;
        case '服务':
          this.infoData = [
            { name: '淳化', value1: 250 },
            { name: '横溪', value1: 350 },
            { name: '湖熟', value1: 450 },
            { name: '江宁', value1: 650 },
            { name: '东山', value1: 950 },
            { name: '禄口', value1: 850 },
            { name: '汤山', value1: 450 },
            { name: '麒麟', value1: 350 },
            { name: '谷里', value1: 950 },
            { name: '秣陵', value1: 750 },
          ]
          break;
        default:
          break;
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import './bar.scss';

</style>

