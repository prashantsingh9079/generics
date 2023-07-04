import React,{useContext} from 'react'
import './Header.css';
import { Navbar, Nav, Container, Button, Card } from 'react-bootstrap'
import CartContext from '../store/context-cart';
import AuthContext from '../store/Auth-context';
import { useNavigate } from 'react-router-dom';


export default function Header(props) {
    const authCtx = useContext(AuthContext)
    const navigate = useNavigate()
    
    const cartCtx = useContext(CartContext);
    var num=0;
    num = cartCtx.items.reduce((curNum,item)=>{
        return curNum + item.quantity;
    },0)

    function logoutHandler(e)
    {
        e.preventDefault();
        console.log(authCtx.token)
        authCtx.logout()
        console.log(authCtx.token)
        localStorage.removeItem("token")
        navigate('/')
    }
    console.log(authCtx.isLogin)
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/store">The Generics</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/store">Store</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href='/contact'>Contact Us</Nav.Link>
                        {!authCtx.isLogin && <Nav.Link href='/'>Login</Nav.Link>}
                        {/* {!authCtx.isLogin && <NavLink href='/login'>Login</NavLink>} */}
                        
                    </Nav>
                    <Button style={{borderColor:'white',background:'green'}} onClick={props.cartTrue}>Cart <button style={{background:'red',borderRadius:'10px'}}> <span style={{color:'white',fontSize:'medium'}}>{num}</span> </button></Button>
                    <div style={{paddingLeft:'6rem'}}><Button style={{background:'red',borderColor:'white'}} onClick={logoutHandler}  > Logout</Button></div>
                </Container>
            </Navbar>
            <Card>
                <Card.Body style={{textAlign:'center',background:'grey',color:'white',padding:'5rem',fontSize:'xxx-large'}}>THE GENERICS</Card.Body>
            </Card>
            
        </>
    )
}
