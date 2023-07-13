import { styled } from "styled-components";
import Fundo from '../../assets/images/fundo-caixa.png';

export const NewsletterSide = styled.div`
    width: 10vw;
    height: fit-content;
    margin-top: 10px;

    &::after,
    &::before{
        display: block;
        content: '';
        height: 5px;
        background-image: url(${Fundo});
    }

    h3{
        color: #FFFFFF;
        background-color: #294c71;
        padding: 5px;
        font-size: 16px;
        margin-bottom: 5px;
    }

    label:hover,
    button:hover{
        cursor: pointer;
    }

    input{
        margin: 5px 0;
        padding: 5px;
    }

    button{
        padding: 5px 10px;
        background-color: #b10333;
        border: transparent;
        color: #FFFFFF;
        margin-bottom: 5px;
    }
`