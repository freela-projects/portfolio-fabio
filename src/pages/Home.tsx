import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import Main from "../components/Main"
import Navbar from "../components/Navbar"
import ScrollTop from "../components/ScrollTop"


function Home() {
  const navigate = useNavigate()

  useEffect(()=>{
    navigate('/inicio')
   },[])
 
  return (
    <Main disablePadding>
        <Navbar />
        <Outlet />
        <ScrollTop />
    </Main>
  )
}

export default Home