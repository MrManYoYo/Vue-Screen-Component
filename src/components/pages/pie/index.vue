<template>
  <div class='content'>
    <box-container class='bg-grey' :spinShow='spinShow1' @showOptionHandler='showOption("pie1")'>
      <pie-style-1
        sid='pie1'
        :source='eventTypeFetchData'
        :radiusDic='pieRadius1'
        ref='pie1' />
    </box-container>
    <box-container class='bg-grey' :spinShow='spinShow2' @showOptionHandler='showOption("pie2")'>
      <pie-style-2
        sid='pie2'
        :source='caringObjectFetchData'
        ref='pie2' />
    </box-container>
    <box-container class='bg-grey' :spinShow='spinShow3' @showOptionHandler='showOption("pie3")'>
      <pie-style-3 sid='pie3' :source='eventHandlingData' ref='pie3' />
    </box-container>
  </div>
</template>
<script>
import boxContainer from '../common/box-container'
import Pie1 from '../../cell/pie/pie-style-1'
import Pie2 from '../../cell/pie/pie-style-2'
import Pie3 from '../../cell/pie/pie-style-3'
export default {
  components: {
    'box-container': boxContainer,
    'pie-style-1': Pie1,
    'pie-style-2': Pie2,
    'pie-style-3': Pie3,
  },
  data() {
    return {
      pieRadius1: {
        outside: ['25%', '45%'],
        center: ['15%', '25%'],
        inner: ['0%', '16%'],
      },
      eventTypeFetchData: [],
      caringObjectFetchData: [],
      eventHandlingData: [],
      spinShow1: true,
      spinShow2: true,
      spinShow3: true,
      activeRef: '',
    }
  },
  created() {
    // const _this = this
    // pie-style-1 fetch data
    this.$http.get('/pie/eventTypeSource')
      .then(res => {
        if (res.state && res.data) {
          this.eventTypeFetchData = res.data
          this.spinShow1 = false
        }
      })
      .catch(err => {
        console.log(err)
        this.$fetchMock('/static/mock/pie/eventTypeSource.json')
          .then(res => {
            this.eventTypeFetchData = res
            this.spinShow1 = false
          })
      })
    // pie-style-2 fetch data
    this.$http.get('/pie/caringObjectSource')
      .then(res => {
        if (res.state && res.data) {
          this.caringObjectFetchData = res.data
          this.spinShow2 = false
        }
      })
      .catch(err => {
        console.log(err)
        this.$fetchMock('/static/mock/pie/caringObjectSource.json')
          .then(res => {
            this.caringObjectFetchData = res
            this.spinShow2 = false
          })
      })
    // pie-style-3 fetch data
    this.$http.get('/pie/eventHandlingSource')
      .then(res => {
        if (res.state && res.data) {
          this.eventHandlingData = res.data
          this.spinShow3 = false
        }
      })
      .catch(err => {
        console.log(err)
        this.$fetchMock('/static/mock/pie/eventHandlingSource.json')
          .then(res => {
            this.eventHandlingData = res
            this.spinShow3 = false
          })
      })
  },
  methods: {
    showOption(ref) {
      console.log(JSON.parse(JSON.stringify(this.$refs[ref].option)))
    },
  },
}
</script>
<style lang="scss" scoped>
@import './pie.scss'
</style>

