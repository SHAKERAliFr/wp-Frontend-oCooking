<template>
<select>
    <option  
        v-for="ingredient in recipeIngredients"
        :key="ingredient.id"
        :value="ingredient.id" 
    >
        {{ingredient.name}}
    </option>
</select>
</template>

<script>
import recipeService from '../services/recipeService';


export default {
  name: 'IngredientList',
  components: {

  },
  data(){
      return{
          recipeIngredients: []
      };
  },
  async created(){
      this.recipeIngredients = await recipeService.loadRecipesIngredients();
      console.log(this.recipeIngredients);
  }
}
</script>

<style scoped lang="scss">

</style>