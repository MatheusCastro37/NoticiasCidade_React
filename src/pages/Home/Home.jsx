import { Header } from "../../components/Header/Header";
import { NavSide } from '../../components/NavSide/NavSide';
import { Card } from '../../components/Card/Card';
import { HeaderWrapper, MainWrapper } from "./style";
import Detalhe from '../../assets/images/detalhe-topo.png';
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <HeaderWrapper>
        <Header />
        <img src={Detalhe} alt="Detalhe" />
      </HeaderWrapper>
      <MainWrapper>
        <div>
          <NavSide />
        </div>
        <div id="PostsMain">
          <Card post="Taxi" title="Mundo"/>
          <Card post="Doutor" title="Noticias Recentes"/>
        </div>
      </MainWrapper>
      <Footer />
    </>
  )
}