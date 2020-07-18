import React, {useState} from 'react'
import {Form,  FormGroup, FormControl, Button } from 'react-bootstrap'
import {useLocation} from 'react-router-dom'

const AddReceta = props => {
    const {push} = useLocation()
    const allRecipes = [...props.recetas.items]
    const initialState = {
        id: String(allRecipes.length),
        title: '',
        description: '',
        img: ''
    }

    const [recipe, setRecipe] = useState(initialState)

    const handleChange = ({target}) => {
        setRecipe({
            ...recipe,
            [target.name]: target.value
        })    
    }

    const handleSubmit = event => {
        event.prevendDefault()
        props.setRecetas(recipe)
        setRecipe({
            title: '',
            description: '',
            img: ''
        })
    }

    return (
        <div>
           <Form onSubmit={handleSubmit}>
               <FormGroup>
                <Form.Label htmlFor="title">Title</Form.Label>
                <Form.Control type="text" name="title" onChange={handleChange} value={recipe.title}/>
               </FormGroup>
               <FormGroup>
               <Form.Label htmlFor="description">Description</Form.Label>
               <Form.Control type="text" name="description" onChange={handleChange} value={recipe.description}/>
               </FormGroup>
               <FormGroup>
               <Form.Label htmlFor="img">Picture URL</Form.Label>
               <Form.Control type="text" name="img" onChange={handleChange} value={recipe.img}/>
               </FormGroup>
               <Button variant="primary" type="submit">SAVE</Button>
            </Form> 
        </div>
    )
}

export default AddReceta
