import Main  from "../components/Main"
import Navbar  from "../components/Navbar"
import { images } from "../data/fake-data/arts"
import ImageGallery from "../components/ImageGallery"

function Arts() {
    return (
        <Main>
            <Navbar />
            <ImageGallery images={images} />
        </Main>
    )
    }

export default Arts