import { useDispatch } from 'react-redux'
import { removeMail } from '../../pages/EmailTable/emailTableSlice'
import Button from '../Button'
import PropTypes from 'prop-types'

const DeleteEmail = ({ id, handleCloseModal }) => {
  const dispatch = useDispatch()
  return (
    <>
      <p>Czy na pewno usunąć wiadomość?</p>
      <Button
        label="v"
        handleClick={() => {
          dispatch(removeMail(id))
          handleCloseModal()
        }}
        width="48px"
      />
    </>
  )
}
export default DeleteEmail

DeleteEmail.propTypes = {
  id: PropTypes.string.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
}
