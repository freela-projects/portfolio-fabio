import Main  from "../components/Main"
import FirebaseImageGallery from "../components/ImageGallery"

function Essays() {
    return (
        <Main>
            <FirebaseImageGallery storagePath="essays" />
        </Main>
    )
    }

export default Essays