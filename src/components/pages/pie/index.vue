<template>
  <Card class='preview-cont'>
    <Row type='flex' justify='start'>
      <Col
        v-for='item in previews'
        :key='item.id'
        :xs='{ span: 11, offset: 1}'
        :sm='{ span: 11, offset: 1}'
        :md='{ span: 7, offset: 1}'
        :lg='{ span: 5, offset: 1}'
        class='preview-cont-col'>
        <Card class='preview-card'>Thumbnail</Card>
      </Col>
    </Row>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      previews: [],
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped>

</style>