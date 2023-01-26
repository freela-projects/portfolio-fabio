import { Container } from "./styles"
import { useState } from "react"
import Modal from "./Modal";
import Transition from "../Transition";

interface GalleryProps {
    images: {
        id: number;
        url: string;
    }[]
}

function ImageGallery(props: GalleryProps){
    const { images } = props
    const [showGallery, setShowGallery] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)

    const handleNextSlide = () => {
        if(currentSlide === images.length - 1){
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }

    const handlePreviousSlide = () => {
        if(currentSlide === 0){
            setCurrentSlide(images.length - 1)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    const handleClose = () => {
        setShowGallery(false)
    }

    return (
        <Transition>
            <Container>
                
                {
                    images.map((image, index) => {
                        return (
                            <img
                                key={image.id}
                                src={image.url}
                                onClick={() => {
                                    setCurrentSlide(index)
                                    setShowGallery(true)
                                }}
                            />
                        )
                    })
                }
                {
                    showGallery && <Modal 
                                        imagePath={images[currentSlide].url} 
                                        nextSlide={handleNextSlide} 
                                        previousSlide={handlePreviousSlide}
                                        close={handleClose} />
                }
            </Container>
        </Transition>
    )
}

export default ImageGallery