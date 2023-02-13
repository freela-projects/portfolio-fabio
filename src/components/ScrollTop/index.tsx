import { useState, useEffect } from 'react'
import { HStack } from '../FirebaseImageGallery/styles'
import Button from './styles'
import translate from '../../utils/translate'

function ScrollTop(){
    const [showButton, setShowButton] = useState(false)
    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
    useEffect(() => {
      const handleScroll = () => {
        console.log(window.scrollY)
        if(window.scrollY > 800){
          setShowButton(true)
        } else {
          setShowButton(false)
        }
      }
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])

    return (
       <HStack> 
        {
            showButton ? 
            <Button onClick={handleClick}>{translate("backToTop")}</Button> 
            : 
            <></>
        }
        </HStack>
    )

}

export default ScrollTop