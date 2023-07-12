import { styled } from "styled-components";
import Fundo from '../../assets/images/fundo-caixa.png';

export const NavWrapper = styled.div`
    width: 10vw;
    height: fit-content;

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
`

export const NavButton = styled.button`
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 100%;
    height: 40px;
    background: transparent;
    border: none;
    border-bottom: 1px solid #f3f3f3;

    &:hover{
        color: gray;
        cursor: pointer;
        background-color: #f3f3f3;
        svg{
            display: block;
        }
    }

    svg{
        display: none;
        width: 20px;
        height: 20px;
        margin-right: 5px;
        color: gray;
    }
`