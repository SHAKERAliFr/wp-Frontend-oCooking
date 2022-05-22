<template>
  <section>
    <h1>USER HOME</h1>
  </section>
</template>

<script>
import userService from "../services/userService.js";

export default {
  name: "UserHome",
  components: {},
  async created() {
    //on envoi le token a l'api pour voir si il est valide ou non
    // (donc si je suis bien connecté ou non)
    // et si le token n'est pas valide on sera redirigé vers la page login
    const isTokenValid = await userService.isConnected();
    if (!isTokenValid) {
      this.$router.push({ name: "login" });
    }
  },
};
</script>

<style scoped lang="scss">
</style>