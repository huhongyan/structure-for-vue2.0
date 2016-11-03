/**
 * Created by Huhy on 2016/10/19.
 */
import * as global from './getters/global'
import * as wait from './getters/wait'

const getter = {};
Object.assign(getter, ...[
  global,
  wait
]);

export default getter

