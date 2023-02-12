import Main from "../components/Main"
import FirebaseImageGallery from "../components/FirebaseImageGallery"

function Restores() {
  return (
    <Main disablePadding>
      <FirebaseImageGallery storagePath="restorations"/>
    </Main>
  )
}

export default Restores