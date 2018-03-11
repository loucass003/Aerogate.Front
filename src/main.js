// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueSocketio from 'vue-socket.io';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VueSocketio, `ws://${window.location.hostname}:3000`);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  sockets:{
    connect: function(){
      console.log('socket connected')
    },
    customEmit: function(val){
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  }
})
