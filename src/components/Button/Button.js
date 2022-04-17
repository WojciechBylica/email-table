import PropTypes from 'prop-types'
import { StyledButton } from './styled'

const Button = ({ label, remove, details, edit, handleClick, width }) => (
  <StyledButton
    remove={remove}
    details={details}
    edit={edit}
    width={width}
    onClick={handleClick}
  >
    {label}
  </StyledButton>
)

export default Button

Button.defaultProps = {
  label: 'Dodaj',
}

Button.propStyles = {
  label: PropTypes.string,
  remove: PropTypes.bool,
  details: PropTypes.bool,
  handleClick: PropTypes.func,
  width: PropTypes.bool,
}
