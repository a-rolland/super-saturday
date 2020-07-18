import React from 'react';
import {
	Container,
	Row,
	Media,
	Modal,
	Button,
	Col,
	Accordion,
	Card,
} from 'react-bootstrap';
import Comentarios from './Comentarios';

function Recetas(props) {
	const recipes = props.recetas.items.map((receta) => (
		<Media as="li">
			<img
				width={200}
				width={200}
				className="align-self-start mr-3"
				src={receta.img}
				alt={receta.title}
			/>
			<Media.Body className="m-3">
				<h5>{receta.title}</h5>
				<p>{receta.description}</p>
				<Accordion defaultActiveKey="0">
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Card.Header} eventKey="0">
								Comentarios:
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
							<Card.Body>
								<Comentarios
									recetaId={receta.id}
									comentarios={props.comentarios}
									setComentariosRecetas={props.setComentariosRecetas}
								/>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</Media.Body>
		</Media>
	));
	return (
		<Container fluid>
			<Row>
				<Col sm={9}>
					<h1>Recetas</h1>
				</Col>
				<Col sm={3}>
					<Button href="/recetas/add">New</Button>
				</Col>
			</Row>
			<Row>
				<Col>{recipes}</Col>
			</Row>
		</Container>
	);
}

export default Recetas;
