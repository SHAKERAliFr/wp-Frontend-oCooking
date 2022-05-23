<template>
  <section>
    <h1>Vous êtes a présent déconnecté.</h1>
    <p>Vous allez etre redirigés vers la page d'accueil</p>
  </section>
</template>

<script>
import storage from "../plugins/storage.js";

export default {
  name: "LogOut",
  components: {},
  created() {
    // je veux supprimer l'entrée "userData" dans localstorage, j'utilise donc le plugin "storage" et plus précisement sa methode "unset".
    // attention pour pouvoir supprimer un "tirroir" du localStorage il faut préciser son nom, dans notre cas il faudra supprimer le tirroir "userData"
    storage.unset("userData");
  },
};
</script>

<style scoped lang="scss">
</style>