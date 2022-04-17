import { useState } from 'react'

const useEditEmail = () => {
  const [editEmail, setEditEmail] = useState(false)
  const [previousContent, setPreviousContent] = useState('')

  const handleOpenDataEdit = (title, text, id, date) => {
    setPreviousContent({ title, text, id, date })
    setEditEmail(true)
  }
  const handleHideDataEdit = () => setEditEmail(false)

  return [editEmail, previousContent, handleOpenDataEdit, handleHideDataEdit]
}

export default useEditEmail
