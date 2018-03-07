import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ex02x1 from '@/components/Ex02x1'
import Ex02x2 from '@/components/Ex02x2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      component: HelloWorld
    },
    { path: '/Ex02x1', component: Ex02x1 },
    { path: '/Ex02x2', component: Ex02x2 }
  ]
})
