import {useState, useEffect} from 'react'
import Slides from "../components/Slides"
import { listAll, getDownloadURL } from "firebase/storage"
import generateRef from "../utils/generateRef"

function SlidesImage() {
  const homepageRef = generateRef('home')
  const [images, setImages] = useState<{id: number, url: string}[]>([])

  useEffect(() => {
    listAll(homepageRef)
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
    
        <Slides images={images}/>
   
  )
}

export default SlidesImage