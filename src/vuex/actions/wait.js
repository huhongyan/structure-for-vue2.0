/**
 * Created by Huhy on 2016/10/25.
 */
import * as type from '../mutation-types'

/**
 * 改变等待状态
 * @param commit
 * @param status
 */
export const updateWaitStatus = function ({ commit }, status) {
  commit(type.UPDATE_WAIT_STATUS, { status })
};

/**
 * 改变等待时间
 * @param commit
 * @param maxS
 */
export const updateWaitMaxS = function ({ commit }, maxS) {
  commit(type.UPDATE_WAIT_STATUS, { maxS })
};
