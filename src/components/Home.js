import React, { useContext } from 'react'
import { Nav, Navbar, Container, Card, Table, Button } from 'react-bootstrap'
import bandImg from '../assets/imga.jpg'
import AuthContext from '../store/Auth-context'


export default function Home() {

    const authCtx = useContext(AuthContext)
    const arr = [
        { date: 'Jun 25', place: 'Delhi', song: 'DTE ENERGY MUSIC THEATRE' },
        { date: 'Jun 29', place: 'Pune', song: 'T-MOBILE ARENA' },
        { date: 'Jul 2', place: 'Goa', song: 'CALSBURG NIGHT' },
        { date: 'Sept 13', place: 'Bhilai', song: 'JIGGY LUBE LIVE' },
        { date: 'Oct 1', place: 'Bengalaru', song: 'BUDWEISER STAGE' }
    ]

    const arrJsx = arr.map((i) => {
        return (
            <>
                <tr>
                    <td>{i.date}</td>
                    <td>{i.place}</td>
                    <td>{i.song}</td>
                    <td style={{ textAlign: 'center' }}><Button style={{ background: '#14324b', borderRadius: '20px', color: 'white' }}> Buy Tickets </Button></td>
                </tr>
            </>
        )
    })
    console.log(authCtx.isLogin)
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
                            <Nav.Link href='/contact'>Contact Us</Nav.Link>
                            {!authCtx.isLogin && <Nav.Link href='/'>Login</Nav.Link>}
                        </Nav>
                        {/* <Button onClick={props.cartTrue}>Cart <button style={{background:'red',borderRadius:'10px'}}> <span style={{color:'white',fontSize:'medium'}}>{num}</span> </button></Button> */}
                    </Container>
                </Navbar>
                <Card>
                    <Card.Body style={{ textAlign: 'center', background: 'grey', color: 'white', padding: '5rem', fontSize: 'xxx-large' }}>THE GENERICS
                        <div><a href="https://www.youtube.com/watch?v=epOBenUjIHw"> <img style={{ width: '400px' }} src={bandImg} alt="band" /></a></div>
                        <div><a href="https://www.youtube.com/watch?v=epOBenUjIHw"><i style={{ fontSize: 'medium', color: 'white' }}>Click to view in youtube...</i> </a></div>
                    </Card.Body>
                </Card>
                <Card style={{ padding: '80px' }}>
                    <Table striped bordered hover style={{ border: '1rem solid', borderColor: '#696969' }} >
                        <thead>
                            <tr>
                                <th><b><i>DATE</i></b></th>
                                <th><b><i>VENUE</i></b></th>
                                <th><b><i>THEME</i></b></th>
                                {/* <th><b><i>BOOK NOW</i></b></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {arrJsx}
                        </tbody>
                    </Table>
                </Card>

                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#">Copyright © 2023 By Prashant Singhh </Navbar.Brand>
                        <Navbar.Brand href="https://prashantsingh.xyz/">Checkout my Portfolio</Navbar.Brand>
                        <Navbar.Brand href="https://www.instagram.com/prashantsingh561/">Join me on Instagram</Navbar.Brand>
                        
                    </Container>
                </Navbar>
            </>
        </div>
    )
}
