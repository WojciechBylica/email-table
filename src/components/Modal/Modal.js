import Button from '../Button'
import { ModalWrapper, Wrapper, ButtonWrapper } from './styled'

const Modal = ({ children, handleCloseModal }) => {
  return (
    <ModalWrapper>
      <Wrapper>
        <ButtonWrapper>
          <Button
            label="x"
            remove
            width="48px"
            handleClick={handleCloseModal}
          />
        </ButtonWrapper>
        {children}
      </Wrapper>
    </ModalWrapper>
  )
}

export default Modal
