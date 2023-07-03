import React,{useRef} from 'react'
import { Nav, NavLink, Card, Container, Navbar } from 'react-bootstrap'
// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function Contact() {
    const fnameRef = useRef();
    const lnameRef = useRef();
    const emailRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const zipRef = useRef();
    const queryRef = useRef();
    // const [validated, setValidated] = useState(false);

    const handleSubmit = async(event) => {
        event.preventDefault();
        const data={
            fname:fnameRef.current.value,
            lname:lnameRef.current.value,
            email:emailRef.current.value,
            city:cityRef.current.value,
            state:stateRef.current.value,
            zip:zipRef.current.value,
            query:queryRef.current.value
        }
        console.log(data)
        const res = await fetch("https://ecomm-d424e-default-rtdb.firebaseio.com/queries.json",{
            method:'POST',
            body:JSON.stringify(data),
            headers:{'Content-Type':'application/json'}
        })
        console.log(res)
        const dataGot = await res.json();
        console.log(dataGot)
    };
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
                        <NavLink href='/login'>Login</NavLink>
                    </Nav>
                    {/* <Button onClick={props.cartTrue}>Cart <button style={{background:'red',borderRadius:'10px'}}> <span style={{color:'white',fontSize:'medium'}}>{num}</span> </button></Button> */}
                </Container>
            </Navbar>
            <Card>
                <Card.Body style={{ textAlign: 'center', background: 'grey', color: 'white', padding: '5rem', fontSize: 'xxx-large' }}>THE GENERICS</Card.Body>
            </Card>
            
            <Card  style={{ background: '#fff8dc', paddingLeft: '200px',paddingRight:'200px',color:'black' }}>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue=""
                                ref={fnameRef}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue=""
                                ref={lnameRef}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Email Id</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Email"
                                    aria-describedby="inputGroupPrepend"
                                    ref={emailRef}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" ref={cityRef} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" ref={stateRef} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="Zip" ref={zipRef} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Your Query</Form.Label>
                            <Form.Control style={{width:'1000px',height:'140px'}} type="textbox" ref={queryRef}  required />
                        </Form.Group>
                    </Row>
                    <br />
                    <Button type="submit">Submit </Button>
                </Form>
            </Card>
        </div>
    )
}
