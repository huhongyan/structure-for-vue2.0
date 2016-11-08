<style lang="less">
  .wrap-circle{
    position: relative;
    height: 100%;
    width: 100%;
    .circle-content{
      width: 100%;
      text-align: center;
      font-size: 16px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
<template>
  <div class="wrap-circle">
    <svg viewBox="0 0 100 100">
      <path d="M 50,50 m 0,-47
      a 47,47 0 1 1 0,94
      a 47,47 0 1 1 0,-94" stroke="#ececec" stroke-width="6" fill-opacity="0"></path>
      <path stroke-linecap="round" fill-opacity="0" d="M 50,50 m 0,-47
      a 47,47 0 1 1 0,94
      a 47,47 0 1 1 0,-94" stroke="#FF6600" stroke-width="6"
            v-bind:style="stroke"></path>
    </svg>
    <div class="circle-content">{{due}}S</div>
  </div>
</template>
<script>
  import * as type from '../../vuex/mutation-types'
  import { mapGetters } from 'vuex'
  export default{
    created(){
      let maxS = this.waitMaxS;
      this.due = maxS;
      this.change((new Date).getTime(), maxS, maxS)
    },
    data(){
      return {
        stroke: {
          'stroke-dasharray': '295.31, 295.31',
          'stroke-dashoffset': '0',
          'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
        },
        due: 0,
        timer: ''
      }
    },
    computed: mapGetters([
      'waitStatus',
      'waitMaxS'
    ]),
    watch: {
      'waitStatus': function (val) {
        let vm = this;
        if(val === type.WAIT_STATUS_START)
          // 继续之前的读秒
          vm.change((new Date).getTime(), vm.due, vm.waitMaxS);
        else if(val === type.WAIT_STATUS_RESTART) {
          clearTimeout(vm.timer);
          // 重新开始读秒
          let maxS = vm.waitMaxS;
          vm.due = maxS;
          this.$store.dispatch('updateWaitStatus', type.WAIT_STATUS_START)
        }
      }
    },
    methods: {
      change(startTime,initS, maxS){
        let vm = this,
            curTime = (new Date).getTime(),
            interval = (curTime - startTime)/1000;
        if(interval > 0){
          --initS;
          startTime += 1000;
          if(initS > 0) {
            vm.due = initS;
            vm.stroke['stroke-dashoffset'] = (maxS - initS)/maxS * 295.31
          }else {
            vm.due = 0;
            vm.stroke['stroke-dashoffset'] = 295.31;
            return ;
          }
        }
        if(vm.waitStatus !== type.WAIT_STATUS_STOP) vm.timer = setTimeout(function () {
          vm.change(startTime,initS, maxS);
        }, 100);
      }
    }
  }
</script>
