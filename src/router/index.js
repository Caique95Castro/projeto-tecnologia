import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const routes = [
  //{
  //  path: '/',
  //  name: 'home',
  //  component: HomeView
  //},
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/iphone',
    name: 'iphone',
    component: () => import(/* webpackChunkName: "about" */ '../views/IphoneView.vue')
  },
  {
    path: '/mac',
    name: 'mac',
    component: () => import(/* webpackChunkName: "about" */ '../views/MacView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
