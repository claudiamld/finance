import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4, p, button, input, body{
        font-family: 'Nunito', sans-serif;
    }  

    button{
        cursor: pointer;
        font-weight: bold;
    }
`