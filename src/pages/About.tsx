import { HStack, VStack } from "../components/ImageGallery/styles"
import {BsInstagram, BsFacebook} from "react-icons/bs"
import Main from "../components/Main"
import Text from "../components/Text"
import translate from "../utils/translate"

function About() {
    return (
        <Main 
            style={{alignItems: "center", justifyContent:"center"}}>
                
            <HStack alignItems="flex-start" flexWrap="wrap">
                <VStack alignItems="flex-start">
                    <img src="https://static.wixstatic.com/media/62ab43_3f9f4f573d014cf59e2a2104de996017.jpg/v1/fill/w_230,h_345,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/62ab43_3f9f4f573d014cf59e2a2104de996017.jpg" alt="Fabio Peixoto" />
                </VStack>
                <VStack alignItems="flex-start">
                <h2>Fabio Peixoto</h2>
                    <Text>
                        {translate("aboutAuthorText")}
                    </Text>
                    <HStack height="40px" justifyContent="flex-start" margin="20px 0 0 0">
                        <a href="https://www.instagram.com/fabiopeixotoart/" target="_blank" rel="noreferrer" style={{marginRight: 20}}>
                            <BsInstagram size={30} color="#ffffff"/>
                        </a>
                        <a href="https://www.facebook.com/fabiopeixotoart/" target="_blank" rel="noreferrer">
                            <BsFacebook size={30} color="#ffffff"/>
                        </a>
                    </HStack>
                </VStack>          
            </HStack>
        </Main>
    )
}

export default About