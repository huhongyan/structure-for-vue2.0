/**
 * http请求配置
 * Created by Huhy on 2016/8/29.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import store from '../../vuex/store'

Vue.use(VueResource);
(function() {
  // 配置对请求和响应的拦截处理
  Vue.http.interceptors.push((request, next) => {
    let text = request.headers.description;
    store.dispatch('showLoading', { text });
    next((response) => {
      if(response.status === 200)
        store.dispatch('hideLoading')
    });
  });
})()
