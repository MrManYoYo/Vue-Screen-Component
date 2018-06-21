import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: res => require(['@/components/pages/home'], res),
      children: [{
        path: '/pie',
        name: 'pie',
        component: res => require(['@/components/pages/pie'], res),
      }, {
        path: '/bar',
        name: 'bar',
        component: res => require(['@/components/pages/bar'], res),
      }, {
        path: '/line',
        name: 'line',
        component: res => require(['@/components/pages/line'], res),
      }, {
        path: '/radar',
        name: 'radar',
        component: res => require(['@/components/pages/radar'], res),
      }, {
        path: '/table',
        name: 'table',
        component: res => require(['@/components/pages/table'], res),
      }, {
        path: '/box',
        name: 'box',
        component: res => require(['@/components/pages/box'], res),
      }, {
        path: '/load',
        name: 'load',
        component: res => require(['@/components/pages/load'], res),
      }, {
        path: '/funnel',
        name: 'funnel',
        component: res => require(['@/components/pages/funnel'], res),
      }, {
        path: '/ball',
        name: 'ball',
        component: res => require(['@/components/pages/ball'], res),
      }],
    },
  ],
})
