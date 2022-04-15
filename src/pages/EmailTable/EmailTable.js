import { Button, Form, Modal, Table } from '../../components'
import { ButtonWrapper, TableWrapper } from './styled'
import { useModal } from '../../hooks'

const EmailTable = () => {
  const [openModal, handleOpenModal, handleCloseModal] = useModal()

  return (
    <>
      {openModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <Form handleCloseModal={handleCloseModal} />
        </Modal>
      )}
      <ButtonWrapper>
        <Button handleClick={handleOpenModal} />
      </ButtonWrapper>
      <TableWrapper>
        <Table />
      </TableWrapper>
    </>
  )
}

export default EmailTable
