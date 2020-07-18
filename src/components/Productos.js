import React from 'react'
import { Link } from 'react-router-dom'

function Productos(props) {

    const addProduct = (id) => {
        props.setCarrito( carrito => {
            const updateCarrito = carrito.items.map(item => {
                const isCurrentCarrito = item.productId === id;
                const quantity = isCurrentCarrito ? item.quantity + 1 : item.quantity
                return {...item, quantity}
            })
            return {items: updateCarrito}
        })
    } 

    const show = props.productos.items.map(producto => (
        <div className="d-flex">
            <img src={producto.img} alt={producto.name}/>
            <div>
                <h3>{producto.title}</h3>
                <p>{producto.description}</p>
            </div>
            <button onClick={() => addProduct(producto.id)}>To cart</button>
        </div>
    ))

    return (
        <div>
            <div>
                <h1>Productos</h1>
                <Link 
                    to="/newProduct"
                    >
                    New Product
                </Link>
            </div>
            {show}
            <Link to="/carrito">
                Checkout
            </Link>
        </div>
    )
}

export default Productos
