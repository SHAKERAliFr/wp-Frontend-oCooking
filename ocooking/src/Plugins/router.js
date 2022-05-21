import Vue from 'vue'
import VueRouter from 'vue-router'
import RecipeList from '../views/RecipeList.vue'
import RecipeSingle from '../views/RecipeSingle.vue'

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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
