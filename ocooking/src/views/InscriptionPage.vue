<template>
  <section>
    <h1>Inscription</h1>
    <form @submit="handleSubmit">
      <label> Nom d'utilisateur </label>
      <input v-model="username" name="username" />
      <div class="error" v-if="usernameEmpty">
        Vous devez saisir un nom d'utilisateur
      </div>

      <label> Adresse e-mail </label>
      <input v-model="email" name="email" />
      <div class="error" v-if="emailEmpty">Vous devez saisir un email</div>

      <label> Mot de passe </label>
      <input v-model="password" type="password" name="password" />
      <div class="error" v-if="passwordEmpty">
        Vous devez saisir un password
      </div>
      <div class="error" v-if="passwordTooShort">
        Le mot de passe doit faire 8 caractères au minimum
      </div>

      <label> Confirmez le mot de passe </label>
      <input v-model="passwordVerify" type="password" name="passwordVerify" />
      <div class="error" v-if="passwordVerifyEmpty">
        Vous devez confirmer le mot de passe
      </div>

      <div class="error" v-if="passwordConfirm">
        Les mots de passe ne correspondent pas.
      </div>

      <button>S'enregistrer</button>
    </form>
  </section>
</template>

<script>
import userService from "../services/userService.js";

export default {
  name: "InscriptionPage",
  components: {},
  data() {
    return {
      username: "",
      email: "",
      password: "",
      passwordVerify: "",
      usernameEmpty: false,
      emailEmpty: false,
      passwordEmpty: false,
      passwordTooShort: false,
      passwordVerifyEmpty: false,
      passwordConfirm: false,
    };
  },
  methods: {
    async handleSubmit(evt) {
      evt.preventDefault();
      //alert('SUBMIT');
      if (this.username == "") {
        this.usernameEmpty = true;
      }

      if (this.email == "") {
        this.emailEmpty = true;
      }

      if (this.password == "") {
        this.passwordEmpty = true;
      }

      if (this.passwordVerify == "") {
        this.passwordVerifyEmpty = true;
      }

      if (this.password.length < 8) {
        this.passwordTooShort = true;
      }

      if (this.password !== this.passwordVerify) {
        this.passwordConfirm = true;
      }

      //si tout s'est bien passé
      if (
        !this.usernameEmpty &&
        !this.emailEmpty &&
        !this.passwordEmpty &&
        !this.passwordVerifyEmpty &&
        !this.passwordTooShort &&
        !this.passwordConfirm
      ) {
        console.log("Appel de l'API pour s'inscrire");
        let result = await userService.inscription(
          this.username,
          this.email,
          this.password
        );
        // si tout s'est bien passé je redirige vers la page login
        console.log(result);
        if (result) {
          if (result.success == true) {
            this.$router.push({ name: "login" });
          }
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
form {
  //border: 1px solid #f0f;
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  padding: 1rem;
}

label,
button {
  margin-top: 2rem;
}

input {
  margin-top: 0.5rem;
}

.error {
  font-weight: 500;
  color: red;
}
</style>