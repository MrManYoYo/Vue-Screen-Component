import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: res => require(['@/components/pages/home'], res),
    },
    {
      path: '/404',
      name: '404',
      component: res => require(['@/components/pages/404'], res),
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
})
