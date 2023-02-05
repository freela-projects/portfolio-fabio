import Transition from "../Transition";
import translate from "../../utils/translate";
import { Image360Box, Image360Container, Vizu } from "./style";
import { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

interface Image360Props {
    images: {
        id: number;
        url: string;
        description: string;
    }[]
}

function Image360Render(props: Image360Props){
    const { images } = props

    return(
        <Transition>
            <Image360Container>
                <div>
                    <h5>{translate("Tour360PageTitle")}</h5>
                    {
                        images.map((image, index) => {
                            return <View image={image} key={index}/>
                        })
                    }   
                </div>
            </Image360Container>
        </Transition>
    )
}

function View(props: any){
    const { image, index} = props; 
    const [ viewActive, setViewActive ] = useState(false)

    document.onkeydown = function(e) {
        if(e.key === 'Escape'){
            setViewActive(false)
        }
    }

    return(
        <Image360Box onClick={()=>setViewActive(!viewActive)} key={index}>
            
            <img src={image.image} />
            <a onClick={()=>setViewActive(!viewActive)}>{translate("Tour360Href")}: <span>{image.description}</span></a>

            <Vizu className={`${viewActive? 'opend':'disabled'}`}>
                <InfinitySpin color='rgb(53, 120, 95)'/>
                <iframe allowFullScreen={true} autoCapitalize='yes' src={`${image.url}`} autoCorrect='no'/>
                <p onClick={()=>setViewActive(!viewActive)}>Voltar</p>
            </Vizu>

        </Image360Box>
    )
}

export default Image360Render