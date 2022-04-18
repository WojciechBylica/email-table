import { deleteDangerousHTMLTags } from '../../helpers'
import { StyledIframe } from './styled'
import PropTypes from 'prop-types'

const Iframe = ({ title, text }) => {
  return (
    <>
      <div>{title}</div>
      <StyledIframe srcDoc={deleteDangerousHTMLTags(text)} />
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
