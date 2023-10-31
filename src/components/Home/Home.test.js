import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from './Home'

test('renders Welcome message in Home component', () => {
  const { getByText } = render(<Home />)

  const welcomeMessage = getByText('Welcome to Embrace')

  expect(welcomeMessage).toBeInTheDocument()
})
