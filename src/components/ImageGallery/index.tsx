import { Container, Box, Images } from "./styles"
import { useState, useEffect } from "react"
import Modal from "./Modal";
import Transition from "../Transition";
import createImageGroups from "../../utils/createImageGroups";

interface GalleryProps {
    images: {
        id: number;
        url: string;
    }[]
}

function ImageGallery(props: GalleryProps){
    const { images } = props
    const [showModal, setShowModal] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [viewWidth, setViewWidth] = useState(window.innerWidth)

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
        setShowModal(false)
    }

    const imageGroups = createImageGroups(viewWidth, images)

    useEffect(() => {
        const onWidthChange = () => {
            setViewWidth(window.innerWidth)
        }

        window.addEventListener("resize", onWidthChange)

        return () => {
            window.removeEventListener("resize", onWidthChange)
        }
        
    }, [])

    return (
        <Transition>
            <Container >
                <Box >
                {
                    imageGroups.map((imageGroup, index) => {
                        const uniqueKey = `image-group-${index}`
                        return (
                            <Images key={uniqueKey} >
                                {
                                    imageGroup.map(image => {
                                        return (
                                       
                                                <img 
                                                    key={image.id}
                                                    src={image.url} 
                                                    alt="Gallery Image" 
                                                    onClick={() => {
                                                        setShowModal(true)
                                                        setCurrentSlide(image.id - 1)
                                                    }} />
                                  
                                        )
                                    })
                                }
                            </Images>
                        )
                    })
                }
                </Box>
                {
                    showModal && <Modal 
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