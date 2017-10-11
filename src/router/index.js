import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Article from '@/components/common/Article'
import About from '@/components/About'
import Edit from '@/components/end/Edit'
import Admin from '@/components/end/Admin'
import Login from '@/components/end/Login'
import Register from '@/components/end/Register'
import Detail from '@/components/detail'

Vue.use(Router)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
Vue.http.options.credentials = true

export default new Router({
  routes: [
    {
      path: '/',
      name: 'article',
      component: Article
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/admin/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin/register',
      name: 'register',
      component: Register
    },
    {
      path: '/article/detail/:postid',
      name: 'detail',
      component: Detail
    }
  ]
})
