import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'
import Iframe from './Iframe'

describe('Iframe should render title:', () => {
  test('"tytuł" if provided from props', () => {
    render(
      <ThemeProvider theme={theme}>
        <Iframe title="tytuł" />
      </ThemeProvider>
    )
    expect(screen.getByRole('heading')).toHaveTextContent('tytuł')
  })
  test('"Brak danych" if not provided from props', () => {
    render(
      <ThemeProvider theme={theme}>
        <Iframe />
      </ThemeProvider>
    )
    expect(screen.getByRole('heading')).toHaveTextContent('Brak danych')
  })
})

describe('Iframe:', () => {
  test('should handle text with html tags, but it should block scripts', () => {
    render(
      <ThemeProvider theme={theme}>
        <Iframe text="<h1>tytuł</h1><script>alert('bum')</script>" />
      </ThemeProvider>
    )
    expect(screen.getByTestId('iframe')).toBeInTheDocument()
    expect(screen.getByTestId('iframe')).toContainHTML('<h1>tytuł</h1>')
    expect(screen.getByTestId('iframe')).not.toContainHTML(
      '<script>alert("bum")</script>'
    )
  })
  test('should handle text without html tags', () => {
    render(
      <ThemeProvider theme={theme}>
        <Iframe text="tytuł" />
      </ThemeProvider>
    )

    expect(screen.getByTestId('iframe')).toContainHTML('tytuł')
  })
})
