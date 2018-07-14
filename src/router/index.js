import Vue from 'vue'
import Router from 'vue-router'
import details from '@/components/details'
import home from '@/components/home'
import search from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
