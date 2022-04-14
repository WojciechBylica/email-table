import Button from '../Button'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeMail,
  selectEmails,
} from '../../pages/EmailTable/emailTableSlice'
import { StyledTable, TableCell, TableRow } from './styled'
import { formatDate } from '../../helpers'

const Table = () => {
  const emails = useSelector(selectEmails)
  const dispatch = useDispatch()

  return (
    <StyledTable>
      <thead>
        <TableRow>
          <TableCell as="th" scope="row">
            Tytuł
          </TableCell>
          <TableCell as="th" scope="row">
            Treść wiadomości
          </TableCell>
          <TableCell as="th" scope="row">
            Data dodania
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
