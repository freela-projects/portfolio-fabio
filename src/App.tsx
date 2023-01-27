import './shared/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Architecture from './pages/Architecture';
import Arts from './pages/Arts';
import Essays from './pages/Essays';
import Home from './pages/Home';
import Gastronomy from './pages/Gastronomy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/art" element={<Arts/>} />
        <Route path="/arq" element={<Architecture/>} />
        <Route path="/gas" element={<Gastronomy/>} />
        <Route path="/ens" element={<Essays/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
