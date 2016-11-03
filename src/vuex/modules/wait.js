/**
 * Created by Huhy on 2016/10/25.
 */
import * as type from '../mutation-types'
export default {
  state: {
    status: type.WAIT_STATUS_START,
    maxS: 60
  },
  mutations: {
    [type.UPDATE_WAIT_MAXS] (state, payload) {
      state.maxS = payload.maxS
    },
    [type.UPDATE_WAIT_STATUS] (state, payload) {
      state.status = payload.status
    }
  }
}
