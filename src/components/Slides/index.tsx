import { SlideShow } from "./styles"
import { useState, useEffect } from "react"

interface SlidesProps {
  images: {
    id: number
    url: string
  }[]
}

function Slides({ images }: SlidesProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const delay = 3000

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % images.length)
    }, delay);
    return () => clearInterval(intervalId);
  }, [images.length])

  return (
      <SlideShow>
        {images.map((image, index) => (
          <img 
            style={{opacity: `${index === currentIndex ? 1 : 0}`}}
            key={image.id} 
            src={image.url} 
            loading="eager"
            alt="slide" />
        ))}
      </SlideShow>
  )
}

export default Slides