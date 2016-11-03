<template>
  <transition name="fade">
    <div class="js_dialog" v-show="show">
      <div class="weui-mask"></div>
      <div class="weui-dialog">
        <div class="weui-dialog__bd" v-html="config.html"></div>
        <div class="weui-dialog__ft">
          <a href="javascript:;" v-if="cancel" class="weui-dialog__btn weui-dialog__btn_default"
             v-on:click="cancel.handler()">{{cancel.text}}</a>
          <a href="javascript:;" v-if="confirm" class="weui-dialog__btn weui-dialog__btn_primary"
             v-on:click="confirm.handler()">{{confirm.text}}</a>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default{
    props:{
      'config': {
        type: Object,
        default: {}
      },
      'show': {
        type: Boolean,
        default: false
      }
    },
    computed: {
      cancel: function () {
        return this.config && this.config.cancel
      },
      confirm: function () {
        return this.config && this.config.confirm
      }
    }
  }
</script>
