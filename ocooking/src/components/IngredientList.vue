<template>
<select v-if="recipeIngredients.length"
    @change="handleChange"
    v-model="selectedOption">
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
          recipeIngredients: [],
          selectedOption: null,
      };
  },
  async created(){
      this.recipeIngredients = await recipeService.loadRecipesIngredients();
      console.log(this.recipeIngredients);
  },
  methods: {
      handleChange(evt){
          evt.preventDefault();
          // DOC VUESJS Event, envoyer un event : https://vuejs.org/v2/guide/components-custom-events.html
          this.$emit(
              'recipe-ingredient-selected',// nom de l'événement
              this.selectedOption// informations qui seront contenues dans l'event
          );
      }
  }

}
</script>

<style scoped lang="scss">

</style>