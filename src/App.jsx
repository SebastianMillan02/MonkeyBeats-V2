import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Categoria  from './pages/Categoria';
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:categoriaId" element={<Categoria />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
