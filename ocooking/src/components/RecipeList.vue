<template>
  <section>
       <h1>Recettes</h1>
        <div>
            <RecipeTypeList />
            <IngredientList />
            <RecipeDifficultyList />
        </div>
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
import RecipeTypeList from './RecipeTypeList.vue';
import RecipeDifficultyList from './RecipeDifficultyList.vue';
import IngredientList from './IngredientList.vue';
import recipeService from '../services/recipeService.js';

export default {
  name: 'RecipeList',
  components: {
    RecipeCard,
    RecipeTypeList,
    IngredientList,
    RecipeDifficultyList
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
