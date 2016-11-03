/**
 * Created by Huhy on 2016/10/19.
 */
import * as global from './getters/global'

const getter = {};
Object.assign(getter, ...[
  global,
]);

export default getter

