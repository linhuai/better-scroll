import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BetterScrollPage from '@/views/BetterScrollPage'
import ScrollPage from '@/views/ScrollPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/better-scroll',
      name: 'Better-scroll',
      component: BetterScrollPage
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: ScrollPage
    }
  ]
})
