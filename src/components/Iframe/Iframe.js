import { deleteDangerousHTMLTags } from '../../helpers'
import { StyledIframe } from './styled'

const Iframe = ({ title, text }) => {
  return (
    <>
      <div>{title}</div>
      <StyledIframe srcDoc={deleteDangerousHTMLTags(text)} />
    </>
  )
}

export default Iframe
