import Main  from "../components/Main"
import { images } from "../data/fake-data/arts"
import ImageGallery from "../components/ImageGallery"
import ScrollTop from "../components/ScrollTop"

function Arts() {
    return (
        <>
            <ImageGallery images={images} />
            <ScrollTop />
        </>
    )
    }

export default Arts