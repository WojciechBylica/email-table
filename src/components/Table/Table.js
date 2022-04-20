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
  StyledSpan,
  StyledTable,
  TableCell,
  TableRow,
} from './styled'
import { formatDate, cutText, purifyTextFromHTML } from '../../helpers'
import Modal from '../Modal'
import { useEditEmail, useIframe, useModal } from '../../hooks'
import DeleteEmail from '../DeleteEmail'
import { useState } from 'react'
import Iframe from '../Iframe'
import Form from '../Form'

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

  const [showIframe, iframeContent, handleShowIframe, handleHideIframe] =
    useIframe()

  const [editEmail, previousContent, handleOpenDataEdit, handleHideDataEdit] =
    useEditEmail()

  return (
    <>
      {openModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <DeleteEmail id={removeId} handleCloseModal={handleCloseModal} />
        </Modal>
      )}
      {showIframe && (
        <Modal handleCloseModal={handleHideIframe}>
          <Iframe title={iframeContent.title} text={iframeContent.text} />
        </Modal>
      )}
      {editEmail && (
        <Modal handleCloseModal={handleHideDataEdit}>
          <Form
            previousTitle={previousContent.title}
            previousText={previousContent.text}
            previousId={previousContent.id}
            previousDate={previousContent.date}
            buttonText="aktualizuj"
            buttonStyle="edit"
            handleCloseModal={handleHideDataEdit}
            editEmail
          />
        </Modal>
      )}
      <StyledTable>
        <thead aria-label="table-header">
          <TableRow>
            <TableCell as="th" noBreakWord scope="row">
              <SortButton onClick={() => dispatch(sortByTitles())}>
                Tytuł<StyledSpan marginBottom>▲</StyledSpan>
              </SortButton>
            </TableCell>
            <TableCell as="th" noBreakWord scope="row">
              Treść wiadomości
            </TableCell>
            <TableCell as="th" noBreakWord scope="row">
              <SortButton onClick={handleSortByDates}>
                Data dodania
                <StyledButtonSpan>
                  <StyledSpan>▲</StyledSpan>
                  <StyledSpan>▼</StyledSpan>
                </StyledButtonSpan>
              </SortButton>
            </TableCell>
            <TableCell as="th" noBreakWord scope="row"></TableCell>
            <TableCell as="th" noBreakWord scope="row"></TableCell>
            <TableCell as="th" noBreakWord scope="row"></TableCell>
          </TableRow>
        </thead>
        <tbody aria-label="table-body">
          {!!emails &&
            emails.map(({ id, title, text, date }) => (
              <TableRow key={id}>
                <TableCell>{title}</TableCell>
                <TableCell>{cutText(purifyTextFromHTML(text), 30)}</TableCell>
                <TableCell>{formatDate(date)}</TableCell>
                <TableCell>
                  <Button
                    label="🔍"
                    details
                    handleClick={() => handleShowIframe(title, text)}
                    width={48}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    label="🖊"
                    edit
                    handleClick={() =>
                      handleOpenDataEdit(title, text, id, date)
                    }
                    width={48}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    label="x"
                    remove
                    handleClick={() => handleRemoveEmail(id)}
                    width={48}
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
