import { styled } from "styled-components";
import Fundo from '../../assets/images/fundo-caixa.png';

export const CardWrapper = styled.div`
    height: fit-content;
    margin: 0 10px 10px 10px;
    width: 20vw;

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
    }

    p{
        background-color: #b10333;
        width: fit-content;
        margin-top: 10px;
        padding: 0 5px;
        color: #FFFFFF;
    }

    img{
        width: 98%;
        border: 2px solid gray;
    }

    span{
        display: block;
    }

    div{
        padding: 5px 0;
    }
`