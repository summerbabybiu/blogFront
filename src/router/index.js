import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Article from '@/components/Article'
import About from '@/components/About'
import Edit from '@/components/Edit'

Vue.use(Router)
Vue.use(VueResource)

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
    }
  ]
})
