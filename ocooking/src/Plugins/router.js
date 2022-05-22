import Vue from 'vue'
import VueRouter from 'vue-router'
import RecipeList from '../views/RecipeList.vue'
import RecipeSingle from '../views/RecipeSingle.vue'
import LoginForm from '../views/LoginForm.vue'
import UserHome from '../views/UserHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: RecipeList,
    name: 'home',
  },
  {
    path: '/recipe/:id',
    component: RecipeSingle,
    name: 'recipe',
  },
  {
    path: '/login',
    component: LoginForm,
    name: 'login',
  },
  {
    path: '/user-home',
    component: UserHome,
    name: 'uesr-home',
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
