import Vue from 'vue'
import VueSocketio from 'vue-socket.io-extended';
import $socket from './socket-instance';

import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
 
Vue.use(VueSocketio, $socket, { store });

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
