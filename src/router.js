import Vue from 'vue'
import Router from 'vue-router'

import store from './store'
import routes from './routes'

Vue.use(Router)

const router =  new Router({
  // routes: routes
  routes
})

router.beforeEach ((to, from, next) =>{
const requiresAuth =  to.matched.some(record => record.meta.requiresAuth)
const isLogged = store.state.auth.isLogged
console.log(!requiresAuth && isLogged);
//El usuario no irá  a la página de login estando identificado
if (!requiresAuth && isLogged && to.path === '/login'){
  next('/secret')
}

if (requiresAuth && !isLogged ){
  next('/login')
}else{
  next()
}

})

export default router