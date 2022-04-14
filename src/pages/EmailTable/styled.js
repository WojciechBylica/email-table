import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px;
  margin-top: 10vh;
  display: flex;
  justify-content: flex-end;
`

export const TableWrapper = styled.div`
  overflow: auto;
  margin: 0 auto;
  padding: 0 16px;
`
