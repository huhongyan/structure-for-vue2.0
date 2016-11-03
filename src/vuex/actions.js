/**
 * Created by Huhy on 2016/10/19.
 */
import * as global from './actions/global'
import * as wait from './actions/wait'

const actions = { };
Object.assign(actions, ...[
  global,
  wait
]);

export default actions
