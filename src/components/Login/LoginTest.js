// components/Login.test.js
import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from './Login'

describe('Login Component', () => {
  test('renders login form', () => {
    const { getByText, getByLabelText } = render(<Login onLogin={() => {}} />)

    // Check if the login form is rendered
    expect(getByText('Login')).toBeInTheDocument()
    expect(getByLabelText('Username')).toBeInTheDocument()
    expect(getByLabelText('Password')).toBeInTheDocument()
  })

  test('submits form with valid data', async () => {
    const mockOnLogin = jest.fn()

    const { getByLabelText, getByText } = render(
      <Login onLogin={mockOnLogin} />
    )

    // Fill in the form
    userEvent.type(getByLabelText('Username'), 'testuser')
    userEvent.type(getByLabelText('Password'), 'testpassword')

    // Submit the form
    fireEvent.click(getByText('Login'))

    // Wait for the asynchronous request to complete
    await waitFor(() => {
      // Check if the onLogin function is called with the expected token
      expect(mockOnLogin).toHaveBeenCalledWith('mocked_jwt_token')
    })
  })

  test('shows error message on invalid login', async () => {
    // Mock the fetch function
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ message: 'Invalid credentials' }),
      })
    )

    const { getByLabelText, getByText } = render(<Login onLogin={() => {}} />)

    // Fill in the form
    userEvent.type(getByLabelText('Username'), 'invaliduser')
    userEvent.type(getByLabelText('Password'), 'invalidpassword')

    // Submit the form
    fireEvent.click(getByText('Login'))

    // Wait for the asynchronous request to complete
    await waitFor(() => {
      // Check if the error message is displayed
      expect(getByText('Invalid credentials')).toBeInTheDocument()
    })
  })
})
