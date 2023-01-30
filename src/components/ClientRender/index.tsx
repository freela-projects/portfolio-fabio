import Transition from "../Transition";
import { ClientsContainer } from "./style";

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
               
                <h5>Portfólio de clientes com trabalhos realizados</h5>
                <div>
                    <div>
                        {
                            images.map((value, index)=>{
                                return <img src={value.url} key={index}/>
                            })
                        }
                    </div>
                </div>
            </ClientsContainer>

        </Transition>
    )

}


export default RenderClient;