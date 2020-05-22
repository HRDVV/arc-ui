import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../views/test.md'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Test',
    component: Test
  }
]

const router = new VueRouter({
  routes
})

export default router
