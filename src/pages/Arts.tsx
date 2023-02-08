import Main  from "../components/Main"
import FirebaseImageGallery from "../components/ImageGallery"

function Arts() {
    return (
        <Main disablePadding>
            <FirebaseImageGallery storagePath="arts" />
        </Main>
    )
    }

export default Arts