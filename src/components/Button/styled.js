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
  height: 48px;
  width: 96px;
  cursor: pointer;
  user-select: none;
  box-shadow: 1px 1px 4px ${({ theme }) => theme.color.almostBlack};
  transition: transform 0.3s;

  &:active {
    box-shadow: none;
  }

  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.color.red};
    `}

  ${({ details }) =>
    details &&
    css`
      background-color: ${({ theme }) => theme.color.grey};
    `}

    ${({ edit }) =>
    edit &&
    css`
      background-color: ${({ theme }) => theme.color.cornflowerBlue};
    `}

  ${({ width }) =>
    width &&
    css`
      width: ${({ width }) => `${width}px`};
    `}
`
