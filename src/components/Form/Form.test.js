import React from 'react'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from './Form'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'
import { Provider } from 'react-redux'
import store from '../../store'
import * as ReactRedux from 'react-redux'

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

  it('should call onSubmit EditMail reducer once, with new values of inputs and have proper bg color of a button', async () => {
    const mockSave = jest.fn()
    let editMail = jest.fn(() => null)

    jest.spyOn(ReactRedux, 'useDispatch').mockImplementation(() => {
      return editMail
    })

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Form
            previousTitle="aaa"
            previousText="bbb"
            previousId="1234id"
            previousDate="2022-04-20T01:09:53.920Z"
            buttonText="aktualizuj"
            buttonStyle="edit"
            handleCloseModal={handleCloseModal}
            editEmail
          />
        </ThemeProvider>
      </Provider>
    )
    expect(
      screen.getByRole('button', { name: /aktualizuj/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /aktualizuj/i })).toHaveStyle(
      'background-color: #565CF7'
    )

    fireEvent.input(screen.getByRole('textbox', { name: /tytuł/i }), {
      target: {
        value: 'tytuł testowy',
      },
    })

    fireEvent.input(screen.getByRole('textbox', { name: /wiadomość/i }), {
      target: {
        value: 'treść wiadomości testowej',
      },
    })

    fireEvent.submit(screen.getByRole('button', { name: /aktualizuj/i }))
    expect(mockSave).not.toBeCalled()

    expect(editMail).toHaveBeenCalledTimes(1)

    await waitFor(() => {
      expect(editMail).toHaveBeenLastCalledWith({
        payload: {
          date: '2022-04-20T01:09:53.920Z',
          id: '1234id',
          text: 'treść wiadomości testowej',
          title: 'tytuł testowy',
        },
        type: 'emails/editMail',
      })
      expect(handleCloseModal).toHaveBeenCalledTimes(1)
    })
  })

  it("should call onSubmit AddMail reducer once, don't call EditMail and have proper bg color of a button", async () => {
    const mockSave = jest.fn()
    let addMail = jest.fn(() => null)
    let editMail = jest.fn(() => null)

    jest.spyOn(ReactRedux, 'useDispatch').mockImplementation(() => {
      return addMail
    })

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Form handleCloseModal={handleCloseModal} />
        </ThemeProvider>
      </Provider>
    )
    expect(
      screen.getByRole('button', { name: /Dodaj wiadomość/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /Dodaj wiadomość/i })
    ).toHaveStyle('background-color: #288307')

    fireEvent.submit(screen.getByRole('button', { name: /Dodaj wiadomość/i }))
    expect(mockSave).not.toBeCalled()

    expect(addMail).toHaveBeenCalledTimes(1)
    expect(editMail).toHaveBeenCalledTimes(0)

    await waitFor(() => {
      expect(handleCloseModal).toHaveBeenCalledTimes(1)
    })
  })
})
