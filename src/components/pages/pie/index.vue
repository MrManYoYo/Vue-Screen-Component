<template>
  <Card class='preview-cont'>
    <Row type='flex' justify='start'>
      <Col
        :xs='{ span: 11, offset: 1}'
        :sm='{ span: 11, offset: 1}'
        :md='{ span: 7, offset: 1}'
        :lg='{ span: 5, offset: 1}'
        class='preview-cont-col'>
        <Card class='preview-card'>
          <ring-pie-chart class='chart-cont' />
        </Card>
      </Col>
    </Row>
  </Card>
</template>

<script>
import RingPieChart from '../../cell/pie/ring-pie';
export default {
  components: {
    RingPieChart,
  },
  data() {
    return {
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang='scss' scoped>
@import "./pie.scss";
</style>