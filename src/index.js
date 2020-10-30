'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';

import './styles/main.css';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ruRU}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
