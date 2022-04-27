import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store/Home'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
	},
}).$mount('#app')
