import { Menu, MenuProps, Layout } from 'antd'
import React from 'react'
import { menuPages } from './menu-item'

type MenuDashboardLayoutProps = {
  collapsed?: boolean
  setCollapsed?: any
}

export default function MenuDashboardLayout(props: MenuDashboardLayoutProps) {
  const { collapsed, setCollapsed } = props
  return (
    <Layout.Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        maxHeight: '100vh',
        zIndex: 50,
      }}
      width={200}
      theme="light"
      className="site-layout-background"
      // collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div style={{ flex: '1 1 0%', overflow: 'hidden auto' }}>
        <Menu
          // selectedKeys={[current]}
          mode="inline"
          defaultSelectedKeys={['home']}
          style={{ height: '100%', marginTop: 70 }}
          items={menuPages}
        />
      </div>
    </Layout.Sider>
  )
}
