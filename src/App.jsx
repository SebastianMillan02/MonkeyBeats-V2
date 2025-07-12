import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Productos from './pages/Productos';
import ItemDetail from './components/ItemDetail';
import Categoria  from './pages/Categoria';
import Home from './pages/Home'
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/productos' element={<Productos />}/>
        <Route path="/producto/:id" element={<ItemDetail />} />
        <Route path="/categoria/:categoriaId" element={<Categoria />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
