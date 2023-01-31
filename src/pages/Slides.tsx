import { Outlet } from "react-router-dom"
import Main from "../components/Main"
import Navbar from "../components/Navbar"
import Slides from "../components/Slides"
import { images } from "../data/fake-data/home"

function SlidesImage() {
  return (
    
        <Slides images={images}/>
   
  )
}

export default SlidesImage