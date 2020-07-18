import React from 'react'
import Button from 'react-bootstrap/Button';

function Carrito(props) {

    const itemsCart = props.carrito.items.map(itemCart => {
        const currentProd = props.productos.items.find(prod => prod.id === itemCart.productId)
        return (
            <div key={itemCart.productId}>
                <img src={currentProd.img} alt="Product pic"></img>
                <h4>{currentProd.title}</h4>
                <p>Quantity: {itemCart.quantity}</p>
            </div>
        )
    })

    return (
        <div>
            {itemsCart}
            <Button variant="primary">Pay</Button>
        </div>
    )
}

export default Carrito
