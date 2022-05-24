<template>
  <section>
    <h1>Nouvelle recette</h1>
    <form @submit="handleSubmit">
      <div>
        <label>
          Titre de la recette
          <input v-model="title" name="title" />
        </label>
      </div>

      <!--Type de recette-->
      <div>
        <!--On va boucler sur la div ci dessous ...-->
        <label>Typede la recette </label>
        <div v-for="type in types" :key="type.id">
          <input
            type="radio"
            name="type"
            :value="type.id"
            v-model="selectedType"
          />
          {{ type.name }}
        </div>
      </div>

      <div>
        <div v-for="difficulty in difficultis" :key="difficulty.id">
          <label>
            <input
              type="radio"
              name="Difficulty"
              :value="difficulty.id"
              v-model="selectedDifficulty"
            />
            {{ difficulty.name }}
          </label>
        </div>
      </div>

      <!--Ingredients-->
      <div>
        <!--On va boucler sur la div ci dessous ...-->
        <div v-for="ingredient in ingredients" :key="ingredient.id">
          <label>
            <input
              type="checkbox"
              name="ingredient"
              :value="ingredient.id"
              v-model="selectedIngredients"
            />
            {{ ingredient.name }}
          </label>
        </div>
      </div>

      <div>
        <label>
          Description
          <textarea name="description"></textarea>
        </label>
      </div>

      <div v-if="createFail" class="error">Une erreur est survenue.</div>

      <div>
        <button>Enregistrer</button>
      </div>
    </form>
  </section>
</template>

<script>
import recipeService from "../services/recipeService.js";
import userService from "../services/userService.js";

export default {
  name: "RecipeCreate",
  components: {},

  data() {
    return {
      ingredients: [],
      types: [],
      difficultis: [],
      title: "",
      description: "",
      selectedType: null,
      selectedDifficulty: null,
      selectedIngredients: [],
      createFail: false,
    };
  },

  async created() {
    //on envoi le token a l'api pour voir si il est valide ou non
    // (donc si je suis bien connecté ou non)
    // et si le token n'est pas valide on sera redirigé vers la page login
    const isTokenValid = await userService.isConnected();
    if (!isTokenValid) {
      this.$router.push({ name: "login" });
    }

    this.loadIngredients();
    this.loadTypes();
    this.loadDifficulty();
  },
  methods: {
    async loadIngredients() {
      this.ingredients = await recipeService.loadRecipesIngredients();
    },
    async loadTypes() {
      this.types = await recipeService.loadRecipesTypes();
    },
    async loadDifficulty() {
      this.difficultis = await recipeService.loadRecipesDifficulty();
    },
    handleSubmit(evt) {
      evt.preventDefault();
      alert("yataaa");
      /*const result = await recipeService.saveRecipe(
              this.title,
              this.selectedType,
              this.description,
              this.selectedIngredients
          );

          if(result){
              this.$router.push({name:'home'});
          } else {
              this.createFail = true;
          }
          */
    },
  },
};
</script>

<style scoped lang="scss">
</style>