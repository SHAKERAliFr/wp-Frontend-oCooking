<template>
  <div id="app">
       <Header/>

       <RecipeList/>

       <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import RecipeList from './components/RecipeList.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    RecipeList
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
