import React from 'react';

import Form from './components/Form';

function App() {

	const todos = [];

	const handleAddTodo = newTodo => {
		console.log(newTodo);
	}

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
