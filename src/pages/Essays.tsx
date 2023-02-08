import Main  from "../components/Main"
import FirebaseImageGallery from "../components/ImageGallery"

function Essays() {
    return (
        <Main disablePadding>
            <FirebaseImageGallery storagePath="essays" />
        </Main>
    )
    }

export default Essays