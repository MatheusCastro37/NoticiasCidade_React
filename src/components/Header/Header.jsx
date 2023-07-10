import { HeaderWrapper } from "./style";
import Logo from '../../assets/images/logo.png';

export const Header = () => {
  return (
    <>
        <HeaderWrapper>
            <img src={Logo} alt="logo do site" />
        </HeaderWrapper>
    </>
  )
}
