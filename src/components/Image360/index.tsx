import Transition from "../Transition";
import translate from "../../utils/translate";
import { Image360Box, Image360Container } from "./style";

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
                <h5>{translate("Tour360PageTitle")}</h5>
                {
                    images.map((image, index) => {
                        return <View image={image} key={index} />
                    })
                }   
            </Image360Container>
        </Transition>
    )
}

function View(props: any){
    const { image } = props; 
    return(
        <Image360Box>
            <iframe allowFullScreen={true} autoCapitalize='yes' src={`${image.url}`} autoCorrect='no' />
            <a href={image.url}>{translate("Tour360Href")}: <span>{image.description}</span></a>
        </Image360Box>
    )
}

export default Image360Render