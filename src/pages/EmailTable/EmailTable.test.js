import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'
import { Provider } from 'react-redux'
import store from '../../store'
import EmailTable from './EmailTable'

describe('EmailTable', () => {
  test('should render a table and a button "Dodaj"', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <EmailTable />
        </ThemeProvider>
      </Provider>
    )
    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByText('Dodaj')).toBeInTheDocument()
  })

  test('should display form on "Dodaj" button click, should display a table after "Dodaj wiadomośc" button click', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <EmailTable />
        </ThemeProvider>
      </Provider>
    )
    fireEvent.click(screen.getByText('Dodaj'))

    expect(
      screen.getByRole('heading', { name: 'Dodaj wiadomość' })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /Tytuł/i })).toBeInTheDocument()
    expect(
      screen.getByRole('textbox', { name: /Wiadomość/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Dodaj wiadomość/i })
    ).toBeInTheDocument()

    fireEvent.click(screen.getByText('x'))
    expect(screen.getByRole('table')).toBeInTheDocument()
  })
})
