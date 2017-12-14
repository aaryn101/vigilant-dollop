import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header } = Layout;

function AppHeader(props) {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
        >
        <Menu.Item key="1">Test Cases</Menu.Item>
        <Menu.Item key="2">Executions</Menu.Item>
      </Menu>
    </Header>
  )
}

export { AppHeader };