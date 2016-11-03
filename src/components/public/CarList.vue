<style lang="less">
@import "../../assets/css/lib/icon";
.icon-car{
  width: 33%;
  height: .8rem;
  display: inline-block;;
}

</style>
<template>
  <div class="icon-car" v-bind:class="iconClass">
    {{carTypeName}}
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    components:{

    },
    props:['carType','carTypeName'],
    computed:{
      iconClass: function(){
        switch (this.carType) {
          // 1 星星车
          case 1: return 'icon-car-star';
            break;
          // 2 舒适型
          case 2: return 'icon-car-suit';
            break;
          // 3 七座商务型
          case 3: return 'icon-car-business';
            break;
          // 4 豪华型
          case 4: return 'icon-car-luxurious';
            break;
          default: return 'icon-car-star';

        }
      }
    }
  }
</script>
