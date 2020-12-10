import React, { useEffect, useReducer } from 'react';

import { todoReducer } from './Reducers/todoReducer';

import Form from './components/Form';

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

function App() {

	const [todos, dispatch] = useReducer(todoReducer, [], init)

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleAddTodo = newTodo => dispatch({
		type: 'add',
		payload: newTodo
	});


	return (
		<>
			<h1>Todo App ( {todos.length} )</h1>

			<hr />

			<div className="row">
				<div className="col-md-5 mb-5 mb-md-0">
					<Form
						handleAddTodo={handleAddTodo}
					/>
				</div>

				<div className="col-md-7 mt-5 mt-md-0">
					Todos
				</div>
			</div>
		</>
	);
};

export default App;
