import Button from '../Button'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectEmails,
  selectSortedByDate,
  sortByDates,
  sortByDatesReversed,
  sortByTitles,
} from '../../pages/EmailTable/emailTableSlice'
import {
  SortButton,
  StyledButtonSpan,
  StyledTable,
  TableCell,
  TableRow,
} from './styled'
import { formatDate } from '../../helpers'
import Modal from '../Modal'
import { useModal } from '../../hooks'
import DeleteEmail from '../DeleteEmail'
import { useState } from 'react'

const Table = () => {
  const emails = useSelector(selectEmails)
  const sortedByDates = useSelector(selectSortedByDate)
  const dispatch = useDispatch()
  const [openModal, handleOpenModal, handleCloseModal] = useModal()

  const handleSortByDates = () => {
    if (sortedByDates === 'initial' || sortedByDates === 'old-new') {
      dispatch(sortByDates())
    }
    if (sortedByDates === 'new-old') {
      dispatch(sortByDatesReversed())
    }
  }

  const [removeId, setRemoveId] = useState('')

  const handleRemoveEmail = (id) => {
    setRemoveId(id)
    handleOpenModal()
  }

  return (
    <>
      {openModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <DeleteEmail id={removeId} handleCloseModal={handleCloseModal} />
        </Modal>
      )}
      <StyledTable>
        <thead>
          <TableRow>
            <TableCell as="th" noBreakWord scope="row">
              <SortButton onClick={() => dispatch(sortByTitles())}>
                Tytuł▲
              </SortButton>
            </TableCell>
            <TableCell as="th" noBreakWord scope="row">
              Treść wiadomości
            </TableCell>
            <TableCell as="th" noBreakWord scope="row">
              <SortButton onClick={handleSortByDates}>
                Data dodania
                <StyledButtonSpan>
                  <span>▲</span>
                  <span>▼</span>
                </StyledButtonSpan>
              </SortButton>
            </TableCell>
            <TableCell as="th" noBreakWord scope="row"></TableCell>
          </TableRow>
        </thead>
        <tbody>
          {!!emails &&
            emails.map(({ id, title, text, date }) => (
              <TableRow key={id}>
                <TableCell>{title}</TableCell>
                <TableCell>{text}</TableCell>
                <TableCell>{formatDate(date)}</TableCell>
                <TableCell>
                  <Button
                    label="x"
                    remove
                    handleClick={() => handleRemoveEmail(id)}
                    width="48px"
                  />
                </TableCell>
              </TableRow>
            ))}
        </tbody>
      </StyledTable>
    </>
  )
}

export default Table
