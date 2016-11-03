<template>
  <div v-bind:class="{'fs-16': text}" v-show="show">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
        <i class="weui-loading weui-icon_toast"></i>
        <p class="weui-toast__content">{{text}}</p>
      </div>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default{
    computed: mapGetters({
      'show': 'globalLoadingShow',
      'text': 'globalLoadingText'
    })
  }
</script>
