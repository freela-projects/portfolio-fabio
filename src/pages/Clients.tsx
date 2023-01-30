import RenderClient from "../components/ClientRender"
import Main from "../components/Main"
import Navbar from "../components/Navbar"
import PublicationRender from "../components/PublicationRender"
import ScrollTop from "../components/ScrollTop"
import { images as clientsImg} from "../data/fake-data/clients"
import { images as publicationsImg } from "../data/fake-data/clients"


function Clients() {
  return (
    <Main disablePadding>
        <Navbar />
        <PublicationRender images={publicationsImg}/>
        <RenderClient images={clientsImg}/>
        <ScrollTop />
    </Main>
  )
}

export default Clients