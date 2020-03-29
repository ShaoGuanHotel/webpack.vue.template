// 路由配置
import VueRouter from "vue-router"
import UIDemo from '@/views/UIDemo'

const routes = [{
  path: '/UIDemo',
  component: UIDemo
}]

const router = new VueRouter({
  routes
})

export default function initRouter(Vue) {
  Vue.use(VueRouter)
  return router
}