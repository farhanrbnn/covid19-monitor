import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard'
import details from '@/components/details'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/details',
      name: 'details',
      component: details
    }
  ]
})
