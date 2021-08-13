import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/pages/home/home')

const routes = [
  {
    path: '/',
    redirect: '/dist/index'
  },
  {
    path: '/dist',
    redirect: '/dist/index'
  },
  {
    path: '/dist/index',
    name: 'Home',
    component: Home
  }
]
export default new Router({
  // mode: 'history',
  routes
})
