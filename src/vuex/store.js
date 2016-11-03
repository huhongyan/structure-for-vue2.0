/**
 * Created by Huhy on 2016/10/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import getters from './getters'
import actions from './actions'
import loading from './modules/loading'
import dialog from './modules/dialog'
import tip from './modules/globalTip'
import wait from './modules/wait'
export default new Vuex.Store({
  getters,
  actions,
  modules:{
    loading,
    dialog,
    tip,
    wait
  },
  strict: process.env.NODE_ENV !== 'production'
})
