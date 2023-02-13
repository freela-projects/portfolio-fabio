import Transition from "../Transition";
import translate from "../../utils/translate";
import { PublicationContainer } from "./style";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

interface PublicationProps {
    images: {
        id: number;
        url: string;
    }[]
}

function PublicationRender(props: PublicationProps){
    const { images } = props

    return(
        <Transition>
            <PublicationContainer>
                <h5>{translate("booksAndMagazines")}</h5>
                <div>
                    {
                        images.map((value, index)=> {
                            return <LazyLoadImage 
                                        threshold={30}
                                        src={value.url} 
                                        key={index} 
                                        effect="opacity"/>
                        })
                    }
                </div>
            </PublicationContainer>
        </Transition>
    )
}

export default PublicationRender;