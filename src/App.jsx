import './App.css'
import AccountPanel from './components/AccountPanel'
import Products from './components/Products'
import Feature from './components/Feature'
import ProductDetail from './components/ProductDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './comps/Layout'
import Header from './comps/Header'


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
