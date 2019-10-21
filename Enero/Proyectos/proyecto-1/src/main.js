import Vue from 'vue'
import App from './App.vue'
import store from './store'
// <!--INSTANCIA DE VUE QUE LLAMA A STORE.JS Y SE RENDERIZA NUESTRA APLICACION CON ID APP LOCALIZADO EN NUESTRO HTML-->
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
