import formatDate from './formatDate'

describe('it formats date', () => {
  it('should render date in format YYYY-MM-DD', () => {
    expect(formatDate('2022-04-18T00:16:08.923Z')).toBe('2022-04-18')
  })

  it('should render date Invalid Date if no date-type provided', () => {
    expect(formatDate('20')).toBe('Invalid Date')
  })
})
