import { deleteDangerousHTMLTags } from '../../helpers'
import { StyledH2, StyledIframe } from './styled'
import PropTypes from 'prop-types'

const Iframe = ({ title, text }) => {
  return (
    <>
      <StyledH2>{title}</StyledH2>
      <StyledIframe
        data-testid="iframe"
        srcDoc={deleteDangerousHTMLTags(text)}
      />
    </>
  )
}

export default Iframe

Iframe.defaultProps = {
  title: 'Brak danych',
  text: 'Brak danych',
}

Iframe.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}
