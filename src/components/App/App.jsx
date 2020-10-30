'use strict';

import { Layout, Menu, Typography } from 'antd';
import * as React from 'react';

const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  return (
    <>
      <Layout className="site">
        <Sider
          className="site-sider"
          breakpoint="lg"
          collapsedWidth="0"
        >
          <Menu theme="dark">
            <Menu.Item key="1">Завтрак</Menu.Item>
            <Menu.Item key="2">Обед</Menu.Item>
            <Menu.Item key="3">Ужин</Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header>
            <Title>Best Menu</Title>
          </Header>

          <Content>Content</Content>

          <Footer>Kitty-Hackers &copy; 2020 Created by Bargamut</Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
