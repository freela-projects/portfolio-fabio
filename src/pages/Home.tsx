import Main from "../components/Main"
import Navbar from "../components/Navbar"
import Slides from "../components/Slides"
import { images } from "../data/fake-data/home"

function Home() {
  return (
    <Main disablePadding>
        <Navbar />
      <Slides images={images}/>
    </Main>
  )
}

export default Home