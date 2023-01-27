import Main  from "../components/Main"
import Navbar  from "../components/Navbar"
import { images } from "../data/fake-data/architecture"
import ImageGallery from "../components/ImageGallery"
import ScrollTop from "../components/ScrollTop"

function Architecture() {
    return (
        <Main>
            <Navbar />
            <ImageGallery images={images} />
            <ScrollTop />
        </Main>
    )
    }

export default Architecture