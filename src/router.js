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
      path: '/basic',
      name: 'basic',
      component: () => import('./components/Basic.vue')
    },
    {
      path: '/infotestmain',
      name: 'infotestmain',
      component: () =>import('./components/InfoTestMain.vue')
    },
    {
      path: '/info1',
      name: 'info1',
      component: () =>import('./components/Info1.vue')
    },
    {
      path: '/info2',
      name: 'info2',
      component: () =>import('./components/Info2.vue')
    },
    {
      path: '/info3',
      name: 'info3',
      component: () =>import('./components/Info3.vue')
    },
    {
      path: '/info4',
      name: 'info4',
      component: () =>import('./components/Info4.vue')
    },
    {
      path: '/info5',
      name: 'info5',
      component: () =>import('./components/Info5.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () =>import('./components/Contact.vue')
    },
   
  ]
})