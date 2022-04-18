import purifyTextFromHTML from './purifyTextFromHTML'

it('should remove all html tags from string', () => {
  const message = '<h1>title</h1>'
  expect(purifyTextFromHTML(message)).toBe('title')
})
