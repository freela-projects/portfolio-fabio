import translate from "../../utils/translate";
import Transition from "../Transition";
import { ClientsContainer } from "./style";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

interface ClientImageProps {
    images: {
        id: number;
        url: string;
    }[]
}

function RenderClient(props: ClientImageProps){
    const { images } = props

    return(
        <Transition>
            <ClientsContainer>               
                <h5>{translate("portfolios")}</h5>
                <div>                  
                    {
                        images.map((value, index)=>{
                            return <LazyLoadImage 
                                    effect="opacity"
                                    src={value.url} 
                                    key={index}/>
                        })
                    }                    
                </div>
            </ClientsContainer>
        </Transition>
    )

}


export default RenderClient;