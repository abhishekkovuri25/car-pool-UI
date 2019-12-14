import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/views/Register/Register.vue'
import Login from '@/views/Login/Login.vue'
import OfferRide from '@/views/OfferRide/OfferRide.vue'
import FindRide from '@/views/FindRide/FindRide.vue'
import NewCar from '@/views/NewCar/NewCar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/offer-ride',
      name: 'OfferRide',
      component: OfferRide
    },
    {
      path: '/find-ride',
      name: 'FindRide',
      component: FindRide
    },
    {
      path: '/offer-ride/add-car',
      name: 'NewCar',
      component: NewCar
    }
  ]
})