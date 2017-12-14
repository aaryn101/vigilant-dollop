import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

import { Button, Col, Row } from 'antd';
import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


import { AppHeader } from './AppHeader';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  onHeaderMenuSelect({ item, key, selectedKeys }) {
    console.log(item);
    console.log(key);
    console.log(selectedKeys);
  }

  render() {
    return (
      <Layout className='fill-parent'>
        <AppHeader/>
        <Layout className='fill-parent'>
          <Sider width={200} style={{ background: '#fff' }} collapsible>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['1']}
              style={{ height: '100%', borderRight: 0 }}>
              <Menu.Item key="1">
                <Icon type="desktop" />
                <span>Create New...</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Show All</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }} className='fill-parent'>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Test Cases</Breadcrumb.Item>
              <Breadcrumb.Item>Manage</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0 }} className='fill-parent'>
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('tasks');

  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
  };
}, App);