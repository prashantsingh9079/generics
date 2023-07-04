import { useState, useRef } from 'react';
import { Nav, Navbar, NavLink, Container } from 'react-bootstrap';
import { useContext } from 'react';
import AuthContext from '../store/Auth-context';
import { useNavigate } from 'react-router-dom';

import classes from './Login.module.css';

const Login = () => {

    const authCtx = useContext(AuthContext)
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    console.log(authCtx.token)
    const [isLogin, setIsLogin] = useState(true);
    const [req, setReq] = useState(false)
    const [e, setE] = useState(null);
    var msg = ''
    console.log(authCtx.isLogin)

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = async (event) => {

        event.preventDefault();
        setE(null)
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;


        if (isLogin) {
            try {
                const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDacqfT8ARDkcxvsfQy3sn9n6t4rAuiclo", { method: 'POST', body: JSON.stringify({ email: enteredEmail, password: enteredPassword, returnSecureToken: true }), headers: { 'Content-Type': 'application/json' } })
                if (response.ok === false) 
                {
                    const detailByServer = await response.json()
                    console.log(detailByServer.error.message)
                    alert(detailByServer.error.message)
                    emailRef.current.value = '';
                    passwordRef.current.value = ''
                }
                else 
                {
                    const dataFromServer = await response.json()
                    console.log(dataFromServer.idToken)
                    localStorage.setItem("token",dataFromServer.idToken)
                    authCtx.login(dataFromServer.idToken)
                    navigate('/store')
                }
                }
            catch (error) {
                console.log("error below")
                console.log(error.message)
            }
        }
        else {
            setReq(true);
            try {
                const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDacqfT8ARDkcxvsfQy3sn9n6t4rAuiclo",
                    {
                        method: 'POST',
                        body: JSON.stringify(
                            {
                                email: enteredEmail,
                                password: enteredPassword,
                                returnSecureToken: true
                            }
                        ),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                );
                if (response.ok === false) {
                    const detailByServer = await response.json()
                    console.log(detailByServer)
                    alert(detailByServer.error.message)
                }
                else {
                    const detailByServer = await response.json()
                    console.log(detailByServer)
                    authCtx.login(detailByServer.idToken)
                    navigate('/store')
                }

            }
            catch (error) {
                setE(true)
                console.log(error.message)
                msg = error.message;
            }
            setReq(false)
        }
    }




    return (
        <>

            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">The Generics</Navbar.Brand>
                    <Nav className="me-auto">
                        {authCtx.isLogin && <Nav.Link href="/home">Home</Nav.Link>}
                        {authCtx.isLogin && <Nav.Link href="/store">Store</Nav.Link>}
                        {authCtx.isLogin && <Nav.Link href="/about">About</Nav.Link>}
                        {authCtx.isLogin && <Nav.Link href='/contact'>Contact Us</Nav.Link>}
                        {!authCtx.isLogin && <NavLink href='/'>Login</NavLink>}

                    </Nav>
                    {/* <Button onClick={props.cartTrue}>Cart <button style={{background:'red',borderRadius:'10px'}}> <span style={{color:'white',fontSize:'medium'}}>{num}</span> </button></Button> */}
                </Container>
            </Navbar>

            <section className={classes.auth}>
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                <form onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input type='email' id='email' required ref={emailRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Your Password</label>
                        <input
                            type='password'
                            id='password'
                            ref={passwordRef}
                            required
                        />
                        {req ? 'sending request...' : ''}
                        {e ? { msg } : ''}
                    </div>
                    <div className={classes.actions}>
                        <button
                            type='button'
                            className={classes.toggle}
                            onClick={switchAuthModeHandler}
                        >

                            {isLogin ? 'Create new account' : 'Login with existing account'}
                        </button>
                        <button type='submit'>{isLogin?'Proceed':'Create'}</button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Login;