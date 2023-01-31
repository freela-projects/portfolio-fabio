import Main from "../components/Main"
import Navbar from "../components/Navbar"
import ImageGallery from "../components/ImageGallery"
import { images } from "../data/fake-data/restores"
import ScrollTop from "../components/ScrollTop"

function Restores() {
  return (
    <Main disablePadding>
      <ImageGallery images={images}/>
      <ScrollTop />
    </Main>
  )
}

export default Restores