import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [{
      path: '/crush/home',
      name: 'Home',
      component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    }, {
      path: '/crush/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }, {
      path: '/crush/photo',
      name: 'PhotoWall',
      component: () => import(/* webpackChunkName: "about" */ '../views/PhotoWall.vue')
    },
    
    {
      path: '/crush/friend',
      name: 'FriendChain',
      component: () => import(/* webpackChunkName: "about" */ '../views/FriendChain.vue')
    }
  ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
