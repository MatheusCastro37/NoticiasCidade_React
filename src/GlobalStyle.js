import { createGlobalStyle } from "styled-components";
import Background from './assets/images/fundo.png'; 

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    body{
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        background: url(${Background}) repeat-x;
    }
`