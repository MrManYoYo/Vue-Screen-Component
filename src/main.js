// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import store from './store'
import echarts from 'echarts'
import liquidfill from 'echarts-liquidfill'
import TFetch from 'tfetch'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false;
Vue.use(iView)
Vue.use(liquidfill)

Vue.prototype.$echarts = echarts

const http = new TFetch({
  baseUrl: './mock',
  timeout: 5000,
})

const fetchMock = url => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

Vue.prototype.$http = http
Vue.prototype.$fetchMock = fetchMock

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
