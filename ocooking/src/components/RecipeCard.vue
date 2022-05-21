<template>
  <article class="card">
    <img :src="getImageURL" alt="" />
    <h2>{{ recipeProps.title.rendered }}</h2>
    <div class="card__content" v-html="recipeProps.excerpt.rendered"></div>

    <router-link
      class="Router-link"
      :to="{
        name: 'recipe',
        params: {
          id: recipeProps.id,
        },
      }"
    >
      <span>Lire la suite</span>
    </router-link>
  </article>
</template>

<script>
export default {
  name: "RecipeCard",
  components: {},

  props: {
    recipeProps: Object,
  },
  created() {
    console.log(this.recipeProps);
  },

  computed: {
    // ici je vais ranger les fonctions qui vont me permettre de "remplir" des attributs html
    getImageURL() {
      // Si le "tirroir" wp:featuredmedia existe bien
      if (this.recipeProps._embedded["wp:featuredmedia"]) {
        // on va renvoyer le contenu de ce dernier
        return this.recipeProps._embedded["wp:featuredmedia"][0].source_url;
      } else {
        // sinon on renvoi une image random
        return "https://picsum.photos/150/100";
      }
    },
  },
};
</script>

<style lang="scss">
.Router-link {
  text-decoration: none;
}
:hover.Router-link {
  color: coral;
}
</style>
