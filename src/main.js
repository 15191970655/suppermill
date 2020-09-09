import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import 'swiper/swiper-bundle.css'
Vue.config.productionTip = false
/*添加事件总线事件*/
Vue.prototype.$bus=new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
