import React from 'react';

import App from './App';

it('Matches latest snapshot', () => {
  const element = render(<App />)

  expect(element).toMatchSnapshot()
});
