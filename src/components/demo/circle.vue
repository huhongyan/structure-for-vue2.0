<template>
  <div style="margin: .5rem; height: 1.1rem; width: 1.1rem">
    <VueCircle :maxS="5" :callback="callback"></VueCircle>
  </div>
</template>
<script>
  import VueCircle from '../public/Circle.vue'
  export default{
    components:{
      VueCircle
    },
    methods: {
      callback: function () {
        // this指向当前vm
        console.log(this)
      }
    }
  }
</script>
