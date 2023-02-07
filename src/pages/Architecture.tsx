import Main  from "../components/Main"
import {useState, useEffect} from 'react'
import ImageGallery from "../components/ImageGallery"
import { listAll, getDownloadURL } from "firebase/storage"
import generateRef from "../utils/generateRef"

function Architecture() {
    const archRef = generateRef('architecture')
    const [images, setImages] = useState<{id: number, url: string}[]>([])
    useEffect(() => {
        listAll(archRef)
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

export default Architecture