<template>
  <div style="padding: .2rem">
    <a href="javascript:;" v-on:click="trigger" class="weui-btn weui-btn_primary">全局的dialog</a>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        msg:'hello vue'
      }
    },
    methods: {
      trigger(){
        let vm = this;
        // text 为loading框下方的文字，可以不传
        // 在发请求的时候，会拦截自动添加loading
        vm.$store.dispatch('showLoading', {text: '数据加载中'});
        setTimeout(()=>{
          vm.$store.dispatch('hideLoading')
        }, 5000)
      }
    }
  }
</script>
