<template>
  <div style="padding: .2rem">
    <a href="javascript:;" v-on:click="trigger" class="weui-btn weui-btn_primary">局部的dialog</a>
    <VueDialog :config="dialog" :show="show"></VueDialog>
  </div>
</template>
<script>
  import VueDialog from '../public/Dialog.vue'
  export default{
    data(){
      return{
        money: 17,
        show: false
      }
    },
    computed: {
      // 局部的dialog配置
      dialog: function () {
        let vm = this;
        return {
          // 这里传递的文字是html
          html: `你兜里现在只有 <span class="fc-org">￥${this.money}</span> 元，完全不够啊 <br/> 快去充值吧`,
          // confirm表示主操作的按钮，绿色展示
          // cancel表示副操作的按钮，灰色展示
          // 可以根据需求传递按钮
          confirm: {
            text: '去充值',
            handler: function () {
              vm.show = false
            }
          },
          cancel: {
            text: '放弃',
            handler: function () {
              vm.show = false
            }
          }
        }
      }
    },
    components:{
      VueDialog
    },
    methods: {
      trigger(){
        this.show = !this.show
      }
    }
  }
</script>
