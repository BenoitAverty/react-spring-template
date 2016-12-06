import React from 'react';

import LoginPage from './LoginPage';

it('Matches latest snapshot', () => {
  const element = render(<LoginPage />)

  expect(element).toMatchSnapshot()
});
