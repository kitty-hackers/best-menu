'use strict';

import * as React from 'react';
import * as renderer from 'react-test-renderer';

import App from './App';

const mock = {
  test: true,
};

it(`should be truely`, () => {
  const { test } = mock;

  expect(test).toBe(true);
});

it(`should render App snapshot`, () => {
  const app = renderer
    .create(<App />)
    .toJSON();

  expect(app).toMatchSnapshot();
});
