import React, { useContext } from 'react'
import { Card, Button, NavLink } from 'react-bootstrap'
import CartContext from '../store/context-cart'
// import {NavLink} from 'react-router-dom'

export default function Display() {
    const cartCtx = useContext(CartContext)
    const productsArr = [
        { title: 'Colors', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png', },
        { title: 'Black and white Colors', price: 50, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png', },
        { title: 'Yellow and Black Colors', price: 70, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png', },
        { title: 'Blue Color', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png', }
    ]

    const displayJsx = productsArr.map((item, idx) => {

        function sendData(e) {
            e.preventDefault();
            console.log()
            const obj = {
                title: e.target.parentNode.children[0].textContent,
                price: e.target.parentNode.children[2].textContent.split(" ")[1],
                quantity: 1,
                imageURL: e.target.parentNode.parentNode.children[0].src

            }
            cartCtx.addItem(obj)
        }

        return (
            <Card key={item.title} style={{ width: '18rem', background: 'lightgrey' }}>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                    <Card.Title>Album {idx}</Card.Title>
                    <Card.Text>
                        <NavLink href={`/product-details/${item.title}`}>{item.title}</NavLink>
                    </Card.Text>
                    <h4>Rs {item.price}</h4>
                    <Button onClick={sendData} variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        )
    })

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {displayJsx}
        </div>
    )
}
