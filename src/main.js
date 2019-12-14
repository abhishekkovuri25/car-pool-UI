import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import VueGoogleAutocomplete from 'vue-google-autocomplete'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueGoogleAutocomplete)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

var config = {
  apiKey: "AIzaSyDJZ7Ifb9v6m1RGmM699H7sPG3g_9CQa_4",
  authDomain: "car-pooling-ddaa2.firebaseapp.com",
  databaseURL: "https://car-pooling-ddaa2.firebaseio.com",
  projectId: "car-pooling-ddaa2",
  storageBucket: "car-pooling-ddaa2.appspot.com",
  messagingSenderId: "874710525010"
}
firebase.initializeApp(config)