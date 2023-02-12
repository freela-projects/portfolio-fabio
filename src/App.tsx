import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Suspense, useState, useEffect } from "react"
import { IntlProvider } from "react-intl"
import useLoation from "./hooks/useLocation"
import Home from './pages/Home'
import Arts from "./pages/Arts"
import './shared/App.css'
import Architecture from "./pages/Architecture"
import Gastronomy from './pages/Gastronomy';
import Restores from "./pages/Restores"
import About from "./pages/About"
import Essays from './pages/Essays';
import ContactMe from "./pages/Contactme"
import Image360 from "./pages/Image360"

import en from "./locales/en/translation.json"
import pt from "./locales/pt/translation.json"
import Clients from "./pages/Clients"
import Events from "./pages/Events"
import SlidesImage from "./pages/Slides"

function App() {
const location = useLoation()
const userLocation = location?.country_code2
const [appLanguage, setAppLanguage] = useState("pt")

useEffect(()=>{
  if (userLocation) {
      setAppLanguage(userLocation === "BR" ? "pt" : "en")
  }
}, [])

  return (
    <IntlProvider locale={appLanguage} messages={appLanguage === "pt" ? pt : en}>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}>
              <Route path="inicio" element={<SlidesImage/>} />
              <Route path="arquitetura" element={<Architecture/>} />
              <Route path="tour" element={<Image360/>} />
              <Route path="arte" element={<Arts/>} />
              <Route path="gastronomia" element={<Gastronomy/>} />
              <Route path="evento" element={<Events/>} />
              <Route path="ensaio" element={<Essays/>} />
              <Route path="restauracao" element={<Restores/>} />
              <Route path="cliente" element={<Clients/>} />
              <Route path="sobre" element={<About/>} />
              <Route path="conato" element={<ContactMe/>} />
            </Route>

            <Route index path="*" element={<Navigate to="/inicio" />} />

          </Routes>
        </BrowserRouter>
      </Suspense>
    </IntlProvider>
  )
}

export default App
