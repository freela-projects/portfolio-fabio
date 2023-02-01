import { Slide, SlideShow, Slider } from "./styles"
import { useState, useEffect, useRef } from "react"

interface SlidesProps {
  images: {
    id: number
    url: string
  }[]
}

function Slides({ images }: SlidesProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [show, setShow] = useState(false)
  const delay = 2000

  const timeoutRef = useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    // @ts-ignore
    timeoutRef.current = setTimeout(
      () =>
        {
          setShow(!show)
        setCurrentSlide((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )},
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [currentSlide])

  return (
      <SlideShow>
        {show && (
          <Slider
            style={{ transform: `translate3d(${-currentSlide * 100}%, 0, 0)` }}>
            {images.map((image) => (
              <Slide key={image.id} src={image.url} />
            ))}
          </Slider>
        )}
      </SlideShow>
  )
}

export default Slides