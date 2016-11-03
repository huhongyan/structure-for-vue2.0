<template>
  <div>
    <div style="margin: 1rem auto; height: 2rem; width: 2rem">
      <VueCircle></VueCircle>
    </div>
    <div class="btn-bottom-wrap">
      <button type="button" class="weui-btn weui-btn_primary" @click="stop">Stop</button>
      <button type="button" class="weui-btn weui-btn_org" @click="start">Start</button>
      <button type="button" class="weui-btn weui-btn_default" @click="restart">ReStart</button>
    </div>
  </div>
</template>
<script>
  import VueCircle from '../public/Circle.vue'
  import { mapGetters, mapActions } from 'vuex'
  import * as type from '../../vuex/mutation-types'
  export default{
    components:{
      VueCircle
    },
    methods: {
      ...mapActions([
        'updateWaitStatus',
        'updateWaitMaxS'
      ]),
      stop() {
        this.updateWaitStatus(type.WAIT_STATUS_STOP)
      },
      start(){
        this.updateWaitStatus(type.WAIT_STATUS_START)
      },
      restart(){
        this.updateWaitStatus(type.WAIT_STATUS_RESTART)
      }
    }
  }
</script>
