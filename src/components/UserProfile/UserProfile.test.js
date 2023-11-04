import React from 'react'
import { render } from '@testing-library/react'
import UserContent from '../UserContent/UserContent'

test('renders sanitized content', () => {
  const { container } = render(
    <UserContent content="This is <strong>bold</strong> content." />
  )

  // Use container.querySelector to find elements based on a CSS selector
  const sanitizedContentElement = container.querySelector('div')

  // Check if the sanitized content element is present
  expect(sanitizedContentElement).toBeInTheDocument()

  // Check if the <strong> tag is present in the sanitized content
  const strongTag = sanitizedContentElement.querySelector('strong')
  expect(strongTag).toBeInTheDocument()
})
