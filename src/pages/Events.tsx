import Main  from "../components/Main"
import ImageGallery from "../components/ImageGallery"
import {useState, useEffect} from 'react'
import { listAll, getDownloadURL } from "firebase/storage"
import generateRef from "../utils/generateRef"

function Events() {
    const eventsRef = generateRef('events')
    const [images, setImages] = useState<{id: number, url: string}[]>([])
    useEffect(() => {
        listAll(eventsRef)
          .then(res => {
          const urls = res.items.map(item => getDownloadURL(generateRef(item.fullPath)))
          Promise.all(urls).then(urls => {
            const imgs = urls.map((url, index) => ({id: index, url}))
            setImages(imgs)
          })
        })
          .catch(err => console.log(err))
      }, [])
    return (
        <Main>
            <ImageGallery images={images} />
        </Main>
    )
    }

export default Events