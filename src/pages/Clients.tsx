import RenderClient from "../components/ClientRender"
import { ClientAndPublications } from "../components/ClientsAndPublications"
import Main from "../components/Main"
import PublicationRender from "../components/PublicationRender"
import {useState, useEffect} from 'react'
import { listAll, getDownloadURL } from "firebase/storage"
import generateRef from "../utils/generateRef"

function Clients() {
  const publicationsRef = generateRef('publications')
  const clientsRef = generateRef('clients')
  const [publicationsImg, setPublicationsImg] = useState<{id: number, url: string}[]>([])
  const [clientsImg, setClientsImg] = useState<{id: number, url: string}[]>([])
  useEffect(() => {
      listAll(publicationsRef)
        .then(res => {
        const urls = res.items.map(item => getDownloadURL(generateRef(item.fullPath)))
        Promise.all(urls).then(urls => {
          const imgs = urls.map((url, index) => ({id: index, url}))
          setPublicationsImg(imgs)
        })
      })
        .catch(err => console.log(err))
      listAll(clientsRef)
        .then(res => {
        const urls = res.items.map(item => getDownloadURL(generateRef(item.fullPath)))
        Promise.all(urls).then(urls => {
          const imgs = urls.map((url, index) => ({id: index, url}))
          setClientsImg(imgs)
        })
      })
        .catch(err => console.log(err))
    }, [])
  
  return (
    <Main disablePadding>
        <ClientAndPublications>
          <PublicationRender publications={publicationsImg}/>
          <RenderClient images={clientsImg}/>
        </ClientAndPublications>
    </Main>
  )
}

export default Clients