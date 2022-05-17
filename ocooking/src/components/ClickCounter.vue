<template>
  <button @click="handelclick" :class="parity">{{label}} : {{clickCounte}}</button>
</template>

<script>
export default {
  name: 'ClickCounter',
  components: {
    
  },

  props: {
      label: String,
  },
  data () {
      return{
       clickCounte:0,
       parity:'even'
      };
  },
  methods: {
     handelclick: function () {
         this.clickCounte++;
         if(this.clickCounte % 2 == 0){
             this.parity='even';
        }else {
            this.parity='odd';
        }

     }

  }


}
</script>

<style lang="scss">
button{
    margin-left: 1rem;
    background-color: coral;
    transition:all Is ease-in-out;
    &.odd{
        background-color:aqua;
        transform: rotate(355deg); 
    }
    &.even{
        background-color:aquamarine;
       
       }
}
</style>
  