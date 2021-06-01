import Vue from 'vue'
import App from './App.vue'
import vClickOutside from 'v-click-outside'
// import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(vClickOutside)
new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
