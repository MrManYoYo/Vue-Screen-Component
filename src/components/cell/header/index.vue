<template>
  <Menu mode='horizontal' theme='dark' class='header-menu'>
    <MenuItem v-for='menu in menus' :key='menu.name' :name='menu.name'>
      <Icon :type='menu.icon' />
      {{menu.name}}
    </MenuItem>
  </Menu>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState('Home', {
      menus: 'menus',
    }),
  },
};
</script>

<style lang='scss' scoped>
@import './header.scss';
</style>