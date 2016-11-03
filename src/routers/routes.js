/**
 * Created by Huhy on 2016/10/14.
 */

export default [
  { path: '/', name: 'index', component: require('../views/Index.vue')},
  // 以下全是组件demo用例
  { path: '/demo', component: { template: '<router-view></router-view>' },
    children: [
      { path: '/dialog', name: 'dialog', component: require('../components/demo/dialog.vue') },
      { path: '/globalDialog', name: 'globalDialog', component: require('../components/demo/globalDialog.vue') },
      { path: '/loading', name: 'loading', component: require('../components/demo/loading.vue') },
      { path: '/tips', name: 'tips', component: require('../components/demo/tips.vue') },
      { path: '/circle', name: 'circle', component: require('../components/demo/circle.vue') }
    ]
  }
]
