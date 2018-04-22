import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Compere from '@/components/Compere'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/compere',
      name: 'Compere',
      component: Compere
    }, {
      path: '/mark',
      name: 'Mark'
    }, {
      path: '/result',
      name: 'Result'
    }
  ]
})
