import Vue from 'vue'
import Router from 'vue-router'
// import App from '@/App'
import Home from '@/components/home/Home'
import Todo from '@/components/todo/Todo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Todo',
      name: 'Todo',
      component: Todo
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
