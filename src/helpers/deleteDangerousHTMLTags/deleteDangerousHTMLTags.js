import DOMPurify from 'dompurify'

const deleteDangerousHTMLTags = (data) => DOMPurify.sanitize(data)

export default deleteDangerousHTMLTags
