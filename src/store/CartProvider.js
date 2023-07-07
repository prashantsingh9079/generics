import React, { useState } from 'react'
import CartContext from './context-cart'




export default function CartProvider(props) {

  const [arr, setArr] = useState([]);

  function removeItem(id) {






    setArr((a) => {
      const newA = [];
      for (let i = 0; i < a.length; i++) {
        // console.log("comparing"+a[i].imageURL+"--->"+id)
        if (id === a[i].imageURL && a[i].quantity > 0) {
          console.log("near to delete")
          if (a[i].quantity > 1) {
            let b = { title: a[i].title, price: a[i].price, quantity: a[i].quantity - 1, imageURL: a[i].imageURL }
            newA.push(b)
          }
        }
        else {
          newA.push(a[i])

        }
      }
      return newA
    }
    )
  }

  function addItem(obj) {



    setArr((a) => {
      let flag = 0;
      const newA = []
      if (a.length !== 0) {

        for (let i = 0; i < a.length; i++) {
          if (a[i].title === obj.title) {
            flag = 1;
            let x = parseInt(a[i].quantity)
            x = x + 1;
            let b = { title: a[i].title, price: a[i].price, quantity: x, imageURL: a[i].imageURL }

            newA.push(b)


          }
          else {
            newA.push(a[i])

          }
        }
      }

      if (flag === 1) {
        return (newA)
      }
      else {
        const newAA = a.concat(obj)
        return (newAA)
      }
    })


  }








  return (
    <CartContext.Provider value={{ items: arr, addItem: addItem, removeItem: removeItem }}>
      {props.children}
    </CartContext.Provider>
  )
}
