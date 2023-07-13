import { Newsletter } from '../Newsletter/Newsletter';
import { NavButton, NavWrapper } from './style';
import CheckIcon from '@mui/icons-material/Check';

export const NavSide = () => {
  return (<>
    <NavWrapper>
        <h3>Entrevistas</h3>
            <NavButton><CheckIcon />José Almeida</NavButton>
            <NavButton><CheckIcon />Felipe Silva</NavButton>
            <NavButton><CheckIcon />Renato Rodrigues</NavButton>
            <NavButton><CheckIcon />Abelardo Silveira</NavButton>
            <NavButton><CheckIcon />André Carlos</NavButton>
            <NavButton><CheckIcon />João Pedro</NavButton>
            <NavButton><CheckIcon />Fernando Weiss</NavButton>
    </NavWrapper>

    <Newsletter />
  </>)
}