/**
 * Created by Huhy on 2016/10/14.
 */

export default [
  // 以下全是组件demo用例
  { path: '/demo', component: { template: '<router-view></router-view>' },
    children: [
      { path: '/dialog', component: require('../components/demo/dialog.vue') },
      { path: '/globalDialog', component: require('../components/demo/globalDialog.vue') },
      { path: '/loading', component: require('../components/demo/loading.vue') },
      { path: '/tips', component: require('../components/demo/tips.vue') },
      { path: '/circle', component: require('../components/demo/circle.vue') }
    ]
  }
]
