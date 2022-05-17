<template>
  <div id="app">
    <h1>App Click</h1>
    <clickCounter label="j'aime le php"/>
    <clickCounter label=" j'aime le js"/>
   
  </div>
</template>

<script>
import ClickCounter from './components/ClickCounter.vue'

export default {
  name: 'AppClick',
  components: {
    ClickCounter,
  }
}
</script>

<style lang="scss">

</style>
