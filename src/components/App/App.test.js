'use strict';

const mock = {
  test: true,
};

it(`should be truely`, () => {
  const { test } = mock;

  expect(test).toBe(true);
});
