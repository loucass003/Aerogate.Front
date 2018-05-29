import Vue from 'vue'
import App from './App'
import router from './router'
import VCharts from 'v-charts'
import Vuetify from 'vuetify'
import VueSocketio from 'vue-socket.io'
import 'vuetify/dist/vuetify.min.css'

Vue.use(VCharts)
Vue.use(Vuetify)
Vue.use(VueSocketio, `ws://${window.location.hostname}:3000`)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  sockets: {
    connect: function () {
      console.log('socket connected')
    }
  },
  render: h => h(App)
})
