import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@views/layout'

//使用Vue.mixin的方法拦截了路由离开事件，并在该拦截方法中实现了销毁页面缓存的功能。
Vue.mixin({
  beforeRouteLeave: function(to, from, next) {
    //此处判断是如果返回上一层，你可以根据自己的业务更改此处的判断逻辑，酌情决定是否摧毁本层缓存。
    if (
      from &&
      from.meta.rank &&
      to.meta.rank &&
      from.meta.rank >= to.meta.rank
    ) {
      if (this.$vnode && this.$vnode.data.keepAlive) {
        if (
          this.$vnode.parent &&
          this.$vnode.parent.componentInstance &&
          this.$vnode.parent.componentInstance.cache
        ) {
          if (this.$vnode.componentOptions) {
            var key =
              this.$vnode.key === null
                ? this.$vnode.componentOptions.Ctor.cid +
                  (this.$vnode.componentOptions.tag
                    ? `::${this.$vnode.componentOptions.tag}`
                    : '')
                : this.$vnode.key
            var cache = this.$vnode.parent.componentInstance.cache
            var keys = this.$vnode.parent.componentInstance.keys
            if (cache[key]) {
              if (keys.length) {
                var index = keys.indexOf(key)
                if (index > -1) {
                  keys.splice(index, 1)
                }
              }
              delete cache[key]
            }
          }
        }
      }
      this.$destroy()
    }
    next()
  }
})

// 不区分用户角色
export const constantRouterMap = [
  { path: '/demo', component: () => import('@views/demo') },
  {
    path: '/',
    name: 'index',
    component: Layout,
    meta: { title: '首页' },
    redirect: '/home',
    children: [
      // 首页
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home'),
        meta: { title: '首页', menuLevel: 1, rank: 1 }
      },
      // 产品-博物馆大数据平台
      {
        path: '/product/data',
        name: '/productData',
        component: () => import('@/views/product/data'),
        meta: { title: '产品' }
      },
      // 产品-协同平台
      {
        path: '/product/oa',
        name: '/productOa',
        component: () => import('@/views/product/oa'),
        meta: { title: '产品' }
      },
      // 产品-gis数据管理平台
      {
        path: '/product/gis',
        name: '/productGis',
        component: () => import('@/views/product/gis'),
        meta: { title: '产品' }
      },
      // 产品-在线虚拟博物馆
      {
        path: '/product/virtual',
        name: '/productVirtual',
        component: () => import('@/views/product/virtual'),
        meta: { title: '产品' }
      },
      // 产品-三维数据采集
      {
        path: '/product/collect',
        name: '/productCollect',
        component: () => import('@/views/product/collect'),
        meta: { title: '产品' }
      },
      // 解决方案-文物局
      {
        path: '/solution/cutural',
        name: 'solutionCutural',
        component: () => import('@/views/solution/cutural'),
        meta: { title: '解决方案' }
      },
      // 解决方案-博物馆
      {
        path: '/solution/museum',
        name: '/solutionMuseum',
        component: () => import('@/views/solution/museum'),
        meta: { title: '解决方案' }
      },
      // 解决方案-文保单位
      {
        path: '/solution/relic-unit',
        name: '/solutionRelicUnit',
        component: () => import('@/views/solution/relic-unit'),
        meta: { title: '解决方案' }
      },
      // 案例
      {
        path: '/case',
        name: '/case',
        component: () => import('@/views/case/index'),
        meta: { title: '案例' }
      },
      // 案例详情
      {
        path: '/case/detail',
        name: '/caseDetail',
        component: () => import('@/views/case/detail'),
        meta: { title: '案例详情' }
      },
      // 关于我们
      {
        path: '/about',
        name: '/about',
        component: () => import('@/views/about/index'),
        meta: { title: '关于我们' }
      }
    ]
  }
]

// 区分用户角色
export const asyncRouterMap = [
  // {
  //   path: '/',
  //   name: 'index',
  //   component: Layout,
  //   meta: { title: '首页' },
  //   redirect: '/home',
  //   children: [
  //     // 首页
  //     {
  //       path: '/home',
  //       name: 'home',
  //       component: () => import('@/views/home'),
  //       meta: { title: '首页', menuLevel: 1, rank: 1 }
  //     }
  //   ]
  // }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
