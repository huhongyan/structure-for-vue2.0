/**
 * Created by Huhy on 2016/10/19.
 * 全局性的dialog
 */
import * as type from '../mutation-types'
export default {
  state: {
    show: false,
    html: '',
    confirm: null,
    cancel: null
  },
  mutations: {
    [type.CONFIG_GLOBAL_DIALOG] (state, payload) {
      state.html = payload.html;
      state.confirm = payload.confirm;
      state.cancel = payload.cancel
    },
    [type.UPDATE_GLOBAL_DIALOG_SHOW] (state, payload) {
      state.show = payload.show
    }
  }
}
