import './App.css'
import Navbar from './components/Navbar'
import AccountPanel from './components/AccountPanel'
import ProductCard from './components/ProductCard'
import FirebaseSnapshot from './FirebaseSnapshot'

export default function App() {

  const cards = FirebaseSnapshot().map(item => {
      return (
        <ProductCard 
              item = {item}
        />
      )})

  return (
    <div className="App">
      <AccountPanel />
      <Navbar />
      <div className="product-card-list">
        {cards}
      </div>
    </div>
  )
}
