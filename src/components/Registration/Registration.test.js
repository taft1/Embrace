import React from 'react'
import { render, screen } from '@testing-library/react'
import Registration from './Registration'

test('renders Registration component', () => {
  render(<Registration />)

  // Check if the Registration component is rendered
  const registrationElement = screen.getByText(/Registration/i)
  expect(registrationElement).toBeInTheDocument()
})

// You can add more tests for the registration form if needed
