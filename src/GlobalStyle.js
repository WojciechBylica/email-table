import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
    display: flex;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    margin: 0 auto;
    background: ${({ theme }) => theme.color.white};
    font-size: 15px;
}
`
