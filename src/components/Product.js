import React from 'react'
import { useParams } from 'react-router-dom'
import { Navbar,Nav,Container,NavLink, Card } from 'react-bootstrap'


export default function Product() {

    const params = useParams()
    // console.log(params.pid)

    const productsArr = [
        { title: 'Colors', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png', },
        { title: 'Black and white Colors', price: 50, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png', },
        { title: 'Yellow and Black Colors', price: 70, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png', },
        { title: 'Blue Color', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png', }
    ]
    // console.log(productsArr)
    let obj={};
    for(let i in productsArr)
    {
        // console.log(i)
        if(productsArr[i].title === params.pid)
        {
            obj = productsArr[i];
            break;
        }
    }
    console.log(obj)

  return (
    <div>
      <>
      <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">The Generics</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/">Store</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavLink href='/contact'>Contact Us</NavLink>
                    </Nav>
                </Container>
            </Navbar>

            <Card style={{padding:'30px'}}>
                <img style={{width:'300px',paddingLeft:'20px' }} src={obj.imageUrl} alt="" />
                <h1>{obj.title}</h1>
                <h3>Price is Rs {obj.price}</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque dolores similique iure reprehenderit voluptatem. Ratione, assumenda molestias neque soluta facere architecto impedit distinctio, voluptate tenetur quis mollitia nesciunt ipsam rerum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequuntur dolor optio maiores ex laboriosam? Nisi, molestias perspiciatis illum voluptas at praesentium eaque tempore cum corporis, pariatur animi quisquam ex?</p>
                <h2>Reviews</h2>
                <p><li>nice but too costly</li> <li>higly recommended</li><li>I will rate it 4 stars</li></p>
            </Card>
            
      </>
    </div>
  )
}
