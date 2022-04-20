import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from './Form'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'
import { Provider } from 'react-redux'
import store from '../../store'

describe('Form', () => {
  const handleCloseModal = jest.fn()
  test(' it should render the basic fields', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Form handleCloseModal={handleCloseModal} />
        </ThemeProvider>
      </Provider>
    )
    expect(
      screen.getByRole('heading', { name: 'Dodaj wiadomość' })
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /tytuł/i })).toBeInTheDocument()
    expect(
      screen.getByRole('textbox', { name: /wiadomość/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Dodaj/i })).toBeInTheDocument()
  })
})
