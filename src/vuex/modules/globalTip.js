/**
 * Created by Huhy on 2016/10/21.
 */
import * as type from '../mutation-types'
export default {
  state: {
    show: false,
    status: type.TIP_STATUS_SUCCESS,
    text: ''
  },
  mutations: {
    [type.SET_TIP_CONFIG] (state, payload) {
      state.status = payload.status;
      state.text = payload.text
    },
    [type.UPDATE_TIP_SHOW] (state, payload) {
      state.show = payload.show
    }
  }
}
