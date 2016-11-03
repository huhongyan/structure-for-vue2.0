<template>
  <div style="padding: .2rem">
    <a href="javascript:;" v-on:click="trigger" class="weui-btn weui-btn_primary">全局的dialog</a>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        money: 17
      }
    },
    computed: {
      // 通常情况下，使用全局的dialog提示，公用一个dialog
      config: function() {
        let vm = this;
        return {
          html: `你兜里现在只有 <span class="fc-org">￥${vm.money}</span> 元，完全不够啊 <br/> 快去充值吧`,
          confirm: {
            text: '去充值',
            handler: function () {
              vm.$store.dispatch('hideDialog')
            }
          },
          cancel: {
            text: '就不充',
            handler: function () {
              vm.$store.dispatch('hideDialog')
            }
          }
        }
      }
    },
    methods: {
      trigger(){
        // 通常情况下，使用全局的dialog提示，公用一个dialog
        // config使用已经定义好的对象，为的是不重复替换内容一样的对象
        // 如果config的内容有修改，传入一个新的对象
        this.$store.dispatch('showDialog', { config: this.config });
      }
    }
  }
</script>
