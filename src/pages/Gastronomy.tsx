import Main  from "../components/Main"
import Navbar  from "../components/Navbar"
import { images } from "../data/fake-data/gastronomy"
import ImageGallery from "../components/ImageGallery"

function Gastronomy() {
    return (
        <Main>
            <ImageGallery images={images} />
        </Main>
    )
    }

export default Gastronomy