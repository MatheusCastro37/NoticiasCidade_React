import { ButtonHeader, HeaderWrapper, NavWrapper } from "./style";
import Logo from '../../assets/images/logo.png';
import Divisor from '../../assets/images/divisor.png';
import { Link, /* useResolvedPath, useMatch*/ } from 'react-router-dom';

export const Header = () => {
  // TODO const resolvedPath = useResolvedPath(Link)
  // TODO const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
  return (
    <>
        <HeaderWrapper>
            <img src={Logo} alt="logo do site" />
            <NavWrapper>
              <Link to='/'><ButtonHeader>Home</ButtonHeader></Link>
              <img src={Divisor} />
              <Link to='/brasil'><ButtonHeader>Brasil</ButtonHeader></Link>
              <img src={Divisor} />
              <ButtonHeader>Internacional</ButtonHeader>
              <img src={Divisor} />
              <ButtonHeader>Economia</ButtonHeader>
              <img src={Divisor} />
              <ButtonHeader>Saúde</ButtonHeader>
              <img src={Divisor} />
              <ButtonHeader>Ciência</ButtonHeader>
              <img src={Divisor} />
              <Link to='/fotos'><ButtonHeader>Fotos</ButtonHeader></Link>
            </NavWrapper>
        </HeaderWrapper>
    </>
  )
}
