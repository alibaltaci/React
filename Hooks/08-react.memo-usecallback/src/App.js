import { useState } from 'react';
import './App.css';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';
import Wrapper from './components/ui/Wrapper/Wrapper';

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
    <Wrapper>
      <Products products={products} addToCart={addToCart} />
      <Cart cart={cart} emptyCart={emptyCart} />
    </Wrapper>
  );
}

export default App;
