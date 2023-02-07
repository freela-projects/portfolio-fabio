import { Container, Box, Images } from "./styles"
import { useState, useEffect, useRef } from "react"
import Modal from "./Modal"
import Transition from "../Transition"
import createImageGroups from "../../utils/createImageGroups"
import { /*list, */ listAll, getDownloadURL } from "firebase/storage"
import generateRef from "../../utils/generateRef"
import { Grid } from "react-loader-spinner"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface GalleryProps {
    storagePath: string
}

function FirebaseImageGallery(props: GalleryProps){
    const { storagePath } = props
    const bucketRef = generateRef(storagePath)
    const loadingRef = useRef<HTMLDivElement>(null)
    const [images, setImages] = useState<{id: number, url: string}[]>([])
    const [loading, setLoading] = useState(false)
    //const [nextPageToken, setNextPageToken] = useState<string | undefined>(undefined)
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
        //@ts-ignore
        imagesHash.get(currentSlide) === images.length - 1 ? setCurrentSlide(images[0].url) : setCurrentSlide(images[imagesHash.get(currentSlide) + 1].url)
    }

    const handlePreviousSlide = () => {
         //@ts-ignore
        imagesHash.get(currentSlide) === 0 ? setCurrentSlide(images[images.length - 1].url) : setCurrentSlide(images[imagesHash.get(currentSlide) - 1].url)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const imageGroups = createImageGroups(viewWidth, images)

    useEffect(() => {

        const onWidthChange = () => {
            setViewWidth(window.innerWidth)
        }
        /*
         //FIXME: This hack is duplicating images when the user scrolls down
        const fetchImages = async (pageToken?: string, resultsPerpage = 10) => {
            try{
                const page = await list(bucketRef, {maxResults: resultsPerpage, pageToken})
                const urls = await Promise.all(page.items.map(async (item) => {
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
                setImages([...newImages, ...images])
                setNextPageToken(page.nextPageToken)
            }
            catch(err){
                console.log(err)
            }
            finally{
                setLoading(false)
            }
        }

        fetchImages()
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !loading) {
                setLoading(true)
                if(nextPageToken){
                    fetchImages(nextPageToken, 10)
                }
            }
        })
        observer.observe(loadingRef.current as Element)
         */

        // Comment out the code below and uncomment the code above to enable infinite scrolling
        const fetchImages = async () => {
            setLoading(true)
            try{
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
            catch(err){
                console.log(err)
            }
            finally{
                setLoading(false)
            }
        }
        fetchImages()

        window.addEventListener("resize", onWidthChange)

        return () => {
            window.removeEventListener("resize", onWidthChange)
            //observer.disconnect()
        }
        
    }, [/*loading*/])

    

    document.onkeydown = (event: KeyboardEvent) => {
        if(event.key === "ArrowRight"){
            handleNextSlide()
        } else if(event.key === "ArrowLeft"){
            handlePreviousSlide()
        } else if(event.key === "Escape"){
            handleClose()
        }
}

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
                                       
                                                <LazyLoadImage 
                                                    loading="lazy"
                                                    key={image.id}
                                                    src={image.url} 
                                                    effect="blur"
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
                 <div ref={loadingRef}></div>
                 {loading && <Grid
                                height="100"
                                width="100"
                                color="#4fa94d"
                                ariaLabel="grid-loading"
                                radius="12.5"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}/>}
            </Container>
        </Transition>
    )
}

export default FirebaseImageGallery