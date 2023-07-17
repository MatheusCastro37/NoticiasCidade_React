import { styled } from "styled-components";
import Fundo from '../../assets/images/fundo-caixa.png';

export const CardPost = styled.div`
    height: fit-content;
    margin: 0 10px 10px 10px;

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
        margin: 10px 0 5px 0;
        padding: 0 5px;
        color: #FFFFFF;
    }

    img{
        width: 100%;
        border: 2px solid gray;
    }

    span{
        display: block;
    }

    div{
        padding: 5px 0;
    }
`

export const CardPostBottom = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin: 0 10px;

    >div{
        display: flex;
        padding: 5px;
        margin: 5px;

        &:hover{
            cursor: pointer;
            background-color: #e6e6e6;
        }
    }

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

    img{
        width: 75px;
        height: 50px;
    }

    p{
        font-size: 12px;
    }

    h4{
        font-size: 14px;
        color: blueviolet;
    }
`