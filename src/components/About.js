import React, { useContext } from 'react'
import {Nav,Container,Navbar,Card, NavLink} from 'react-bootstrap'
import imga from '../assets/imga.jpg'
import AuthContext from '../store/Auth-context'


export default function About() {
    const authCtx = useContext(AuthContext)
    return (
        <div>
            <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/store">The Generics</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/store">Store</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavLink href='/contact'>Contact Us</NavLink>
                        {!authCtx.isLogin && <Nav.Link href='/'>Login</Nav.Link>}
                    </Nav>
                    {/* <Button onClick={props.cartTrue}>Cart <button style={{background:'red',borderRadius:'10px'}}> <span style={{color:'white',fontSize:'medium'}}>{num}</span> </button></Button> */}
                </Container>
            </Navbar>
            <Card>
                <Card.Body style={{textAlign:'center',background:'grey',color:'white',padding:'5rem',fontSize:'xxx-large'}}>THE GENERICS</Card.Body>
            </Card>
            
        </>
            <h1 style={{ textAlign: 'center', fontFamily: 'monospace' }}>About Us</h1>
            <span style={{ textAlign: 'center' }}>
                <img src={imga} alt="" />
                <p style={{ textAlign: 'center' }}>The Generics Goodies Band originated in 1989 with two members, Gary "The Frog" Swanson and Ray Schnarr. With the "Frog" on keyboards and Schnarr on guitar and vocals, they needed some rhythm, they added "The Great Piersono" for drums and laughs. As time has progressed the band has evolved into a multimusical extravaganza covering music from the forties to the nineties spread over a vast range of genres from country to pop rock. The current nucleus of the band consists of Gary "The Frog" Swanson, keyboards; Ray Schnarr "Schnarsky" guitar & vocals; Ray "The Great Piersono" Pierson percussion and humor, Larry "Uncle Lar" Kuepker, drums, vocals & Chicken Suit, Marilyn, "Tape Lady." Younger saxophone, Virjean "Sweetie" Haywood, vocals John "Jonny" Loftus , Lead Guitar. The band increases in size up to 9 or 10 pieces depending on the gig requirement. This album is a culmination of all the years and all the members who have contributed to the fun and good music and entertainment that has been this bands quest to provide since its inception in 1989. Thanks to all who have listened, laughed, danced and applauded our efforts to make you forget your problems for just a few hours, this ones for you.</p>
            </span>
            <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#">Copyright © 2023 By Prashant Singhh </Navbar.Brand>
                        <Navbar.Brand href="https://prashantsingh.xyz/">Checkout my Portfolio</Navbar.Brand>
                        <Navbar.Brand href="https://www.instagram.com/prashantsingh561/">Join me on Instagram</Navbar.Brand>
                        
                    </Container>
                </Navbar>
        </div>
    )
}
