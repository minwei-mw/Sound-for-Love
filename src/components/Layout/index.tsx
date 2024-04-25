import React, { ReactNode } from 'react'

import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

import styles from './index.less'

// 定义 Layout 组件的 props 类型，包含 'children'
interface LayoutProps {
  children?: ReactNode // ReactNode 表示可以包含任何有效的 React 子组件
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <Header />
    <div className={styles.middle}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
    <Footer />
  </div>
)

export default Layout
