/**
 * Created by Huhy on 2016/10/18.
 */
/**
 * 更新loading的show
 * @type {string}
 */
export const UPDATE_LOADING_SHOW = 'UPDATE_LOADING_SHOW';
/**
 * 更新loading的提示信息
 * @type {string}
 */
export const UPDATE_LOADING_TEXT = 'UPDATE_LOADING_TEXT';
/**
 * 配置全局性的dialog
 * @type {string}
 */
export const CONFIG_GLOBAL_DIALOG = 'CONFIG_GLOBAL_DIALOG';
/**
 * 更新全局性的dialog的show
 * @type {string}
 */
export const UPDATE_GLOBAL_DIALOG_SHOW = 'UPDATE_GLOBAL_DIALOG_SHOW';
/**
 * 全局性的tips的成功状态
 * 默认为成功状态
 * @type {number}
 */
export const TIP_STATUS_SUCCESS = Symbol('TIP_STATUS_SUCCESS');
/**
 * 全局性的tips的错误状态
 * @type {number}
 */
export const TIP_STATUS_ERROR = Symbol('TIP_STATUS_ERROR');
/**
 * 设置全局tips的配置
 * 包括状态和文字
 * @type {string}
 */
export const SET_TIP_CONFIG = 'SET_TIP_CONFIG';
/**
 * 更新全局tips的显示
 * @type {string}
 */
export const UPDATE_TIP_SHOW = 'UPDATE_TIP_SHOW';

/**
 * 更新等待时间
 * @type {string}
 */
export const UPDATE_WAIT_MAXS = 'UPDATE_WAIT_MAXS';
/**
 * 更新等待状态
 * @type {string}
 */
export const UPDATE_WAIT_STATUS = 'UPDATE_WAIT_STATUS';
/**
 * 等待的读秒开始状态
 * @type {Symbol}
 */
export const WAIT_STATUS_START = Symbol('WAIT_STATUS_START');
/**
 * 等待的读秒结束状态
 * @type {Symbol}
 */
export const WAIT_STATUS_STOP = Symbol('WAIT_STATUS_STOP');
/**
 * 重新开始读秒状态
 * @type {Symbol}
 */
export const WAIT_STATUS_RESTART = Symbol('WAIT_STATUS_RESTART');
