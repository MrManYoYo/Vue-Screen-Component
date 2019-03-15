import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
// 引入模块
import Home from './modules/home'

Vue.use(Vuex)

const state = {}

export default new Vuex.Store({
  state,
  modules: {
    'Home': Home,
  },
  plugins: [
  ],
})