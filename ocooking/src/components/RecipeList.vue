<template>
  <section>
       <h1>Recettes</h1>
       <ul>
           <li 
           v-for='recipe in recipes'
           :key="recipe.id" 
           
           ><RecipeCard :recipeProps="recipe" /></li>
          
       </ul>
  </section>
</template>

<script>
import RecipeCard from './RecipeCard.vue';
import recipeService from '../services/recipeService.js';

export default {
  name: 'RecipeList',
  components: {
    RecipeCard,
  },
  data() {
    return{
     recipes :[]
    };
  },
  async created() {
    // console.log('je suis created');
    this.recipes = await recipeService.loadRecipes();
    // console.log(this.recipes);

  }
}
</script>

<style lang="scss">
ul{
  list-style-type:none;
}
</style>
