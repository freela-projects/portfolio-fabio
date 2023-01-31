import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import Main from "../components/Main"
import Navbar from "../components/Navbar"

function Home() {
  
  const navigate = useNavigate();
  useEffect(()=>{
    navigate('/ini')
  },[])

  return (
    <Main disablePadding>
        <Navbar />
        <Outlet />
    </Main>
  )
}

export default Home