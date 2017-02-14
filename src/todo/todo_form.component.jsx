import React, { PropTypes } from 'react';

// ------------------------------------
// TODO: fer form i enviar el formulari
const TodoForm = ({ addTodo }) => {
  let input;
  return (
    <div>
      <label htmlFor="todoFormInput">New todo: </label>
      <input id="todoFormInput" required ref={(node) => { input = node; }} />
      <button onClick={() => { addTodo(input.value); input.value = ''; }}>Create</button>
    </div>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;
