import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/HomeComponent'
import MemberComponent from '@/components/MemberComponent'
import ChamCongComponent from '@/components/ChamCongComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent
    },
    {
    	path: '/member',
    	name: 'MemberComponent',
    	component: MemberComponent
    },
    {
      path: '/chamcong',
      name: 'ChamCongComponent',
      component: ChamCongComponent
    }
  ]
})
