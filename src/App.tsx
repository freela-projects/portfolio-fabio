import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Arts from "./pages/Arts"
import './shared/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/art" element={<Arts/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
