import RenderClient from "../components/ClientRender"
import Main from "../components/Main"
import Navbar from "../components/Navbar"
import ScrollTop from "../components/ScrollTop"
import { images } from "../data/fake-data/clients"

function Clients() {
  return (
    <Main disablePadding>
        <Navbar />
        <RenderClient images={images}/>
        <ScrollTop />
    </Main>
  )
}

export default Clients