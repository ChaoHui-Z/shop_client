/*
* 所有路由组件
* */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Order from "../pages/Order/Order";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Shop from "../pages/Shop/Shop";
import Goods from "../pages/Shop/Goods/Goods";
import Ratings from "../pages/Shop/Ratings/Ratings";
import Info from "../pages/Shop/Info/Info";

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children:[
        {
          path:'/shop/goods',
          component:Goods
        },
        {
          path:'/shop/ratings',
          component:Ratings
        },
        {
          path:'/shop/info',
          component:Info
        },
        {
          path:'',
          redirect:'/shop/goods'
        }
      ]
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
