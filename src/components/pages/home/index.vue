<template>
  <div class='container'>
    <Layout class='container-layout'>
      <Header class='header'>
        <header-menu />
      </Header>
      <Content class='content'>
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
        </Row>
      </Content>
      <Footer class='footer'>
        Vue-Screen-Component
      </Footer>
    </Layout>
    <canvas-bg />
  </div>
</template>
<script>
import HeaderMenu from '../../cell/header'
import CanvasBg from '../../cell/canvas-bg'
export default {
  components: {
    HeaderMenu,
    CanvasBg,
  },
  data() {
    return {
      previews: [{
        id: 0,
        thumbnail: '',
      }, {
        id: 1,
        thumbnail: '',
      }, {
        id: 2,
        thumbnail: '',
      }, {
        id: 3,
        thumbnail: '',
      }, {
        id: 4,
        thumbnail: '',
      }, {
        id: 5,
        thumbnail: '',
      }, {
        id: 6,
        thumbnail: '',
      }, {
        id: 7,
        thumbnail: '',
      }],
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
@import "./home.scss";
</style>

