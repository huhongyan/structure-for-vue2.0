/**
 * Created by Huhy on 2016/10/18.
 * loading相关
 */
import * as type from '../mutation-types'
export default {
  state: {
    show: false,
    text: ''
  },
  mutations: {
    [type.UPDATE_LOADING_SHOW] (state, payload) {
      state.show = payload.show
    },
    [type.UPDATE_LOADING_TEXT] (state, payload) {
      state.text = payload && payload.text
    }
  }
}
