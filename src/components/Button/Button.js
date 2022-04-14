import PropStyles from 'prop-types'
import { StyledButton } from './styled'

const Button = ({ label, remove, handleClick }) => (
  <StyledButton remove={remove} onClick={handleClick}>
    {label}
  </StyledButton>
)

export default Button

Button.defaultProps = {
  label: 'Dodaj',
}

Button.propStyles = {
  label: PropStyles.string,
}
