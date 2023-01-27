import { HStack, VStack } from "../components/ImageGallery/styles"
import {BsInstagram, BsFacebook} from "react-icons/bs"
import Main from "../components/Main"
import Navbar from "../components/Navbar"
import Text from "../components/Text"


function About() {
    return (
        <Main 
            style={{alignItems: "center", justifyContent:"center"}}>
            <Navbar/>
            <HStack
                justifyContent="center"
                alignItems="center"
                height="100%"
              
                flexWrap="wrap" 
                >
                <img 
                    style={{width: "230px", height: "345px", borderRadius: "10px"}} 
                    src="https://static.wixstatic.com/media/62ab43_3f9f4f573d014cf59e2a2104de996017.jpg/v1/fill/w_230,h_345,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/62ab43_3f9f4f573d014cf59e2a2104de996017.jpg" alt="Foto de perfil"/>
                <VStack>
                    <Text>Fabio Peixoto é formado em Biologia pela Universidade Estadual de Feira de Santana, mas encontrou na fotografia a liberdade e expressão que sempre procurava. Não é à toa que desde 2012 atua como profissional na área em Salvador e já produziu material com diversos clientes e continua sempre à procura do seu melhor, não só na fotografia mas o melhor nas relações interpessoais com seus clientes. Sempre com bom humor e sorriso no rosto percebe que um bom trabalho gira em torno de responsabilidade e uma boa relação entre as pessoas. Atua nas áreas de Arquitetura e Decoração, Fotografia panorâmica 360º, Publicidade, Gastronomia, Moda, Still/Produtos, Shows, Eventos Culturais, Sociais e Corporativos. </Text>
                    <HStack 
                        width="200px" 
                        justifyContent="space-around">
                        <a href="https://www.instagram.com/fabiopxto/" target="_blank" rel="noreferrer">
                            <BsInstagram size={30} color="#fff"/>
                        </a>
                        <a href="https://www.instagram.com/fabiopxto/" target="_blank" rel="noreferrer">
                            <BsFacebook size={30} color="#fff"/>
                        </a>
                    </HStack>
                </VStack>
            </HStack>
        </Main>
    )
}

export default About