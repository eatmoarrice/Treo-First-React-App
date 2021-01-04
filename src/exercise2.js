import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Fruit = ({ id, value }) => {
	return (
		<div>
			{id}: {value}
		</div>
	);
};

function App() {
	const allItems = [
		{ id: 'apple', value: '🍎 apple' },
		{ id: 'orange', value: '🍊 orange' },
		{ id: 'grape', value: '🍇 grape' },
		{ id: 'pear', value: '🍐 pear' },
	];
	return (
		<Container>
			{allItems.map((fruit, i) => (
				<Fruit id={fruit.id} value={fruit.value} />
			))}
		</Container>
	);
}

export default App;
