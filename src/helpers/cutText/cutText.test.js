import cutText from './cutText'

describe('it should work on text:', () => {
  it('should return text shortened to demanded length, ended with 3 dots', () => {
    expect(cutText('test abc', 4)).toBe('test...')
  })

  it("should not cut text if it's length is lower than demanded", () => {
    expect(cutText('test abc', 10)).toBe('test abc')
  })
})
