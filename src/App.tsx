import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense, useState } from "react"
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

import en from "./locales/en/translation.json"
import pt from "./locales/pt/translation.json"

function App() {
const location = useLoation()
const userLocation = location?.country_code2
const locale = userLocation === "BR" ? "pt" : "en"

  return (
    <IntlProvider locale={locale} messages={locale === "pt" ? pt : en}>
          <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/art" element={<Arts/>} />
        <Route path="/arq" element={<Architecture/>} />
        <Route path="/gas" element={<Gastronomy/>} />
        <Route path="/ens" element={<Essays/>} />
        <Route path="/res" element={<Restores/>} />
        <Route path="/sob" element={<About/>} />
        <Route path="/con" element={<ContactMe/>} />

      </Routes>
    </BrowserRouter>
    </Suspense>
    </IntlProvider>
  )
}

export default App
