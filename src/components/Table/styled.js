import styled, { css } from 'styled-components'

export const StyledTable = styled.table`
  border: ${({ theme }) => theme.border};
  padding: 16px;
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  min-width: 600px;
`
export const TableRow = styled.tr`
  display: grid;
  grid-template-columns: 1fr 3fr 174px 90px;
`

export const TableCell = styled.td`
  border: ${({ theme }) => theme.border};
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: break-word;

  ${({ noBreakWord }) =>
    noBreakWord &&
    css`
      word-break: inherit;
    `}
  &:first-child {
    min-width: 90px;
  }
`
export const SortButton = styled.button`
  border: none;
  background: none;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`
export const StyledButtonSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`
