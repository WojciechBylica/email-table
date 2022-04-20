import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'

describe('Button', () => {
  test('should has text "Dodaj" if no label props provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button />
      </ThemeProvider>
    )
    expect(screen.getByRole('button')).toHaveTextContent('Dodaj')
  })

  test('should have text "x" if label props is "x"', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button label="x" />
      </ThemeProvider>
    )
    expect(screen.getByRole('button')).toHaveTextContent('x')
  })

  test('should has width 48px if props width is 48', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button width={48} />
      </ThemeProvider>
    )
    expect(screen.getByRole('button')).toHaveStyle('width: 48px')
  })

  test('should has default width 96px and bg color green', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button />
      </ThemeProvider>
    )
    expect(screen.getByRole('button')).toHaveStyle('width:96px')
    expect(screen.getByRole('button')).toHaveStyle('background-color: #288307')
  })

  test('should have color red if props remove is true', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button remove />
      </ThemeProvider>
    )
    expect(screen.getByRole('button')).toHaveStyle('background-color: #ff0000')
  })

  test('should have bg color red if props remove is true', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button edit />
      </ThemeProvider>
    )
    expect(screen.getByRole('button')).toHaveStyle('background-color: #565CF7')
  })

  test('should have bg color grey if props details is true', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button details />
      </ThemeProvider>
    )
    expect(screen.getByRole('button')).toHaveStyle('background-color: #9e9e9e')
  })
})
