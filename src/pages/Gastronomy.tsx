import Main  from "../components/Main"
import FirebaseImageGallery from "../components/FirebaseImageGallery"

function Gastronomy() {
    return (
        <Main disablePadding>
            <FirebaseImageGallery storagePath="cuisine" />
        </Main>
    )
    }

export default Gastronomy