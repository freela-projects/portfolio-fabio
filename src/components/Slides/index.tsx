import { Slide, SlideShow, Slider } from "./styles"
import { useState, useEffect, useRef } from "react"
import Transition from "../Transition"

interface SlidesProps {
    images: {
        id: number
        url: string
    }[]
}

function Slides({ images }: SlidesProps) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const delay = 2500

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
          setCurrentSlide((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
      }, [currentSlide])

    return (
      <Transition>
        <SlideShow>
            <Slider 
                style={{ transform: `translate3d(${-currentSlide * 100}%, 0, 0)` }}>
                {images.map((image) => (
                    <Slide key={image.id} src={image.url} />
                ))}
            </Slider>
        </SlideShow>
      </Transition>
    )
}

export default Slides