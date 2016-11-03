/**
 * Created by Huhy on 2016/10/24.
 */
import * as type from '../mutation-types'

/**
 * 显示loading
 * @param commit
 * @param text  loading
 */
export const showLoading = function ({ commit }, text) {
  commit(type.UPDATE_LOADING_TEXT, text);
  commit(type.UPDATE_LOADING_SHOW, { show: true })
};

/**
 * 隐藏loading
 * @param commit
 */
export const hideLoading = function ({ commit }) {
  commit(type.UPDATE_LOADING_SHOW, {
    show: false
  })
};

/**
 * 配置全局的dialog
 * @param commit
 * @param html
 * @param confirm
 * @param cancel
 */
export const configDialog = function ({ commit }, {html, confirm, cancel}) {
  commit(type.CONFIG_GLOBAL_DIALOG, {
    html: html,
    confirm: confirm,
    cancel: cancel
  })
};

/**
 * 显示dialog
 * @param commit
 * @param config
 */
export const showDialog = function ({ commit }, {config}) {
  if(config) commit(type.CONFIG_GLOBAL_DIALOG, {
    html: config.html,
    confirm: config.confirm,
    cancel: config.cancel
  });
  commit(type.UPDATE_GLOBAL_DIALOG_SHOW, { show: true })
};

/**
 * 隐藏dialog
 * @param commit
 */
export const hideDialog = function ({ commit }) {
  commit(type.UPDATE_GLOBAL_DIALOG_SHOW, {
    show: false
  })
};

/**
 * 显示全局的tips
 * @param commit
 * @param status
 * @param text
 */
export const showTips = function ({ commit }, {status, text}) {
  commit(type.UPDATE_TIP_SHOW, { show: true });
  commit(type.SET_TIP_CONFIG, { status, text })
};

/**
 * 隐藏全局的tips
 * @param commit
 */
export const hideTips = function ({ commit }) {
  commit(type.UPDATE_TIP_SHOW, { show: false })
};
