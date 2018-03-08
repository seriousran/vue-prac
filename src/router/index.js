import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ex02x1 from '@/components/Ex02x1'
import Ex02x2 from '@/components/Ex02x2'
import Ex03x1 from '@/components/Ex03x1'
import Ex03x7 from '@/components/Ex03x7'
import Ex03x8 from '@/components/Ex03x8'
import Ex03x9 from '@/components/Ex03x9'
import Ex04x5 from '@/components/Ex04x5'
import Ex05x4 from '@/components/Ex05x4'
import Ex05x8 from '@/components/Ex05x8'
import Ex05x9 from '@/components/Ex05x9'
import TodoMain from '@/components/TodoMain'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/HelloWorld', component: HelloWorld },
    { path: '/Ex02x1', component: Ex02x1 },
    { path: '/Ex02x2', component: Ex02x2 },
    { path: '/Ex03x1', component: Ex03x1 },
    { path: '/Ex03x7', component: Ex03x7 },
    { path: '/Ex03x8', component: Ex03x8 },
    { path: '/Ex03x9', component: Ex03x9 },
    { path: '/Ex04x5', component: Ex04x5 },
    { path: '/Ex05x4', component: Ex05x4 },
    { path: '/Ex05x8', component: Ex05x8 },
    { path: '/Ex05x9', component: Ex05x9 },
    { path: '/TodoMain', component: TodoMain }
  ]
})
