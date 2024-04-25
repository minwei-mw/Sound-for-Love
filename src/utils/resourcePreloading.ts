// 资源预加载
import { lazy } from 'react'
/*
 import(
   webpackChunkName: "my-chunk-name"  // 资源打包后的文件chunkname
   webpackPrefetch: true  // 开启prefetch预获取可能需要的资源
   webpackPreload: true  // 开启preload预获取必定需要的资源
   './module' );
*/

// 定义组件路径的类型
type ComponentPath = string

// prefetch 预获取可能需要的资源
const PreFetchDemo = (path: ComponentPath) => {
  lazy(
    () =>
      import(
        /* webpackChunkName: "PreFetchDemo" */
        /* webpackPrefetch: true */
        path
      )
  )
}

// preload 预获取必定需要的资源
const PreloadDemo = (path: ComponentPath) => {
  lazy(
    () =>
      import(
        /* webpackChunkName: "PreloadDemo" */
        /* webpackPreload: true */
        path
      )
  )
}

export { PreFetchDemo, PreloadDemo }
