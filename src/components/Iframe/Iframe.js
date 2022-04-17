import DOMPurify from 'dompurify'
import { StyledIframe } from './styled'

const Iframe = ({ title, text }) => {
  return (
    <>
      <div>{title}</div>
      <StyledIframe srcDoc={DOMPurify.sanitize(text)} />
    </>
  )
}

export default Iframe
