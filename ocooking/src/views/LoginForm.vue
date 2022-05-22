<template>
  <section>
    <form @submit="handleSubmit">
      <label for="">
        Login
        <input name="login" v-model="login" />
      </label>
      <!--
        https://fr.vuejs.org/v2/guide/conditional.html#v-else
        -->
      <div class="error" v-if="loginEmpty">
        vous devez saisir un idantifiant
      </div>
      <label for="">
        mot de passe
        <input name="pass" v-model="password" />
      </label>
      <div class="error" v-if="passwordEmpty">
        vous devez saisir un mot de passe
      </div>
      <div class="error" v-if="loginFailed">Echec de la connexion</div>
      <button>se connecter</button>
    </form>
  </section>
</template>

<script>
import userService from "../services/userService.js";
import storage from "../Plugins/storage.js";

export default {
  name: "LoginForm",
  components: {},
  data() {
    return {
      login: "",
      password: "",
      loginEmpty: false,
      passwordEmpty: false,
      loginFailed: false,
    };
  },
  methods: {
    async handleSubmit(evt) {
      evt.preventDefault();
      // alert("SUBMIT");
      // vérifications

      if (this.login == "") {
        this.loginEmpty = true;
      }
      if (this.password == "") {
        this.passwordEmpty = true;
      }

      if (!this.passwordEmpty && !this.loginEmpty) {
        let userData = await userService.login(this.login, this.password);
        console.log(userData);

        if (userData) {
          console.log("LOGIN SUCCESSFULL !! YATAAAA");
          storage.set("userData", userData);
        } else {
          console.log("LOGIN FAILED !!");
          this.loginFailed = true;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
}

label {
  padding: 2rem;
}

.error {
  background-color: red;
}
</style>