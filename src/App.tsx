import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Arts from "./pages/Arts"
import './shared/App.css'
import Architecture from "./pages/Architecture"
import Restores from "./pages/Restores"
import About from "./pages/About"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/art" element={<Arts/>} />
        <Route path="/arq" element={<Architecture/>} />
        <Route path="/res" element={<Restores/>} />
        <Route path="/sob" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
