import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import './shared/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
