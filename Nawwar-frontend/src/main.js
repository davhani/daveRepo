// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import index from './router/index'
import Registration from '@/components/Registration'
import 'bootstrap/dist/css/bootstrap.css'
import VueRouter from 'vue-router'
import Chartist from 'chartist'
import Home from '@/components/Home'
import Signup from '@/components/Signup'
import About from '@/components/About.vue'
import contactus from '@/components/contactus.vue'
//import 'es6-promise/auto'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Registration,
  },
  {
      path: '/Home',
      component: Home,
    },
    {
      path: '/Signup',
      component: Signup,
    },
    {
      path: '/About',
      component: About,
    },
    {
      path: '/contactus',
      component: contactus,
    }
  ]

const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})
Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
})
