import Main  from "../components/Main"
import FirebaseImageGallery from "../components/ImageGallery"

function Gastronomy() {
    return (
        <Main disablePadding>
            <FirebaseImageGallery storagePath="cuisine" />
        </Main>
    )
    }

export default Gastronomy