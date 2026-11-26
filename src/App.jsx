import React from 'react'
import Products from './pages/Products'
import ProductsDetails from './pages/ProductsDetails'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import "./App.css"

function App() {
  return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home/>}/>
           <Route path="/Products" element={ <Products/>}/>
           <Route path="/details/:id" element={<ProductsDetails />} />
             <Route path="/About" element={ <About/>}/>
        </Routes>
      </div>
  )
}

export default App
