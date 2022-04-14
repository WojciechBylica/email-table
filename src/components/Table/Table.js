import Button from '../Button'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeMail,
  selectEmails,
} from '../../pages/EmailTable/emailTableSlice'

const Table = () => {
  const emails = useSelector(selectEmails)
  const dispatch = useDispatch()

  const handleRemoveMail = ({ id }) => {
    console.log('removed')
    dispatch(removeMail(id))
  }

  return (
    <table>
      <thead>
        <tr>
          <th scope="row">Tytuł</th>
          <th scope="row">Treść wiadomości</th>
          <th scope="row">Data dodania</th>
          <th scope="row"></th>
        </tr>
      </thead>
      <tbody>
        {!!emails &&
          emails.map(({ id, title, text, date }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>{text}</td>
              <td>{date}</td>
              <td>
                <Button label="x" remove handleClick={handleRemoveMail} />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default Table
