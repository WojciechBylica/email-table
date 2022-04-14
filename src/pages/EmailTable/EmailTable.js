import { Button, Table } from '../../components'
import { useDispatch } from 'react-redux'
import { ButtonWrapper } from './styled'
import { addMail } from './emailTableSlice'
import { nanoid } from '@reduxjs/toolkit'

const EmailTable = () => {
  const dispatch = useDispatch()

  const handleAddMail = () => {
    console.log('clicked')
    dispatch(
      addMail({
        title: 'testowy tytuł2',
        id: nanoid(),
        text: 'Scrócony text wiadomości lorem ipsum',
        date: '2022-04-15T01:41:48.151Z',
      })
    )
  }

  return (
    <>
      <ButtonWrapper>
        <Button handleClick={handleAddMail} />
      </ButtonWrapper>
      <Table />
    </>
  )
}

export default EmailTable
