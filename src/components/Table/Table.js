import Button from '../Button'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeMail,
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

const Table = () => {
  const emails = useSelector(selectEmails)
  const sortedByDates = useSelector(selectSortedByDate)
  const dispatch = useDispatch()

  const handleSortByDates = () => {
    if (sortedByDates === 'initial' || sortedByDates === 'old-new') {
      dispatch(sortByDates())
    }
    if (sortedByDates === 'new-old') {
      dispatch(sortByDatesReversed())
    }
  }

  return (
    <StyledTable>
      <thead>
        <TableRow>
          <TableCell as="th" scope="row">
            <SortButton onClick={() => dispatch(sortByTitles())}>
              Tytuł▲
            </SortButton>
          </TableCell>
          <TableCell as="th" scope="row">
            Treść wiadomości
          </TableCell>
          <TableCell as="th" scope="row">
            <SortButton onClick={handleSortByDates}>
              Data dodania
              <StyledButtonSpan>
                <span>▲</span>
                <span>▼</span>
              </StyledButtonSpan>
            </SortButton>
          </TableCell>
          <TableCell as="th" scope="row"></TableCell>
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
                  handleClick={() => dispatch(removeMail(id))}
                  width="48px"
                />
              </TableCell>
            </TableRow>
          ))}
      </tbody>
    </StyledTable>
  )
}

export default Table
