import { NewsletterSide } from './style';

export const Newsletter = () => {
  return (<>
    <NewsletterSide>
        <h3>Newsletter</h3>
        <label htmlFor="email">E-mail:</label>
        <input type="email" id='email' placeholder='E-mail'/>
        <button href='#' >Cadastrar</button>
    </NewsletterSide>
  </>)
}