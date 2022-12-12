import Vue from 'vue'
import App from './App.vue'
import store from './components/vuex/store'
import router from './router/router'
import Paginate from 'vuejs-paginate'
import './assets/styles/styles.scss'

Vue.config.productionTip = false
Vue.component('v-paginate', Paginate)

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
