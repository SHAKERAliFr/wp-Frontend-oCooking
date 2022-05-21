<template>
  <header>
    <router-link
      :to="{
        name: 'home',
      }"
    >
      <img class="logo" src="../assets/images/oven.svg" alt="" />
    </router-link>
    <span>10Minutes</span>
    <span>O'Four</span>
  </header>
</template>

<script>
export default {
  name: "Header-page",
  components: {},
};
</script>

<style lang="scss">
header {
  .logo {
    height: 5rem;
  }
}
</style>
