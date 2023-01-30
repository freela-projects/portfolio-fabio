import { HStack, VStack } from "../components/ImageGallery/styles"
import {BsInstagram, BsFacebook} from "react-icons/bs"
import Main from "../components/Main"
import Navbar from "../components/Navbar"
import Text from "../components/Text"
import translate from "../utils/translate"

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
                    <Text>{translate("aboutAuthorText")}</Text>
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