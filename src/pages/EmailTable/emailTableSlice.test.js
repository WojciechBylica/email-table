import reducer, {
  addMail,
  editMail,
  removeMail,
  sortByTitles,
  sortByDates,
  sortByDatesReversed,
} from './emailTableSlice'

const testEmails = [
  {
    title: 'title1',
    id: '123',
    text: 'text1',
    date: '2022-04-18T19:48:49.181Z',
  },
  {
    title: 'title2',
    id: '234',
    text: 'text2',
    date: '2021-04-18T19:48:49.181Z',
  },
]

const state = {
  emails: testEmails,
  status: 'initial',
  sortedByDate: 'initial',
}

describe('reducer works ok', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      emails: [],
      status: 'initial',
      sortedByDate: 'initial',
    })
  })

  test('should handle adding an email to an emails empty array', () => {
    const previousState = {
      emails: [],
      status: 'initial',
      sortedByDate: 'initial',
    }
    const title = 'test title'
    const message = 'test message'
    const id = 'ksj123'
    const date = '2022-04-18T19:48:49.181Z'
    expect(
      reducer(
        previousState,
        addMail({
          title: title,
          id: id,
          text: message,
          date: date,
        })
      )
    ).toEqual({
      emails: [
        {
          title: title,
          id: id,
          text: message,
          date: date,
        },
      ],
      status: 'initial',
      sortedByDate: 'initial',
    })
  })

  test('should handle deleting the selected email', () => {
    const id = '123'

    expect(reducer(state, removeMail(id))).toEqual({
      emails: [
        {
          title: 'title2',
          id: '234',
          text: 'text2',
          date: '2021-04-18T19:48:49.181Z',
        },
      ],
      status: 'initial',
      sortedByDate: 'initial',
    })
  })

  test('should handle editing the selected email', () => {
    const id = '123'

    expect(
      reducer(
        state,
        editMail({
          title: 'title22',
          id: id,
          text: 'text22',
          date: '2021-04-18T19:48:49.181Z',
        })
      )
    ).toEqual({
      emails: [
        {
          title: 'title22',
          id: id,
          text: 'text22',
          date: '2021-04-18T19:48:49.181Z',
        },
        {
          title: 'title2',
          id: '234',
          text: 'text2',
          date: '2021-04-18T19:48:49.181Z',
        },
      ],
      status: 'initial',
      sortedByDate: 'initial',
    })
  })

  test('should sort emails by title', () => {
    expect(reducer(state, sortByTitles())).toEqual({
      emails: [
        {
          title: 'title1',
          id: '123',
          text: 'text1',
          date: '2022-04-18T19:48:49.181Z',
        },
        {
          title: 'title2',
          id: '234',
          text: 'text2',
          date: '2021-04-18T19:48:49.181Z',
        },
      ],
      status: 'initial',
      sortedByDate: 'initial',
    })
  })

  test('should sort emails by date, the newest mail on the bottom', () => {
    expect(reducer(state, sortByDates())).toEqual({
      emails: [
        {
          title: 'title2',
          id: '234',
          text: 'text2',
          date: '2021-04-18T19:48:49.181Z',
        },
        {
          title: 'title1',
          id: '123',
          text: 'text1',
          date: '2022-04-18T19:48:49.181Z',
        },
      ],
      status: 'initial',
      sortedByDate: 'new-old',
    })
  })

  test('should sort emails by date, the newest mail on the top', () => {
    expect(reducer(state, sortByDatesReversed())).toEqual({
      emails: [
        {
          title: 'title1',
          id: '123',
          text: 'text1',
          date: '2022-04-18T19:48:49.181Z',
        },
        {
          title: 'title2',
          id: '234',
          text: 'text2',
          date: '2021-04-18T19:48:49.181Z',
        },
      ],
      status: 'initial',
      sortedByDate: 'old-new',
    })
  })
})
