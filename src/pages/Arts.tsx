import Main  from "../components/Main"
import FirebaseImageGallery from "../components/FirebaseImageGallery"

function Arts() {
    return (
        <Main disablePadding>
            <FirebaseImageGallery storagePath="arts" />
        </Main>
    )
    }

export default Arts