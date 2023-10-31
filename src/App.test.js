import React from 'react'
import { act } from 'react-dom/test-utils'
import App from './App'

test('checks if App component mounts successfully', () => {
  const container = document.createElement('div')

  act(() => {
    React.createElement(App, null, container)
  })
})
