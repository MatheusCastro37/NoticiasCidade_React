import { Header } from "../../components/Header/Header";
import { Card } from '../../components/Card/Card';
import { HeaderWrapper, MainWrapper } from "./style";
import Detalhe from '../../assets/images/detalhe-topo.png';
import { Footer } from "../../components/Footer/Footer";

export const Fotos = () => {
  return (
    <>
      <HeaderWrapper>
        <Header />
        <img src={Detalhe} alt="Detalhe" />
      </HeaderWrapper>
      <MainWrapper>
        <div id="PostsMain">
          <Card post="Taxi" title="Mundo"/>
        </div>
      </MainWrapper>
      <Footer />
    </>
  )
}