import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMail } from '../../pages/EmailTable/emailTableSlice'
import { nanoid } from '@reduxjs/toolkit'
import { StyledForm, StyledLabel } from './styled'
import Button from '../Button'
import PropStyles from 'prop-types'

const Form = ({ handleCloseModal }) => {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

  const handleTitleChange = ({ target }) => setTitle(target.value)
  const handleMessageChange = ({ target }) => setMessage(target.value)

  const handleTitleBlur = () => {
    const trimmedData = title.trim()
    setTitle(trimmedData)
  }

  const handleMessageBlur = () => {
    const trimmedData = message.trim()
    setMessage(trimmedData)
  }

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(
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
        Tytuł
        <input
          name="title"
          value={title}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          type="text"
          min="3"
          max="25"
          required
          placeholder="tytuł"
          autoFocus
        />
      </StyledLabel>
      <StyledLabel>
        Wiadomość
        <textarea
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
        <Button label="dodaj" />
      </div>
    </StyledForm>
  )
}

export default Form

Form.propsStyles = {
  handleCloseModal: PropStyles.func.isRequired,
}