import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'
import DeleteEmail from './DeleteEmail'
import { Provider } from 'react-redux'
import store from '../../store'

test('DeleteEmail should has text "Czy na pewno usunąć wiadomość? and button with label "usuń wiadomość"', () => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <DeleteEmail id={'fakeId'} handleCloseModal={jest.fn()} />
      </ThemeProvider>
    </Provider>
  )
  expect(screen.getByText('Czy na pewno usunąć wiadomość?')).toBeInTheDocument()
  expect(screen.getByRole('button')).toHaveTextContent('usuń wiadomość')
})
