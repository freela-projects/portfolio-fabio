import { useState, useEffect } from "react"
import { listAll, getDownloadURL } from "firebase/storage"
import { Container } from "./styles"
import { Grid } from "react-loader-spinner"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Modal from "./Modal"
import Transition from "../Transition"
import getColumnsByViewWidth from "../../utils/createImageGroups"
import generateRef from "../../utils/generateRef"
import Masonry from '@mui/lab/Masonry'
import Box from '@mui/material/Box'
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../../shared/App.css"

interface GalleryProps {
    storagePath: string
}

function FirebaseImageGallery(props: GalleryProps) {
    const { storagePath } = props
    const bucketRef = generateRef(storagePath)
    const [images, setImages] = useState<{ id: number, url: string }[]>([])
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [viewWidth, setViewWidth] = useState(window.innerWidth)
    const [columns, setColumns] = useState(getColumnsByViewWidth(viewWidth))

    const handleNextSlide = () => {
        images.length - 1 > currentSlide ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(0)
    }

    const handlePreviousSlide = () => {
        currentSlide > 0 ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(images.length - 1)
    }

    const handleClose = () => {
        console.log('clicou')
        setShowModal(false)
    }

    useEffect(() => {

        const onWidthChange = () => {
            setViewWidth(window.innerWidth)
            setColumns(getColumnsByViewWidth(window.innerWidth))
            console.log(viewWidth)
        }

        window.addEventListener("resize", onWidthChange)

        const fetchImages = async () => {
            setLoading(true)
            try {
                const { items } = await listAll(bucketRef)
                const urls = await Promise.all(items.map(async (item) => {
                    const url = await getDownloadURL(item)
                    return url
                }))
                const newImages = urls.map((url, index) => {
                    const uniqueId = new Date().getTime() + index
                    return {
                        id: uniqueId,
                        url
                    }
                })
                setImages(newImages)
            }
            catch (err) {
                console.log(err)
            }
            finally {
                setLoading(false)
            }
        }
        fetchImages()


        return () => {
            window.removeEventListener("resize", onWidthChange)
        }

    }, [])



    document.onkeydown = (event: KeyboardEvent) => {
        if (event.key === "ArrowRight") {
            handleNextSlide()
        } else if (event.key === "ArrowLeft") {
            handlePreviousSlide()
        } else if (event.key === "Escape") {
            handleClose()
        }
    }

    return (
        <Transition>
            <Container>
                {
                    loading ?
                        <Grid
                            height="100"
                            width="100"
                            color="#4fa94d"
                            ariaLabel="grid-loading"
                            radius="12.5"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true} />
                        :
                        <Box 
                            sx={{ minHeight: 829 }}>
                            <Masonry
                                columns={columns} 
                                spacing={2}
                                >
                                {images.map((image, index) => (
                                    <div className="imageDiv"
                                        key={image.url}>
                                        <LazyLoadImage
                                            effect="blur"
                                            src={`${image.url}?w=162&auto=format`}
                                            srcSet={`${image.url}?w=162&auto=format&dpr=2 2x`}
                                            alt={image.url}
                                            style={{
                                                display: 'block',
                                                width: '100%',
                                            }}
                                            onClick={() => {
                                                if (viewWidth < 768) return
                                                setShowModal(true)
                                                setCurrentSlide(index)
                                            }}
                                        />
                                    </div>
                                ))}
                            </Masonry>
                        </Box>
                }
            </Container>
            {
                showModal &&
                <Modal
                    imagePath={images[currentSlide].url}
                    nextSlide={handleNextSlide}
                    previousSlide={handlePreviousSlide}
                    close={handleClose}
                />
            }
        </Transition>
    )
}

export default FirebaseImageGallery