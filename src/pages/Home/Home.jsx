import { Header } from "../../components/Header/Header";
import { Wrapper } from "./style";
import Detalhe from '../../assets/images/detalhe-topo.png';

export const Home = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <img src={Detalhe} alt="Detalhe" />
      </Wrapper>
    </>
  )
}