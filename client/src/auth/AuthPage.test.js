import React from 'react';

import AuthPage from './AuthPage';

xit('Matches latest snapshot', () => {
  const element = render(<AuthPage />)

  expect(element).toMatchSnapshot()
});
