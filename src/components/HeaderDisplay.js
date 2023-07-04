import React from 'react'
import Header from "./Header";
import Display from "./Display"
import { useState } from 'react';
import Cart from './Cart';
import CartProvider from '../store/CartProvider'
import { Navbar, Container } from 'react-bootstrap';

export default function HeaderDisplay() {


  const [cartState, setCartState] = useState(false);

  function cartTrue() {
    setCartState(true)
    console.log("object")
  }

  function cartFalse() {
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
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Copyright © 2023 By Prashant Singhh </Navbar.Brand>
          <Navbar.Brand href="https://prashantsingh.xyz/">Checkout my Portfolio</Navbar.Brand>
          <Navbar.Brand href="https://www.instagram.com/prashantsingh561/">Join me on Instagram</Navbar.Brand>

        </Container>
      </Navbar>
    </div >
  )
}
