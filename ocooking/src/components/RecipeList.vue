<template>
  <section>
    <h1>Recettes</h1>
    <div>
      <RecipeTypeList v-on:recipe-type-selected="handleRecipeTypeSelected" />
      <IngredientList
        v-on:recipe-ingredient-selected="handleRecipeIngredientSelected"
      />
      <RecipeDifficultyList
        v-on:recipe-difficulty-selected="handleRecipeDifficultySelected"
      />
    </div>
    <ul>
      <li v-for="recipe in recipes" :key="recipe.id">
        <RecipeCard :recipeProps="recipe" />
      </li>
    </ul>
  </section>
</template>

<script>
import RecipeCard from "./RecipeCard.vue";
import RecipeTypeList from "./RecipeTypeList.vue";
import RecipeDifficultyList from "./RecipeDifficultyList.vue";
import IngredientList from "./IngredientList.vue";
import recipeService from "../services/recipeService.js";

export default {
  name: "RecipeList",
  components: {
    RecipeCard,
    RecipeTypeList,
    IngredientList,
    RecipeDifficultyList,
  },
  data() {
    return {
      recipes: [],
    };
  },
  async created() {
    // console.log('je suis created');
    this.recipes = await recipeService.loadRecipes();
    // console.log(this.recipes);
  },
  methods: {
    async handleRecipeTypeSelected(selectedType) {
      //alert('Je suis dans handleRecipeType');
      //alert('et j\'ai reçu : ' + selectedType);
      // vérification si un type a été sélectionné
      if (parseInt(selectedType)) {
        // event bubbling, je continue de passer la "patate chaude" au dessus (j'emmet un event custom pour permettre au composant parent de le capter si nécessaire)
        this.$emit("recipe-type-selected", selectedType);
        this.recipes = await recipeService.getRecipesByType(selectedType);

        if (this.recipes.length == 0) {
          alert("pas de recettes");
          this.recipes = await recipeService.loadRecipes();
        }
      } else {
        this.recipes = await recipeService.loadRecipes();
      }
    },
    async handleRecipeIngredientSelected(selectedIngredient) {
      if (parseInt(selectedIngredient)) {
        this.$emit("ingredient-selected", selectedIngredient);
        this.recipes = await recipeService.getRecipesByIngredient(
          selectedIngredient
        );
      } else {
        this.recipes = await recipeService.loadRecipes();
      }
    },
    async handleRecipeDifficultySelected(selectedDifficulty) {
      if (parseInt(selectedDifficulty)) {
        this.$emit("difficulty-selected", selectedDifficulty);
        this.recipes = await recipeService.getRecipesByDifficulty(
          selectedDifficulty
        );
      } else {
        this.recipes = await recipeService.loadRecipes();
      }
    },
  },
};
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
}
</style>
