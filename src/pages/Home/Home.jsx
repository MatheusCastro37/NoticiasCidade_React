import { Header } from "../../components/Header/Header";
import { NavSide } from '../../components/NavSide/NavSide';
import { HeaderWrapper, MainWrapper } from "./style";
import Detalhe from '../../assets/images/detalhe-topo.png';

export const Home = () => {
  return (
    <>
      <HeaderWrapper>
        <Header />
        <img src={Detalhe} alt="Detalhe" />
      </HeaderWrapper>
      <MainWrapper>
        <NavSide />
      </MainWrapper>
    </>
  )
}