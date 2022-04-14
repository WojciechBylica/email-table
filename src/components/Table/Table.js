import Button from '../Button'

const Table = () => {
  const data = [
    {
      title: 'testowy tytuł',
      id: 'testowy tytuł',
      text: 'Scrócony text wiadomości lorem ipsum',
      date: '2022-04-14T01:41:48.151Z',
    },
  ]
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
        {data.map((mail) => (
          <tr>
            <td>{mail.title}</td>
            <td>{mail.text}</td>
            <td>{mail.date}</td>
            <td>
              <Button label="x" remove />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
