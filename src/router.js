import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('./components/Main.vue')
    },
    {
      path: '/worship-table',
      name: 'worship-table',
      component: () => import('./components/Worship-Table.vue')
    },
  
    {
      path: '/map1',
      name: 'map1',
      component: () =>import('./components/Map1.vue')
    },

    {
      path: '/contact',
      name: 'contact',
      component: () =>import('./components/Contact.vue')
    },
    {
      path: '/weekly',
      name: 'weekly',
      component: () =>import('./components/Weekly.vue')
    },
   
  ]
})