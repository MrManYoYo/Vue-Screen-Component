<template>
  <div class='content'>
    <div class='show-item bg-black'>
      <funnel-style-1 sid='funnel1' :source='areaSource' />
      <Spin size='large' fix v-if='spinShow1' />
    </div>
  </div>
</template>
<script>
import FunnelStyle1 from '../../cell/funnel/funnel-style-1'
export default {
  components: {
    'funnel-style-1': FunnelStyle1,
  },
  data() {
    return {
      areaSource: [],
      spinShow1: true,
    }
  },
  mounted() {
    this.fetchArea()
  },
  methods: {
    fetchArea() {
      this.$http.get('/funnel/areaSource')
        .then(res => {
          this.areaSource = res.data
          this.spinShow1 = false
        })
        .catch(err => {
          console.log(err);
          this.$fetchMock('/static/mock/funnel/areaSource.json')
            .then(res => {
              this.areaSource = res
              this.spinShow1 = false
            })
        })
    },
  },
}
</script>
<style lang="scss" scoped>
  @import './funnel.scss'
</style>

