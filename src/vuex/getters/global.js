/**
 * Created by Huhy on 2016/10/24.
 */

/**
 * 获取loading的show
 * @param state
 */
export const globalLoadingShow = (state) => state.loading.show;
/**
 * 获取loading的text
 * @param state
 */
export const globalLoadingText = (state) => state.loading.text;
/**
 * 获取dialog的配置
 * @param dialog
 */
export const globalDialogConifg = ({dialog}) => {
  return {
    html: dialog.html,
    confirm: dialog.confirm,
    cancel: dialog.cancel
  }
};
/**
 * 获取dialog的show
 * @param state
 */
export const globalDialogShow = (state) => state.dialog.show;
/**
 * 获取tips的show
 * @param state
 */
export const globalTipShow = (state) => state.tip.show;
/**
 * 获取tips的状态和文字
 * @param tip
 * @returns {{}}
 */
export const globalTipConfig = ({tip}) => {
  return {
    status: tip.status,
    text: tip.text
  }
};
