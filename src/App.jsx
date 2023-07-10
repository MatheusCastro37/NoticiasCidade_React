import { Home } from "./pages/Home/Home";
import { Wrapper } from "./App.style";
import Detalhe from "./assets/images/detalhe-topo.png";

function App() {
  return (
    <>
      <Wrapper>
        <Home />
        <img src={Detalhe} alt="logo do site" />
      </Wrapper>
    </>
  )
}

export default App