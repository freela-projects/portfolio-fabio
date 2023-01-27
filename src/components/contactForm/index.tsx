import { ContactFormContainer } from "./styles";
import { ImFacebook2 } from 'react-icons/im'
import { GrInstagram } from 'react-icons/gr'
import Transition from "../Transition";

function ContactForm(){

    return(
        <Transition>
            <ContactFormContainer>
                <div className="sub-form">
                    <h4>Fabio Peixoto</h4>
                    <p>Salvador | Bahia</p>
                    <p>contato@fabiopeixoto.fot.br</p>
                </div>

                <form action="https://formsubmit.co/thyago.devin@gmail.com" method="POST">
                    <div className="input">
                        <label>Nome*</label>
                        <input type={'text'} name="name" required></input>
                    </div>

                    <div className="input">
                        <label>Email*</label>
                        <input type={'email'} name="email" required></input>
                    </div>

                    <div className="input">
                        <label>Assunto*</label>
                        <input type={'text'} name="assunto" required></input>
                    </div>
                    
                    <div className="input message">
                    
                            <label>Mensagem*</label>
                            <textarea name="message"  required/>
                    
                        
                    </div>

                    <div className="button">
                        <button type="submit" >Enviar</button>
                    </div>

                    

                    <input type={'hidden'} name="_captcha" value="false" />

                </form>

                <div className="social">
                        <p>Siga-me nas redes sociais</p>
                        <div>
                            <ImFacebook2  onClick={()=>window.open('https://www.facebook.com/fabiopeixoto.fot.br')}/>
                            <p>Facebook</p>
                        </div>
                        <div>
                            <GrInstagram onClick={()=> window.open('https://www.instagram.com/fabiopeixotoo/')}/>
                            <p>Instagram</p>
                        </div>
                 </div>
            </ContactFormContainer>
        </Transition>
    )
}

export default ContactForm