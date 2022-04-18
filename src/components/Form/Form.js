import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMail, editMail } from '../../pages/EmailTable/emailTableSlice'
import { nanoid } from '@reduxjs/toolkit'
import { StyledForm, StyledInput, StyledLabel } from './styled'
import Button from '../Button'
import PropTypes from 'prop-types'
import { deleteDangerousHTMLTags } from '../../helpers'

const Form = ({
  handleCloseModal,
  previousTitle,
  previousText,
  previousId,
  previousDate,
  buttonText,
  buttonStyle,
  editEmail,
}) => {
  const [title, setTitle] = useState(previousTitle || '')
  const [message, setMessage] = useState(previousText || '')

  const handleTitleChange = ({ target }) => setTitle(target.value)
  const handleMessageChange = ({ target }) => setMessage(target.value)

  const handleTitleBlur = () => {
    const trimmedData = title.trim()
    setTitle(trimmedData)
  }

  const handleMessageBlur = () => {
    const trimmedData = message.trim()
    setMessage(deleteDangerousHTMLTags(trimmedData))
  }

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

    editEmail
      ? dispatch(
          editMail({
            title: title,
            id: previousId,
            text: message,
            date: previousDate,
          })
        )
      : dispatch(
          addMail({
            title: title,
            id: nanoid(),
            text: message,
            date: new Date().toISOString(),
          })
        )

    handleCloseModal()
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Tytuł (3-25 znaków)
        <StyledInput
          name="title"
          value={title}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          type="text"
          pattern=".{3,250}"
          required
          placeholder="tytuł"
          autoFocus
        />
      </StyledLabel>
      <StyledLabel>
        Wiadomość
        <StyledInput
          as="textarea"
          rows="8"
          name="message"
          value={message}
          onChange={handleMessageChange}
          onBlur={handleMessageBlur}
          type="textArea"
          required
          placeholder="treść wiadomości"
        />
      </StyledLabel>
      <div>
        <Button label={buttonText} edit />
      </div>
    </StyledForm>
  )
}

export default Form

Form.propsStyles = {
  handleCloseModal: PropTypes.func.isRequired,
  previousTitle: PropTypes.string,
  previousText: PropTypes.string,
  previousId: PropTypes.string,
  previousDate: PropTypes.string,
  buttonText: PropTypes.string,
  buttonStyle: PropTypes.bool,
  editEmail: PropTypes.bool,
}
