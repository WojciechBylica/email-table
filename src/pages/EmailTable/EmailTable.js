import { Button, Form, Modal, Table } from '../../components'
import { ButtonWrapper, TableWrapper } from './styled'
import { useState } from 'react'

const EmailTable = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

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
