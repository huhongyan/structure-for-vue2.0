<template>
  <div class="weui-cells">
    <router-link v-for="item in list" :to="item.route" class="weui-cell weui-cell_access">
      <div class="weui-cell__bd">
        <p>{{item.text}}</p>
      </div>
      <div class="weui-cell__ft">
      </div>
    </router-link>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        list: [{
          route: {
            name: 'dialog'
          },
          text: '去看看dialog组件的效果'
        },{
          route: {
            name: 'globalDialog'
          },
          text: '去看看globalDialog组件的效果'
        },{
          route: {
            name: 'loading'
          },
          text: '去看看loading组件的效果'
        },{
          route: {
            name: 'tips'
          },
          text: '去看看tips组件的效果'
        },{
          route: {
            name: 'circle'
          },
          text: '去看看circle组件的效果'
        }]
      }
    }
  }
</script>
