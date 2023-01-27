import Main  from "../components/Main"
import Navbar  from "../components/Navbar"
import { images } from "../data/fake-data/arts"
import ImageGallery from "../components/ImageGallery"
import ScrollTop from "../components/ScrollTop"

function Arts() {
    return (
        <Main>
            <Navbar />
            <ImageGallery images={images} />
            <ScrollTop />
        </Main>
    )
    }

export default Arts