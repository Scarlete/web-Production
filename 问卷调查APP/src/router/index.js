import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Log from '@/components/Head/Log'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Log',
      component: Log,
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
