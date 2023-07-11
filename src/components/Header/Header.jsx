import { ButtonHeader, HeaderWrapper, NavWrapper } from "./style";
import Logo from '../../assets/images/logo.png';
import Divisor from '../../assets/images/divisor.png';

export const Header = () => {
  return (
    <>
        <HeaderWrapper>
            <img src={Logo} alt="logo do site" />
            <NavWrapper>
              <ButtonHeader>Home</ButtonHeader>
              <img src={Divisor} />
              <ButtonHeader>Brasil</ButtonHeader>
              <img src={Divisor} />
              <ButtonHeader>Internacional</ButtonHeader>
              <img src={Divisor} />
              <ButtonHeader>Economia</ButtonHeader>
              <img src={Divisor} />
              <ButtonHeader>Saúde</ButtonHeader>
              <img src={Divisor} />
              <ButtonHeader>Ciência</ButtonHeader>
              <img src={Divisor} />
              <ButtonHeader>Fotos</ButtonHeader>
            </NavWrapper>
        </HeaderWrapper>
    </>
  )
}
