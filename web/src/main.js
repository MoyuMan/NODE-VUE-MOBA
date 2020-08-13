import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './style.scss'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use( VueAwesomeSwiper,  /*{  }*/)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
