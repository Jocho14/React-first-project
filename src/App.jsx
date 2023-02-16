import './App.css'
import Navbar from './components/Navbar'
import AccountPanel from './components/AccountPanel'
import Product from './components/Product'

export default function App() {
  return (
    <div className="App">
      <AccountPanel />
      <Navbar />
      <Product />
    </div>
  )
}
