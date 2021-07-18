import * as React from 'react'
import { render, screen } from '@testing-library/react'
import App from '@app/app'

describe('App', () => {
  it.skip('should render correctly', () => {
    render(<App />)

    expect(screen.getByRole('heading')).toHaveTextContent('Home!')
  })
})
