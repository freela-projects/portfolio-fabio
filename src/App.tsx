import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Arts from "./pages/Arts"
import Events from "./pages/Events"
import './shared/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/art" element={<Arts/>} />
        <Route path="/eve" element={<Events/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
