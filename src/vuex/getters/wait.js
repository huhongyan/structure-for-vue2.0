/**
 * Created by Huhy on 2016/10/25.
 */
/**
 * 获取等待的状态
 * @param wait
 */
export const waitStatus = ({wait}) => wait.status;
/**
 * 获取等待接单的读秒数
 * @param wait
 */
export const waitMaxS = ({wait}) => wait.maxS;
