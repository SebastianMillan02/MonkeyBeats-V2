import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Productos from './pages/Productos';
import ItemDetail from './components/ItemDetail';
import Categoria  from './pages/Categoria';
import Home from './pages/Home'
import Footer from './components/Footer';
import Carrito from './pages/Carrito';
import CartProvider from './context/CartContext';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/productos' element={<Productos />}/>
        <Route path="/producto/:id" element={<ItemDetail />} />
        <Route path="/categoria/:categoriaId" element={<Categoria />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
