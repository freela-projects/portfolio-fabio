import Main  from "../components/Main"
import Navbar  from "../components/Navbar"
import { images } from "../data/fake-data/events"
import ImageGallery from "../components/ImageGallery"

function Events() {
    return (
        <Main>
            <ImageGallery images={images} />
        </Main>
    )
    }

export default Events