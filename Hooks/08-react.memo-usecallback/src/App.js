import { useCallback, useState } from 'react';
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
  const [ total, setTotal ] = useState(0)

  // 1 - React.memo
  // Parent Component render edildiğinde child componet de render edilir.
  // ( Product )
  
  // 2 - useCallback;
  // component gövdesine yazdığımız aşağıdaki fonksiyonlar her renderda tekrardan
  // render edilir ve değişmiş gibi algılanır. Memorideki yeri değişir. 
  // Bu yüzden bu foksiyonların gönderildiği componentlerde bir değişiklik yoksa dahi
  // bu componentler tekrardan render edilir.
  // Yani reacta bu fonksiyonların değişediğini söylememiz lazım.

  // const addToCart = (product) => {
  //   setCart( (cart) => [...cart, product] )
  //   setTotal( (total) => total + product.price )
  // }

  // const emptyCart = () => {
  //   setCart([])
  //   setTotal(0)
  // }

  // useCallback
  const addToCart = useCallback((product) => {
    setCart( (cart) => [...cart, product] )
    setTotal( (total) => total + product.price )
  }, [] ) // [] --> hep aynı işlemi yapacak hiç değişmeyecek.

  const emptyCart = useCallback(() => {
    setCart([])
    setTotal(0)
  }, [] )

  const removeFromCart = (({price}, index) => {
    setTotal( (total) => total - price )
    setCart( (cart) => cart.filter((item, i) => i !== index) )
  })


  return (
    <Wrapper>
      <Products products={products} addToCart={addToCart} />
      <Cart cart={cart} emptyCart={emptyCart} removeFromCart={removeFromCart} total={total}/>
    </Wrapper>
  );
}

export default App;
