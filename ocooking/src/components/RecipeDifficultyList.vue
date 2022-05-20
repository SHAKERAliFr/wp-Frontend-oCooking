<template>
<!--V-MODEL : Pour lier la valeur d'un élement html de formulaire avec un "data" du composant-->
<select v-if="recipeDifficulty.length"
         @change="handelChange"
         v-model="selectedOption"
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
  name: 'RecipeDifficultyList',
  components: {
  },
  data(){
      return{
           recipeDifficulty: [],
           selectedOption: null,
      };
  },
  async created(){
      this.recipeDifficulty= await recipeService.loadRecipesDifficulty();
  },
  methods: {
      handelChange(evt){
    evt.preventDefault();
     this.$emit(
              'recipe-difficulty-selected',// nom de l'événement
              this.selectedOption// informations qui seront contenues dans l'event
          );
      }
  }
  
}
</script>

<style scoped lang="scss">
</style>