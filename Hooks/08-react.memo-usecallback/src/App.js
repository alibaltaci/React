import { useState } from 'react';
import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';

const phones = [
  { name: "iPhone 12", price: 14000},
  { name: "Galaxy S20", price: 6500},
  { name: "Huawei P40", price: 10000},
]

function App() {
  
  const [ products ] = useState(phones)
  const [ cart, setCart ] = useState([])
  
  const addToCart = (product) => {
    setCart( (cart) => [...cart, product] )
  }

  const emptyCart = () => {
    setCart([])
  }
  return (
    <div className="App">
      <Products products={products} addToCart={addToCart} />
      <Cart cart={cart} emptyCart={emptyCart} />
    </div>
  );
}

export default App;
