import React, { useState } from 'react'
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function NuevoProducto(props) {
    const {push} = useHistory()
    const initialState = {
        // id: '',
        img: '',
        title: '',
        description: '',
        precio: 0
    }
    const [state, setState] = useState(initialState)
    const handleChange = ({target}) => {
        setState(state => ({
            ...state,
            [target.name]: target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newProduct = {...state, id: `${props.productos.items.length + 1}`}
        const newProducts = [...props.productos.items, newProduct]
        props.setProductos(() => ({items: newProducts})) 
        push('/productos')
    }
    return (
        <div>
           <Form onSubmit={handleSubmit}>
               <FormGroup>
                   <FormLabel>Title</FormLabel>
                   <FormControl 
                    type='text'
                    value={state.title}
                    name='title'
                    onChange={handleChange}
                    placeholder="Add your product's title"
                   />
               </FormGroup>
               <FormGroup>
                   <FormLabel>Description</FormLabel>
                   <FormControl 
                    type='text'
                    value={state.description}
                    name='description'
                    onChange={handleChange}
                    placeholder="Add your product's description"
                   />
               </FormGroup>
               <FormGroup>
                   <FormLabel>Picture URL</FormLabel>
                   <FormControl 
                    type='text'
                    value={state.picture}
                    name='img'
                    onChange={handleChange}
                    placeholder="Add your product's picture URL"
                   />
               </FormGroup>
               <FormGroup>
                   <FormLabel>Precio</FormLabel>
                   <FormControl 
                    type='number'
                    value={state.price}
                    name='precio'
                    onChange={handleChange}
                    placeholder="Add your product's price in EUROS"
                   /><span>€</span>
               </FormGroup>
               <Button type='submit' variant='success'>Save</Button>
           </Form>
        </div>
    )
}

export default NuevoProducto
