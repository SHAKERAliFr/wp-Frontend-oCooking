import Vue from 'vue'
import VueRouter from 'vue-router'
import RecipeList from '../views/RecipeList.vue'
import RecipeSingle from '../views/RecipeSingle.vue'
import LoginForm from '../views/LoginForm.vue'
import LogOut from '../views/LogOut.vue'
import UserHome from '../views/UserHome.vue'
import InscriptionPage from '../views/InscriptionPage.vue'
import RecipeCreate from '../views/RecipeCreate.vue'

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
    path: '/logout',
    component: LogOut,
    name: 'logout',
  },
  {
    path: '/user-home',
    component: UserHome,
    name: 'uesr-home',
  },
  {
    path: '/inscription',
    component: InscriptionPage,
    name: 'inscription',
  },
  {
    path: '/recipeCreate',
    component: RecipeCreate,
    name: 'recipeCreate',
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
