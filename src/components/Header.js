import React,{useContext} from 'react'
import './Header.css';
import { Navbar, Nav, Container, Button, Card } from 'react-bootstrap'
import CartContext from '../store/context-cart';

export default function Header(props) {
    const cartCtx = useContext(CartContext);
    var num=0;
    // for(let i=0; i<cartCtx.items.length; i++)
    // {
    //     num += cartCtx.items[i].quantity ;
    // }
    num = cartCtx.items.reduce((curNum,item)=>{
        return curNum + item.quantity;
    },0)
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">The Generics</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Store</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>
                    <Button onClick={props.cartTrue}>Cart <button style={{background:'red',borderRadius:'10px'}}> <span style={{color:'white',fontSize:'medium'}}>{num}</span> </button></Button>
                </Container>
            </Navbar>
            <Card>
                <Card.Body style={{textAlign:'center',background:'grey',color:'white',padding:'5rem',fontSize:'xxx-large'}}>THE GENERICS</Card.Body>
            </Card>
        </>
    )
}
