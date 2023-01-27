import Main from "../components/Main"
import Navbar from "../components/Navbar"
import ImageGallery from "../components/ImageGallery"
import { images } from "../data/fake-data/restores"

function Restores() {
  return (
    <Main disablePadding>
        <Navbar />
      <ImageGallery images={images}/>
    </Main>
  )
}

export default Restores