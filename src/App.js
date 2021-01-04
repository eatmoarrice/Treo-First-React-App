import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, CardDeck } from 'react-bootstrap';

const Fruit = ({ description, name, emoji, price }) => {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Body>
				<Card.Title>
					{name}
					{emoji}
				</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Card.Text>Price: ${price}/kg</Card.Text>
				<Card.Text>{description}</Card.Text>
			</Card.Body>
		</Card>
	);
};

function App() {
	const fruits = [
		{ description: 'Good.', name: 'apple', emoji: '🍎', price: 0.5 },
		{ description: 'So so.', name: 'orange', emoji: '🍊', price: 0.2 },
		{ description: 'Okay.', name: 'grape', emoji: '🍇', price: 1.2 },
		{ description: 'Excellent', name: 'pear', emoji: '🍐', price: 1.5 },
	];
	return (
		<Container>
			<CardDeck>
				{fruits.map((fruit, i) => (
					<Fruit name={fruit.name} description={fruit.description} emoji={fruit.emoji} price={fruit.price} key={i} />
				))}
			</CardDeck>
		</Container>
	);
}

export default App;
