import React from 'react'

import HomePage from './HomePage'

it('Matches latest snapshot', () => {
  const element = render(<HomePage />)

  expect(element).toMatchSnapshot()
});
