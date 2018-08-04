import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/little',
      name: 'Little',
      component:()=>import("../components/Little.vue")
    },
     {
       path: '/',
       name: 'Lin',
       component:()=>import("../components/LinYin/Lin.vue")
     },
    {
     path: '/fly',
     name: 'Fly',
      component:()=>import("../components/Fly.vue"),
      /*meta:{keepAlive:true,title:'fly'}*/
   },
    {
      path: '/fly1',
      name: 'Fly1',
      component:()=>import("../components/Fly1.vue"),
      meta:{keepAlive:true,title:'fly1'}
    },
    {
      path: '/wake1',
      name: 'wake1',
      component:()=>import("../components/WestLake1.vue"),

    },
    {
      path: '/wake2',
      name: 'wake2',
      component:()=>import("../components/WestLake2.vue"),
    }

  ]
})
