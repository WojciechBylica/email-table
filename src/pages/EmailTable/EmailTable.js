import { Button, Table } from '../../components'
import { useDispatch } from 'react-redux'
import { ButtonWrapper, TableWrapper } from './styled'
import { addMail } from './emailTableSlice'
import { nanoid } from '@reduxjs/toolkit'

const EmailTable = () => {
  const dispatch = useDispatch()

  const handleAddMail = () => {
    dispatch(
      addMail({
        title: 'testowy tytuł2',
        id: nanoid(),
        text: 'Scrócony text wiadomości lorem ipsum',
        date: new Date().toISOString(),
      })
    )
  }

  return (
    <TableWrapper>
      <ButtonWrapper>
        <Button handleClick={handleAddMail} />
      </ButtonWrapper>
      <Table />
    </TableWrapper>
  )
}

export default EmailTable
