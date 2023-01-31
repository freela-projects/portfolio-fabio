import Main  from "../components/Main"
import Navbar  from "../components/Navbar"
import { images } from "../data/fake-data/essays"
import ImageGallery from "../components/ImageGallery"

function Essays() {
    return (
        <Main>
            <ImageGallery images={images} />
        </Main>
    )
    }

export default Essays