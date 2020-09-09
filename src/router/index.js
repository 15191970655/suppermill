import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =()=>import('@/views/home/Home')
const Category =()=>import('@/views/category/Category')
const Profile =() => import('@/views/profile/Profile')
const Shopcart =() => import('@/views/shopcart/Shopcart')
const Detail =() => import('@/views/detail/Detail')
Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      redirect:'/home'
    },
    {
      path: '/home',
      component:Home
    },
    {
      path: '/category',
      component:Category
    },
    {
      path: '/profile',
      component:Profile
    },
    {
      path: '/shopcart',
      component: Shopcart
    },
    {
      path: '/detail/:id',
      component: Detail
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
