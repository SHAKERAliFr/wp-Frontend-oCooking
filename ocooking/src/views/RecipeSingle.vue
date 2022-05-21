<template>
  <!--! ATTENTION
    Sans le v-if="recipe" je vais avoir une erreur coté console, en effet, la section template va s'afficher un peu trop tot, ne laissant pas le temps de récupération de la recette dans la data recipe
     -->
  <article class="card" v-if="recipe">
    <img :src="getImageURL" alt="" />
    <h2>{{ recipe.type }}</h2>
    <div class="card__content" v-html="recipe.content.rendered"></div>

    <router-link
      :to="{
        name: 'home',
      }"
    >
      Revenir a l'accueil
    </router-link>
  </article>
</template>

<script>
import recipeService from "../services/recipeService";

export default {
  name: "RecipeSingle",
  components: {},
  data() {
    return {
      recipeId: null, // pour récupérer la partie dynamique de l'URL
      recipe: null, // pour récupérer toutes les infos de la recette
    };
  },
  async created() {
    // récupération de la partie dynamique de l'URL
    this.recipeId = this.$route.params.id;
    this.recipe = await recipeService.getRecipesById(this.recipeId);
    console.log(this.recipe);
  },
  computed: {
    // ici je vais ranger les fonctions qui vont me permettre de "remplir" des attributs
    getImageURL() {
      // Si le "tirroir" wp:featuredmedia existe bien
      if (this.recipe._embedded["wp:featuredmedia"]) {
        // on va renvoyer le contenu de ce dernier
        return this.recipe._embedded["wp:featuredmedia"][0].source_url;
      } else {
        // sinon on renvoi une image random
        return "https://picsum.photos/200/300";
      }
    },
  },
};
</script>

<style scoped lang="scss">
</style>