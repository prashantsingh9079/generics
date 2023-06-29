import React from 'react';
import {useParams} from 'react-router-dom';
import {Nav,Navbar,Container,NavLink, Card} from 'react-bootstrap'

export default function Product() {
    const param = useParams();
    console.log(param.pid)
    if(param.pid==='Black and white Colors')
    {
        var imgLink = 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png'
    }
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">The Generics</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/">Store</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavLink href='/contact'>Contact Us</NavLink>
                    </Nav>
                    {/* <Button onClick={props.cartTrue}>Cart <button style={{background:'red',borderRadius:'10px'}}> <span style={{color:'white',fontSize:'medium'}}>{num}</span> </button></Button> */}
                </Container>
            </Navbar>

        <Card>
            <h1>{param.pid}</h1>
            <img style={{width:'300px'}} src={imgLink} alt="" />
            <h3>Reviews</h3>
            <li>3 stars</li>

        </Card>

    </div>
  )
}
