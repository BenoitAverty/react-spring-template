import React from 'react';

import AuthPage from './AuthPage';

it('Matches latest snapshot', () => {
  const element = render(<AuthPage />)

  expect(element).toMatchSnapshot()
});
