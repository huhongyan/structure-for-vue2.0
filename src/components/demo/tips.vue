<template>
  <div style="padding: .2rem">
    <a href="javascript:;" v-on:click="trigger" class="weui-btn weui-btn_primary">成功</a>
    <a href="javascript:;" v-on:click="trigger3" class="weui-btn weui-btn_primary">没有文字的成功</a>
    <a href="javascript:;" v-on:click="trigger2" class="weui-btn weui-btn_warn">出现了错误</a>
    <a href="javascript:;" v-on:click="trigger4" class="weui-btn weui-btn_warn">没有文字的失败提示</a>
  </div>
</template>
<script>
  import * as type from '../../vuex/mutation-types'
  export default{
    methods: {
      trigger(){
        this.$store.dispatch('showTips', {
          status: type.TIP_STATUS_SUCCESS,
          text: '成功'
        });
      },
      trigger2(){
        this.$store.dispatch('showTips', {
          status: type.TIP_STATUS_ERROR,
          text: '失败了'
        });
      },
      trigger3(){
        this.$store.dispatch('showTips', {
          status: type.TIP_STATUS_SUCCESS
        });
      },
      trigger4(){
        this.$store.dispatch('showTips', {
          status: type.TIP_STATUS_ERROR
        });
      }
    }
  }
</script>
