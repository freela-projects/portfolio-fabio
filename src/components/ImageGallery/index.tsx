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
    const imagesHash = new Map<string, number>()
    let index = 0 
    for (const image of images){
        imagesHash.set(image.url, index)
        index++
    }
    const [showModal, setShowModal] = useState(false)
    const [currentSlide, setCurrentSlide] = useState<string>("")
    const [viewWidth, setViewWidth] = useState(window.innerWidth)

    const handleNextSlide = () => {
        imagesHash.get(currentSlide) === images.length - 1 ? setCurrentSlide(images[0].url) : setCurrentSlide(images[imagesHash.get(currentSlide) + 1].url)
    }

    const handlePreviousSlide = () => {
        imagesHash.get(currentSlide) === 0 ? setCurrentSlide(images[images.length - 1].url) : setCurrentSlide(images[imagesHash.get(currentSlide) - 1].url)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const imageGroups = createImageGroups(viewWidth, images)

    useEffect(() => {

        const keyboardEvents = (event: KeyboardEvent) => {
            if(event.key === "ArrowRight"){
                handleNextSlide()
            } else if(event.key === "ArrowLeft"){
                handlePreviousSlide()
            } else if(event.key === "Escape"){
                handleClose()
            }
        }
        window.addEventListener("keydown", keyboardEvents)
        const onWidthChange = () => {
            setViewWidth(window.innerWidth)
        }

        window.addEventListener("resize", onWidthChange)

        return () => {
            window.removeEventListener("resize", onWidthChange)
            window.removeEventListener("keydown", keyboardEvents)
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
                                                        if (viewWidth < 768) return
                                                        setShowModal(true)
                                                        setCurrentSlide(image.url)
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
                                        imagePath={currentSlide || ""} 
                                        nextSlide={handleNextSlide} 
                                        previousSlide={handlePreviousSlide}
                                        close={handleClose} />
                }
            </Container>
        </Transition>
    )
}

export default ImageGallery