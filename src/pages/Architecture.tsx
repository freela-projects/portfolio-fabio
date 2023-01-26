import Main  from "../components/Main"
import Navbar  from "../components/Navbar"
import { images } from "../data/fake-data/architecture"
import ImageGallery from "../components/ImageGallery"

function Architecture() {
    return (
        <Main>
            <Navbar />
            <ImageGallery images={images} />
        </Main>
    )
    }

export default Architecture