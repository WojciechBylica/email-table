import styled from 'styled-components'

export const ModalWrapper = styled.div`
  bottom: 0px;
  background-color: ${({ theme }) => theme.color.lightBlack};
  left: 0px;
  position: fixed;
  right: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.color.grey};
  background-color: ${({ theme }) => theme.color.white};
  padding: 24px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
