import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/servicios',
      name: 'servicios',
     component: () => import(/* webpackChunkName: "servicios" */ './views/Servicios.vue')
    },
    {
      path: '/fotos/:id',
      name: 'fotos',
      component: () => import(/* webpackChunkName: "fotos" */ './views/Fotos.vue')

    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import(/* webpackChunkName: "grid" */ './views/Grid.vue')

    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import(/* webpackChunkName: "card" */ './views/Cards.vue')

    },
    {
      path: '/form',
      name: 'form',
      component: () => import(/* webpackChunkName: "form" */ './views/Form.vue')

    }
    
    
  ]
})
