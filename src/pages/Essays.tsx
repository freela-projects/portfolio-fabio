import Main  from "../components/Main"
import FirebaseImageGallery from "../components/FirebaseImageGallery"

function Essays() {
    return (
        <Main disablePadding>
            <FirebaseImageGallery storagePath="essays" />
        </Main>
    )
    }

export default Essays