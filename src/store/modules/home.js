import * as types from '../mutation-types'

const state = {
  // activeMenu: localStorage.getItem('VSC_active_menu') || 'pie',
  menus: [{
    name: 'home',
    icon: 'ios-home-outline',
    path: '/',
  }, {
    name: 'bar',
    icon: 'ios-stats-outline',
    path: '/bar',
  }, {
    name: 'pie',
    icon: 'ios-pie-outline',
    path: '/pie',
  }, {
    name: 'line',
    icon: 'md-trending-up',
    path: '/line',
  }, {
    name: 'table',
    icon: 'md-grid',
    path: '/table',
  }, {
    name: 'map',
    icon: 'md-map',
    path: '/map',
  }],
}

const actions = {}

const getters = {
  getActiveMenu: state => () => state.activeMenu,
}

const mutations = {
  [types.UPDATE_ACTIVE_MENU](state, payload) {
    localStorage.setItem('VSC_active_menu', payload)
    state.activeMenu = payload
  },
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}