import React from 'react'

export interface IRouteBase {
  // 路由路径
  path: string
  // 路由组件
  component?: any
  // 302 跳转
  redirect?: string
  // 路由信息
  meta: IRouteMeta
}

export interface IRouteMeta {
  title: string
  icon?: string
}

export interface IRoute extends IRouteBase {
  children?: IRoute[]
}

const routes: IRoute[] = [
  {
    path: '/discovery',
    component: React.lazy(() => import('../pages/Discovery/index')),
    meta: {
      title: '个性推荐'
    },
    redirect: '/',
    children: []
  }
]

export default routes
