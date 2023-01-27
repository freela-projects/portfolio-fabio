
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Arts from "./pages/Arts"
import './shared/App.css'
import Architecture from "./pages/Architecture"
import Gastronomy from './pages/Gastronomy';
import Restores from "./pages/Restores"
import About from "./pages/About"
import Essays from './pages/Essays';
import ContactMe from "./pages/Contactme"

function App() {
  return (
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
  )
}

export default App
