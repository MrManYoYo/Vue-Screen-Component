<template>
  <div class='content'>
    <box-container
      :spinShow='spinShow1'
      :toolsShow='false'
      class='bg-grey'>
      <table-style-1 :source='eventListFetchData' />
    </box-container>
  </div>
</template>
<script>
import boxContainer from '../common/box-container'
import Table1 from '../../cell/table/table-style-1'
export default {
  name: 'TablePage',
  components: {
    'box-container': boxContainer,
    'table-style-1': Table1,
  },
  data() {
    return {
      eventListFetchData: [],
      spinShow1: true,
    }
  },
  created() {
    this.$http.get('/table/eventListSource')
      .then(res => {
        if (res.state && res.data) {
          this.eventListFetchData = res.data
          this.spinShow1 = false
        }
      })
      .catch(err => {
        console.log(err)
        this.$fetchMock('/static/mock/table/eventListSource.json')
          .then(res => {
            this.eventListFetchData = res
            this.spinShow1 = false
          })
      })
  },
}
</script>
<style lang="scss" scoped>
@import './table.scss'
</style>

