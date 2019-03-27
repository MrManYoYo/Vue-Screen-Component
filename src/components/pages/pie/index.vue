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

      <Col
        :xs='{ span: 11, offset: 1}'
        :sm='{ span: 11, offset: 1}'
        :md='{ span: 7, offset: 1}'
        :lg='{ span: 5, offset: 1}'
        class='preview-cont-col'>
        <Card class='preview-card'>
          <broken-ring-pie-chart class='chart-cont' />
        </Card>
      </Col>

      <Col
        :xs='{ span: 11, offset: 1}'
        :sm='{ span: 11, offset: 1}'
        :md='{ span: 7, offset: 1}'
        :lg='{ span: 5, offset: 1}'
        class='preview-cont-col'>
        <Card class='preview-card'>
          <single-ring-pie-chart class='chart-cont' />
        </Card>
      </Col>
    </Row>
  </Card>
</template>

<script>
import RingPieChart from '../../cell/pie/ring-pie';
import BrokenRingPieChart from '../../cell/pie/broken-ring-pie';
import SingleRingPieChart from '../../cell/pie/single-ring-pie';
export default {
  components: {
    RingPieChart,
    BrokenRingPieChart,
    SingleRingPieChart,
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