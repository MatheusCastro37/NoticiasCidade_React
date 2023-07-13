import { CardWrapper } from './style';
import PostImg from '../../assets/images/taxi.jpg';

export const Card = () => {
  return (<>
    <div>
      <CardWrapper>
          <h3>Destaque</h3>
          <p>Nova Legislação</p>
          <img src={PostImg} alt="Imagem do post" />
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto cupiditate sapiente eum dolor facilis! Quis perspiciatis ullam rem neque dicta dignissimos! Eveniet veniam, illum error sequi aliquid ducimus sint doloremque.</span>
          <div>
            <a href="#">Leia Mais!</a>
          </div>
      </CardWrapper>
    </div>
  </>)
}