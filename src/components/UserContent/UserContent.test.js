import React from 'react'
import { render } from '@testing-library/react'
import UserContent from './UserContent'

test('renders sanitized content', () => {
  const { container } = render(
    <UserContent content="This is <strong>bold</strong> content." />
  )

  // Use container.querySelector to find elements based on a CSS selector
  const sanitizedContentElement = container.querySelector('div')

  // Check if the sanitized content element is present
  expect(sanitizedContentElement).toBeInTheDocument()

  // Check if the textContent of the element contains the desired text
  const sanitizedText = sanitizedContentElement.textContent
  expect(sanitizedText).toContain('This is bold content.')
})
