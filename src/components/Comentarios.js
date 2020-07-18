import React from 'react';
import { Link } from 'react-router-dom';
//import AddComentForm from './AddComentForm'

function Comentarios(props) {
	const comentarios = props.comentarios.items
		.filter((c) => c.IdReceta === props.recetaId)
		.map((comentario) => {
			return (
				<div key={comentario.id}>
					<h2>{comentario.title}</h2>
					<p>{comentario.description}</p>
				</div>
			);
		});

	return (
		<div>
			<h1>Comentarios</h1>
			<Link className="boton-new" to={'/comentarios/add/' + props.recetaId}>
				{' '}
				New{' '}
			</Link>
			{comentarios}
		</div>
	);
}

export default Comentarios;
