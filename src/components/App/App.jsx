'use strict';

import { Layout } from 'antd';
import * as React from 'react';

const { Header, Sider, Content, Footer } = Layout;

function App() {
  return (
    <>
      <Layout className="site">
        <Sider>Sider</Sider>

        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
