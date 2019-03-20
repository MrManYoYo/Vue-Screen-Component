import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/pie',
      component: res => require(['@/components/pages/home'], res),
      children: [{
        path: '/pie',
        name: 'pie',
        component: res => require(['@/components/pages/pie'], res),
      }],
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
