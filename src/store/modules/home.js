import * as types from '../mutation-types'

const state = {
  activeMenu: localStorage.getItem('VSC_active_menu') || 'pie',
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
  state,
  actions,
  getters,
  mutations,
}