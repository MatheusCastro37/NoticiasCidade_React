import { createGlobalStyle } from "styled-components";
import Background from './assets/images/fundo.png'; 

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    body{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        background: url(${Background}) repeat-x;
    }

    #root{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`