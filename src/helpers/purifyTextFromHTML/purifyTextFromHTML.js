import DOMPurify from 'dompurify'

const purifyTextFromHTML = (text) =>
  DOMPurify.sanitize(text, { USE_PROFILES: { html: false } })

export default purifyTextFromHTML
