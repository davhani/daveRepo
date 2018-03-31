import Vue from 'vue'
import Router from 'vue-router'
import Registration from '@/components/Registration'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
    redirect: {
       name: 'Registration'
     }
   },
]
})
