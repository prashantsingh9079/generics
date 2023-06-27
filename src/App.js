import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Display from "./components/Display"
import { useState } from 'react';
import Cart from './components/Cart';
import CartProvider from './store/CartProvider';




function App() {
  const [cartState, setCartState] = useState(false);

  function cartTrue()
  {
    setCartState(true)
    console.log("object")
  }

  function cartFalse()
  {
    setCartState(false)
    console.log("object")
  }

  return (
    <>
    
    <CartProvider>
    {cartState && <Cart closeCart={cartFalse}/>}
    <Header cartTrue={cartTrue}/>
    <Display/>
    </CartProvider>
    </>
  );
}

export default App;
