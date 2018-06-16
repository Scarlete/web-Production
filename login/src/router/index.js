import Vue from 'vue'
import Router from 'vue-router'
import Main from'@/components/Main.vue'
import Login from '@/components/Login.vue'


Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
