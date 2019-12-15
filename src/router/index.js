import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/views/Register/Register.vue'
import Login from '@/views/Login/Login.vue'
import OfferRide from '@/views/OfferRide/OfferRide.vue'
import FindRide from '@/views/FindRide/FindRide.vue'
import NewCar from '@/views/NewCar/NewCar.vue'
import About from '@/views/About.vue'
import RideList from '@/views/RideListing/RideList.vue'
import MyRide from '@/views/MyRide/MyRide.vue'
import MyProfile from '@/views/MyProfile/MyProfile.vue'
import History from '@/views/History/History.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/offer-ride',
      name: 'OfferRide',
      component: OfferRide
    },
    {
      path: '/',
      name: 'FindRideHome',
      component: FindRide
    },
    {
      path: '/find-ride',
      name: 'FindRide',
      component: FindRide
    },
    {
      path: '/my-ride/upcoming',
      name: 'MyRide',
      component: MyRide
    },
    {
      path: '/my-ride/history',
      name: 'History',
      component: History
    },
    {
      path: '/offer-ride/add-car',
      name: 'NewCar',
      component: NewCar
    },
    {
      path: '/authorised',
      name: 'About',
      component: About
    },
    {
      path: '/find-ride/ride-list',
      name: 'RideList',
      component: RideList
    },
    {
      path: '/my-profile',
      name: 'MyProfile',
      component: MyProfile
    }
  ]
})