<style lang="less">
.tips-wrap{
  .weui-icon-warn{
    font-size: 50px;
    margin-bottom: 10px;
  }
  .weui-toast{
    z-index: 5002;
  }
}
</style>
<template>
  <transition name="fade">
    <div class="tips-wrap" v-bind:class="{'fs-16': text}" v-show="isShow">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
        <i v-if="status" class="weui-icon-success-no-circle weui-icon_toast"></i>
        <i v-else class="weui-icon-warn weui-icon_msg weui-icon_toast"></i>
        <p class="weui-toast__content">{{text}}</p>
      </div>
    </div>
  </transition>
</template>
<script>
  import * as type from '../../vuex/mutation-types'
  import { mapGetters } from 'vuex'
  export default{
    computed: {
      text: function () {
        return this.config.text
      },
      status: function () {
        return this.config.status === type.TIP_STATUS_SUCCESS
      },
      isShow: function () {
        let val = this.show;
        if(val) {
          let vm = this;
          setTimeout(()=> {
            vm.$store.dispatch('hideTips')
          }, 1000)
        }
        return val
      },
      ...mapGetters({
        'show': 'globalTipShow',
        'config': 'globalTipConfig'
      })
    }
  }
</script>
