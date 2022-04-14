import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  padding: 8px;
  border-radius: 4px;
  border: none;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.green};

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }

  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.color.red};
    `}
`
