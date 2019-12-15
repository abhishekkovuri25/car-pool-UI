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
    apiKey: "AIzaSyDSi7D_yXbDKnunh9Rglnjs9YDekmY2Qa0",
    authDomain: "pool-9665c.firebaseapp.com",
    databaseURL: "https://pool-9665c.firebaseio.com",
    projectId: "pool-9665c",
    storageBucket: "pool-9665c.appspot.com",
    messagingSenderId: "1063246274391",
    appId: "1:1063246274391:web:908559d84584106217e812",
    measurementId: "G-GC1P6FD31H"
}
firebase.initializeApp(config)