import './App.css'
import Navbar from './components/Navbar'
import AccountPanel from './components/AccountPanel'
import Products from './components/Products'
import Feature from './components/Feature'
import ProductDetail from './components/ProductDetail'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


export default function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <AccountPanel />
        <Navbar />
       
      </div>
      <Routes>
        <Route path="/feature" element={<Feature />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        {/* <Route path="/store" element={} />
        <Route path="/gallery" element={} />
        <Route path="/help" element={} /> */}
      </Routes>
    </BrowserRouter>
  )
}
