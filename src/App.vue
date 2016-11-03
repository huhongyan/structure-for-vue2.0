<template>
  <!-- 根组件 提供路由，loading, 公共提示 -->
  <div id="app">
    <router-view></router-view>
    <VueDialog :config="dialog" :show="show"></VueDialog>
    <Loading></Loading>
    <Tips></Tips>
  </div>
</template>
<script>
  import VueDialog from './components/public/Dialog.vue'
  import Loading from './components/public/Loading.vue'
  import Tips from './components/public/Tips.vue'
  import { mapGetters } from 'vuex'
  export default{
    computed: mapGetters({
      dialog: 'globalDialogConifg',
      show: 'globalDialogShow'
    }),
    components:{
      VueDialog,
      Loading,
      Tips
    }
  }
</script>
