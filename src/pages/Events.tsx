import Main  from "../components/Main"
import FirebaseImageGallery from "../components/ImageGallery"

function Events() {
    return (
        <Main disablePadding>
            <FirebaseImageGallery storagePath="events"/>
        </Main>
    )
    }

export default Events