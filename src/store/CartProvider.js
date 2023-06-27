import React,{useState} from 'react'
import CartContext from './context-cart'

export default function CartProvider(props) {

const [arr,setArr] = useState([]);

function addItem(obj)
{
  setArr((a) =>
  {
    let flag =0;
    if(a.length !==0)
    {
      for(let i=0; i<a.length; i++)
      {
        if(a[i].title === obj.title)
        {
          flag=1;
          let x = parseInt(a[i].quantity)
          a[i].quantity = x+1;
          break;
        }
      }
    }
    
    if(flag === 1)
    {
      return([...a])
    }
    else
    {
      return ([...a,obj])
    }
  })
}


  return (
    <CartContext.Provider value={{items:arr,addItem:addItem}}>
      {props.children}
    </CartContext.Provider>
  )
}
