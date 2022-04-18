import { useDispatch } from 'react-redux'
import { removeMail } from '../../pages/EmailTable/emailTableSlice'
import Button from '../Button'
import PropTypes from 'prop-types'
import { StyledDeleteBox } from './styled'

const DeleteEmail = ({ id, handleCloseModal }) => {
  const dispatch = useDispatch()
  return (
    <StyledDeleteBox>
      <p>Czy na pewno usunąć wiadomość?</p>
      <Button
        label="usuń wiadomość"
        handleClick={() => {
          dispatch(removeMail(id))
          handleCloseModal()
        }}
        width={160}
      />
    </StyledDeleteBox>
  )
}
export default DeleteEmail

DeleteEmail.propTypes = {
  id: PropTypes.string.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
}
