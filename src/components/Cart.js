import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartContext from '../store/context-cart';
import React, { useContext } from 'react';
// import axios from 'axios';


export default function Cart(props) {
    const cartCtx = useContext(CartContext)

    function removeItem(e) {
        e.preventDefault();
        // console.log(e.target.parentNode.parentNode.children[0].children[0].src)
        let id = e.target.parentNode.parentNode.children[0].children[0].src
        console.log(e.target.parentNode.parentNode)
        cartCtx.removeItem(id)
        // fetch("https://crudcrud.com/api/0311903da86f4f58800232bc37eeb75c/items")
    }

    var cartDisplayJsx;

    
    

        cartDisplayJsx = cartCtx.items.map((item) => {

            return (
                <tr key={item.title} >
                    <td style={{ padding: '15px' }}><img style={{ width: '80px', height: '80px' }} src={item.imageURL} alt="pic" /> {item.title}</td>
                    <td style={{ padding: '15px' }}>Rs {item.price}</td>
                    <td style={{ padding: '15px' }}>{parseInt(item.quantity)}</td>
                    <td style={{ padding: '15px' }}><button onClick={removeItem} style={{ borderRadius: '15px', color: 'white', background: 'blue' }}>Remove</button></td>
                </tr>
            )
        })


        
            
        
    
    

    const a = (<p>Yout Items are below </p>)
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header >
                    <Modal.Title>Your Cart</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {cartCtx.items.length > 0 ? a : <i>empty cart</i>}
                    {/* {cartCtx.items.length===0 ?{alternative}:''} */}
                    {cartDisplayJsx}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeCart}>Close</Button>
                    <Button variant="primary">Proceed</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}



