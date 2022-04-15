import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${({ theme }) => theme.color.white};
  padding: 8px;
`

export const StyledInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: ${({ theme }) => theme.border};
  min-width: 250px;
`
