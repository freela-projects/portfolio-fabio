
import Transition from "../Transition";
import { PublicationContainer } from "./style";

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
                <h5>Livros e revistas</h5>
                <div>
                    {
                        images.map((value, index)=> {
                            return <img src={value.url} key={index}/>
                        })
                    }
                </div>
            </PublicationContainer>
        </Transition>
    )
}

export default PublicationRender;