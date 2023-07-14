import PropTypes from 'prop-types';
import { CardPost, CardPostBottom } from './style';
import Taxi from '../../assets/images/taxi.jpg';
import Doutor from '../../assets/images/doutor.jpg';
import Tecnologia from '../../assets/images/tecnologia.jpg';
import Mundo from '../../assets/images/mundo.jpg'

export const Card = ({post, title}) => {
  return (<>
    <div>
      <CardPost>
          <h3>Destaque</h3>
          <p>Nova Legislação</p>
          <img src={post === "Taxi" ? Taxi : Doutor} alt="Imagem do post" />
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto cupiditate sapiente eum dolor facilis! Quis perspiciatis ullam rem neque dicta dignissimos! Eveniet veniam, illum error sequi aliquid ducimus sint doloremque.</span>
          <div>
            <a href="#">Leia Mais!</a>
          </div>
      </CardPost>
      <CardPostBottom>
        <h3>{title}</h3>
        <div>
          <img src={post === "Taxi" ? Tecnologia : Tecnologia} />
          <div>
            <h4>Novas Tecnologias</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <hr />
        <div>
          <img src={post === "Taxi" ? Tecnologia : Mundo} />
          <div>
            <h4>Novas Tecnologias</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <hr />
        <div>
          <img src={post === "Taxi" ? Tecnologia : Taxi} />
          <div>
            <h4>Novas Tecnologias</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <hr />
        <div>
          <img src={post === "Taxi" ? Tecnologia : Doutor} />
          <div>
            <h4>Novas Tecnologias</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </CardPostBottom>
    </div>
  </>)
}

Card.propTypes = {
  post: PropTypes.string,
  title: PropTypes.string
}