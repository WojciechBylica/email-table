import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px 0;
  margin-top: 10vh;
`

export const TableWrapper = styled.div`
  overflow: auto;
  margin: 0 auto;
  width: 1280px;
  padding: 0 16px;
`
