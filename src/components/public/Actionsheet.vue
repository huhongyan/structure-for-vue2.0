<style lang="less">
  @import "../../assets/css/weui-ext";
  .wrap-actsheet{
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
<template>
  <transition name="fade">
    <div class="wrap-actsheet" v-show='show'>
            <div class="weui-mask" id="iosMask" style="opacity: 1;" @click='cancel.handler()'></div>
            <div class="weui-actionsheet weui-actionsheet_toggle" id="iosActionsheet">
                <div class="weui-actionsheet__menu">
                    <div class="weui-actionsheet__cell" @click="confirm.handler()">{{confirm.text}}</div>
                </div>
                <div class="weui-actionsheet__action">
                    <div class="weui-actionsheet__cell" @click="cancel.handler()">{{cancel.text}}</div>
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
        default: true
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
