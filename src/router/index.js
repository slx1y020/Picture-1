import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Detailspage  from "../views/Detailspage.vue"
import header from"../components/header_nav.vue"
import details from"../components/details.vue"
import comment from"../components/comments.vue"
  const routes = [
  {
    path: '/',
    component: Detailspage
  },
  {
    path: '/header',
    component: header
  },
  {
    path: '/details',
    component: details,
  },
  {
  path: '/comment',
    component: comment
  }
]

const router = new VueRouter({
  routes
})

export default router
