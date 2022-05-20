<template>
<!--V-MODEL : Pour lier la valeur d'un élement html de formulaire avec un "data" du composant-->
<select 
  >
    
    <option 
        v-for="difficulty in recipeDifficulty"
        :key="difficulty.id"
        :value="difficulty.id"
    
    >
        {{difficulty.name}}
    </option>
</select>
</template>

<script>
import recipeService from '../services/recipeService';
export default {
  name: 'RecipeTypeList',
  components: {
  },
  data(){
      return{
           recipeDifficulty: [],
          // selectedOption: null
      };
  },
  async created(){
      this.recipeDifficulty= await recipeService.loadRecipesDifficulty();
  },
  
}
</script>

<style scoped lang="scss">
</style>