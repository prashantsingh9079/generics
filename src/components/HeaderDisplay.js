import React from 'react'
import Header from "./Header";
import Display from "./Display"
import { useState } from 'react';
import Cart from './Cart';
import CartProvider from '../store/CartProvider'


export default function HeaderDisplay() {
    

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
        <div>
            <CartProvider>
                {cartState && <Cart closeCart={cartFalse} />}
                <Header cartTrue={cartTrue} />
                <Display />
            </CartProvider>
        
    </div >
  )
}
