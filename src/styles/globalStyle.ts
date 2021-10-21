import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
   
body {
        display: flex;
        align-items:center;
        justify-content: center;
        background-color: #E5E5E5;
    }
    label, label, input, button, small, li,  h1, h2 {        
        font-family: 'Poppins', sans-serif;
    }
    label {
        color: #ababab;
        font-size: 13px;
    }
.center_onMobile {
    @media (max-width: 500px) {
        justify-content: center !important;
        align-items: center !important;
    }
}
`
