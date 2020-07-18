import React from 'react'

function Cart(props) {
console.log(props)
    return (
        <div className="cartIcon">
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.2/css/font-awesome.min.css'/>
            <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'/>
    <link rel="stylesheet" href="./style.css"></link>
            <span className="fa-stack fa-2x has-badge" data-numero-compras={props.carrito.items.length}>
                
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
        </div>
    )
}

export default Cart
