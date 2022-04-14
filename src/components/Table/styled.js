import styled from 'styled-components'

export const StyledTable = styled.table`
  border: ${({ theme }) => theme.border};
  padding: 16px;
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
`
export const TableRow = styled.tr`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 90px;
`

export const TableCell = styled.td`
  border: ${({ theme }) => theme.border};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: break-word;
`
