import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartContext from '../store/context-cart';
import React,{useContext} from 'react';


export default function Cart(props) {
    const cartCtx = useContext(CartContext)
    // const cartElements = [
    //     { title: 'Colors', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png', quantity: 2, },
    //     { title: 'Black and white Colors', price: 50, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png', quantity: 3, },
    //     { title: 'Yellow and Black Colors', price: 70, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png', quantity: 1, }
    // ]

    const cartDisplayJsx = cartCtx.items.map((item) =>
    {
        return(
            <tr >
                <td style={{padding:'15px'}}><img style={{width:'80px',height:'80px'}} src={item.imageURL} alt="pic" />{item.title}</td>
                <td style={{padding:'15px'}}>Rs {item.price}</td>
                <td style={{padding:'15px'}}>{parseInt(item.quantity)}</td>
                <td style={{padding:'15px'}}><button style={{borderRadius:'15px',color:'white',background:'blue'}}>Remove</button></td>
            </tr>
        )
    })
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
                    <p>Yout Items are below </p>
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



