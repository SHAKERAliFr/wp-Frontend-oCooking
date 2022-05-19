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
     handelclick: function (evt) {
         evt.preventDefault();
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

<style scoped lang="scss">
button{
    margin-left: 1rem;
    background-color: aquamarine;
    transition: all ls ease-in-out;
   
    &.odd{
        background-color:aqua;
        transform: rotate(360deg); 
    }
    &.even{
        background-color:coral;
       
       }
}
</style>
  