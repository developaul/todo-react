import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo: { id, desc, done }, index, handleToggle, handleDelete }) => (
    <li className="list-group-item">
        <p
            className={`${done && 'complete'}`}
            onClick={() => handleToggle(id)}
        >
            {index + 1}. {desc}
        </p>

        <button
            className="btn btn-danger"
            onClick={() => handleDelete(id)}
        >
            Borrar
        </button>
    </li>
);

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default TodoListItem;