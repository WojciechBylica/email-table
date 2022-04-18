import deleteDangerousHTMLTags from './deleteDangerousHTMLTags'

describe('it checks string and:', () => {
  it('should remove <script /> content from string', () => {
    const message = '<script>alert("abc")</script>'
    expect(deleteDangerousHTMLTags(message)).toBe('')
  })

  it('should remove <script /> content from string and return string with hmtl tags', () => {
    const message = '<script>alert("abc")</script><h1>test</h1>'
    expect(deleteDangerousHTMLTags(message)).toBe('<h1>test</h1>')
  })

  it('should not change string without html tags', () => {
    const message = 'test abc'
    expect(deleteDangerousHTMLTags(message)).toBe('test abc')
  })
})
