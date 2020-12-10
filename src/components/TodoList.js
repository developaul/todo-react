import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './TodoListItem';

const TodoList = ({ todos, handleToggle, handleDelete }) => (
    <ul className="list-group list-group-flush">
        {
            todos.map((todo, index) => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    index={index}
                    handleToggle={handleToggle}
                    handleDelete={handleDelete}
                />
            ))
        }
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default TodoList;