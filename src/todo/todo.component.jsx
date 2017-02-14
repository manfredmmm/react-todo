import React, { PropTypes } from 'react';

const Todo = ({ todo, remove, completed }) => (
  <li>
    <h4>{todo.name}</h4>
    <span>{todo.date}</span>
    <p>{todo.description}</p>
    <p>{todo.status}</p>
    <button onClick={() => remove(todo.id)}>Delete</button>
    <button onClick={() => completed(todo.id)}>Completed</button>
  </li>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.string.isRequired,
    date: PropTypes.string
  }).isRequired,
  remove: PropTypes.func.isRequired,
  completed: PropTypes.func.isRequired
};

export default Todo;