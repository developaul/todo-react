import React from 'react';
import PropTypes from 'prop-types';

import useForm from '../hooks/useForm';

const Form = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, handleInputReset] = useForm({ description: '' });

    const handleSubmit = e => {
        e.preventDefault();

        if (!description.trim()) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo(newTodo);

        handleInputReset();
    }

    return (
        <>
            <h4>Agregar TODO</h4>

            <hr />

            <form
                onSubmit={handleSubmit}
            >

                <input
                    className="form-control"
                    type="text"
                    name="description"
                    placeholder="Aprender..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />

                <button
                    className="btn btn-outline-primary btn-block mt-1"
                    type="submit"
                >
                    Agregar
                </button>
            </form>
        </>
    );
};

Form.propTypes = {
    handleAddTodo: PropTypes.func.isRequired
};

export default Form;