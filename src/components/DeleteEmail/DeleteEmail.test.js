import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'
import DeleteEmail from './DeleteEmail'
import { Provider } from 'react-redux'
import store from '../../store'
import * as ReactRedux from 'react-redux'

describe('DeleteEmail', () => {
  test('DeleteEmail should has text "Czy na pewno usunąć wiadomość? and button with label "usuń wiadomość"', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <DeleteEmail id={'fakeId'} handleCloseModal={jest.fn()} />
        </ThemeProvider>
      </Provider>
    )
    expect(
      screen.getByText('Czy na pewno usunąć wiadomość?')
    ).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveTextContent('usuń wiadomość')
  })

  test('should on button click call removeMail reducer with payload value of id', () => {
    let removeMail = jest.fn(() => null)

    jest.spyOn(ReactRedux, 'useDispatch').mockImplementation(() => {
      return removeMail
    })

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <DeleteEmail id={'fakeId'} handleCloseModal={jest.fn()} />
        </ThemeProvider>
      </Provider>
    )

    fireEvent.click(screen.getByRole('button', { name: /usuń wiadomość/i }))
    expect(removeMail).toHaveBeenCalledTimes(1)
    expect(removeMail).toHaveBeenLastCalledWith({
      payload: 'fakeId',
      type: 'emails/removeMail',
    })
  })
})
