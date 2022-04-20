import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'
import { Provider, useSelector } from 'react-redux'
import store from '../../store'
import Table from './Table'

test('empty Table renders ok', () => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Table />
      </ThemeProvider>
    </Provider>
  )
  expect(screen.getByRole('table')).toBeInTheDocument()
  expect(
    screen.getByRole('rowgroup', { name: 'table-header' })
  ).toBeInTheDocument()
  expect(
    screen.getByRole('rowgroup', { name: 'table-body' })
  ).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Tytuł▲' })).toBeInTheDocument()
  expect(
    screen.getByRole('button', { name: 'Data dodania ▲ ▼' })
  ).toBeInTheDocument()
  expect(screen.queryByText(/x/i)).not.toBeInTheDocument()
  expect(screen.queryByText(/🔍/i)).not.toBeInTheDocument()
  expect(screen.queryByText(/🖊/i)).not.toBeInTheDocument()
})

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}))

const mockAppState = {
  emails: {
    emails: [
      {
        title: 'test 2',
        id: 'Q6hBgFGnAIAZzEPFuqUsE',
        text: '<h1>testowy email 2</h1>  z tagami <b>html</b>',
        date: '2022-04-17T22:58:22.283Z',
      },
      {
        title: 'test',
        id: 's5sDPyEcfiDO9KB2pKzrw',
        text: 'testowa wiadomość',
        date: '2022-04-18T19:33:46.605Z',
      },
    ],
    status: 'initial',
    sortedByDate: 'initial',
  },
}

describe('Table', () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback(mockAppState)
    })
  })
  test('should render emails and buttons if data provided', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Table />
        </ThemeProvider>
      </Provider>
    )

    expect(screen.queryAllByText(/🖊/i)).toHaveLength(2)
    expect(screen.queryAllByText(/x/i)).toHaveLength(2)
    expect(screen.queryAllByText(/🔍/i)).toHaveLength(2)
    expect(screen.queryByText(/test 2/i)).toBeInTheDocument()
    expect(screen.queryByText(/testowa wiadomość/i)).toBeInTheDocument()
    expect(
      screen.queryByText(/testowy email 2 z tagami html/i)
    ).toBeInTheDocument()
  })
})
