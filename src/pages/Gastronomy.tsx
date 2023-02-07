import Main  from "../components/Main"
import FirebaseImageGallery from "../components/ImageGallery"

function Gastronomy() {
    return (
        <Main>
            <FirebaseImageGallery storagePath="cuisine" />
        </Main>
    )
    }

export default Gastronomy