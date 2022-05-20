<template>
<!--V-MODEL : Pour lier la valeur d'un élement html de formulaire avec un "data" du composant-->
<select v-if="recipeTypes.length"
    @change="handleChange"
    v-model="selectedOption">
    
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
          selectedOption: null
      };
  },
  async created(){
      this.recipeTypes = await recipeService.loadRecipesTypes();
  },
  methods: {
      handleChange(evt){
          evt.preventDefault();
          // DOC VUESJS Event, envoyer un event : https://vuejs.org/v2/guide/components-custom-events.html
          this.$emit(
              'recipe-type-selected',// nom de l'événement
              this.selectedOption// informations qui seront contenues dans l'event
          );
      }
  }
}
</script>

<style scoped lang="scss">
</style>