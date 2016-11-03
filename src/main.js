import Vue from 'vue'
import App from './App'
import router from './routers/router'
import store from './vuex/store'
import 'assets/lib/httpConfig'
import 'assets/lib/wx'
import 'assets/lib/wx.css'
import 'weui/dist/style/weui.css'
import 'assets/css/weui-ext.less'
import 'assets/css/unit.less'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
