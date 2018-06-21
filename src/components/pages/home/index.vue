<template>
  <div class='container'>
    <Layout class='main-layout'>
      <Sider
        class='sider-cont'
        collapsible
        :collapsed-width='60'
        v-model='isCollapsed'>
        <div class='logo-cont' ref='logo-comp'>
          Vue Screen Components
        </div>
        <Menu
          :active-name='getActiveMenu'
          :class='menuitemClasses'
          theme='dark'
          @on-select='changeMenuHandler'
          :style='{width: "200px"}'>
          <router-link
            v-for='menu in menus'
            :key='menu.key'
            :to='menu.path'
            :title='menu.title'>
            <MenuItem
              :name='menu.name'>
              <Icon :type='menu.icon' />
              <span class='menu-item-span'>{{menu.title}}</span>
            </MenuItem>
          </router-link>
        </Menu>
      </Sider>
      <Layout class='right-cont'>
        <Header class='header-cont'>Header</Header>
        <Content class='main-cont'>
          <router-view />
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
// import { TweenMax, TimelineLite, TweenLite } from 'gsap'
export default {
  data() {
    return {
      menus: [
        {
          title: '饼图',
          name: 'pie',
          key: 'pie',
          path: '/pie',
          icon: 'ios-pie-outline',
        }, {
          title: '柱状图',
          name: 'bar',
          key: 'bar',
          path: '/bar',
          icon: 'stats-bars',
        }, {
          title: '折线图',
          name: 'line',
          key: 'line',
          path: '/line',
          icon: 'arrow-graph-up-right',
        }, {
          title: '雷达图',
          name: 'radar',
          key: 'radar',
          path: '/radar',
          icon: 'ionic',
        }, {
          title: '表格',
          name: 'table',
          key: 'table',
          path: '/table',
          icon: 'ios-grid-view-outline',
        }, {
          title: '盒容器',
          name: 'box',
          key: 'box',
          path: '/box',
          icon: 'android-checkbox-outline-blank',
        }, {
          title: '等待框',
          name: 'load',
          key: 'load',
          path: '/load',
          icon: 'load-a',
        }, {
          title: '水球图',
          name: 'ball',
          key: 'ball',
          path: '/ball',
          icon: 'ios-analytics',
        }, {
          title: '漏斗图',
          name: 'funnel',
          key: 'funnel',
          path: '/funnel',
          icon: 'funnel',
        },
      ],
      isCollapsed: true,
    }
  },
  computed: {
    getActiveMenu() {
      return this.$store.getters.getActiveMenu()
    },
    menuitemClasses() {
      return [
        'sider-bar',
        this.isCollapsed ? 'collapsed-menu' : '',
      ]
    },
  },
  created() {

  },
  mounted() {
  },
  methods: {
    changeMenuHandler(name) {
      this.$store.commit('UPDATE_ACTIVE_MENU', name)
    },
  },
}
</script>
<style lang='scss' scoped>
@import './home.scss';
</style>

