import Transition from "../Transition";
import translate from "../../utils/translate";
import { PublicationContainer } from "./style";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { useState } from "react";
import Modal from "../FirebaseImageGallery/Modal";

interface PublicationProps {
    publications: {
        id: number;
        url: string;
    }[]
}

function PublicationRender(props: PublicationProps){

    const { publications } = props
    const [currentSlide, setCurrentSlide] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [viewWidth, setViewWidth] = useState(window.innerWidth)

    const handleNextSlide = () => {
        publications.length - 1 > currentSlide ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(0)
    }

    const handlePreviousSlide = () => {
        currentSlide > 0 ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(publications.length - 1)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    document.onkeydown = (event: KeyboardEvent) => {
        if (event.key === "ArrowRight") {
            handleNextSlide()
        } else if (event.key === "ArrowLeft") {
            handlePreviousSlide()
        } else if (event.key === "Escape") {
            handleClose()
        }
    }

    return(
        <Transition>
            <PublicationContainer>
                <h5>{translate("booksAndMagazines")}</h5>
                <div className="rendering">
                    {
                        publications.map((value, index)=> {
                            return <LazyLoadImage 
                                        threshold={30}
                                        src={value.url} 
                                        key={index} 
                                        effect="opacity"
                                        onClick={() => {
                                            if (viewWidth < 768) return
                                            setShowModal(true)
                                            setCurrentSlide(index)
                                        }}
                                        />
                        })
                    }                    
                </div>

                {
                    showModal? <Modal 
                        imagePath={publications[currentSlide].url}
                        nextSlide={handleNextSlide}
                        previousSlide={handlePreviousSlide}
                        close={handleClose}
                    
                    /> :<></>
                }
            </PublicationContainer>
        </Transition>
    )
}



export default PublicationRender;