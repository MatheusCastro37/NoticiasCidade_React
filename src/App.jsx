import { Home } from "./pages/Home/Home";
import { Brasil } from './pages/Brasil/Brasil';
import { Fotos } from './pages/Fotos/Fotos';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/brasil' element={<Brasil />} />
        <Route path='/fotos' element={<Fotos />} />
      </Routes>
    </>
  )
}

export default App