import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Index from '@/components/index/index'
import Header from '@/components/index/header'
import Footer from '@/components/index/footer'
import LeftMenu from '@/components/index/leftMenu'
import RightMenu from '@/components/index/rightMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
  	},
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/index'
      name:'index'
      component:Index,
      children:[
        {
          path:'leftMenu',
          component:LeftMenu
        },
        {
          path:'rightMenu',
          component:RightMenu
        }
      ]
    }
  ]
})
