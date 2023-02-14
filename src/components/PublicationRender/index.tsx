import Transition from "../Transition";
import translate from "../../utils/translate";
import { PublicationContainer } from "./style";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { useState } from "react";

interface PublicationProps {
    publications: {
        id: number;
        url: string;
    }[]
}

function PublicationRender(props: PublicationProps){
    const { publications } = props
    const [images, setImages] = useState<{ id: number, url: string }[]>([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [showModal, setShowModal] = useState(false)

    const handleNextSlide = () => {
        images.length - 1 > currentSlide ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(0)
    }

    const handlePreviousSlide = () => {
        currentSlide > 0 ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(images.length - 1)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    return(
        <Transition>
            <PublicationContainer>
                <h5>{translate("booksAndMagazines")}</h5>
                <div>
                    {
                        publications.map((value, index)=> {
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