import './App.css'
import AccountPanel from './pages/AccountPanel'
import Products from './Products/Products'
import Feature from './pages/Feature'
import ProductDetail from './Products/ProductDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Header from './components/Header'


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="feature" element={<Feature />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          {/* <Route path="/store" element={} />
          <Route path="/gallery" element={} />
          <Route path="/help" element={} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
