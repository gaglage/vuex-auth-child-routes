import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( /* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/secret',
      component: () => import( /* webpackChunkName: "login" */ './views/Secret/Secret.vue'),
      children:[
        {
          path: 'notes',
          component: () => import( /* webpackChunkName: "login" */ './views/Secret/Notes.vue')
        }
      ]
    }
  ]
})