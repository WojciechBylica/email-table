import PropStyles from 'prop-types'
import { StyledButton } from './styled'

const Button = ({ label, remove, handleClick, width }) => (
  <StyledButton remove={remove} width={width} onClick={handleClick}>
    {label}
  </StyledButton>
)

export default Button

Button.defaultProps = {
  label: 'Dodaj',
}

Button.propStyles = {
  label: PropStyles.string,
  remove: PropStyles.bool,
  handleClick: PropStyles.func,
  width: PropStyles.bool,
}
