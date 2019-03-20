<template>
  <div class='container'>
    <Layout class='container-layout'>
      <Header class='header'>
        <header-menu />
      </Header>
      <Content class='content'>
        <router-view />
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

