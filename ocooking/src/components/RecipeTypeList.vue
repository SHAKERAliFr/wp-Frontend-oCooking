<template>
<!--V-MODEL : Pour lier la valeur d'un élement html de formulaire avec un "data" du composant-->
<select v-if="recipeTypes.length">
    
    <option 
        v-for="type in recipeTypes"
        :key="type.id"
        :value="type.id"
    
    >
        {{type.name}}
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
          recipeTypes: [],
          // selectedOption: null
      };
  },
  async created(){
      this.recipeTypes = await recipeService.loadRecipesTypes();
  },
  
}
</script>

<style scoped lang="scss">
</style>