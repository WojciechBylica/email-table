import styled from 'styled-components'

export const StyledH2 = styled.h2`
  word-break: break-word;
`

export const StyledIframe = styled.iframe`
  width: 80vw;
  height: 60vh;
  border: ${({ theme }) => theme.border};
`
