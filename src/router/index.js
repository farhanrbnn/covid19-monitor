import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard'
import details from '@/components/details'
import info from '@/components/info'


Vue.use(Router)

export default new Router({
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
    },
    {
      path: '/info',
      name: 'info',
      component: info
    }
  ]
})
