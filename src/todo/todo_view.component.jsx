import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const TodoView = ({ todo }) => (
  <div>
    <h1>ID: {todo.id}</h1>
    <h2>Name: {todo.name}</h2>
    <p>Description: {todo.description}</p>
    <p>Status: {todo.status}</p>
    <p>Date: {todo.date}</p>
    <Link to="/">Go back</Link>
  </div>
);

TodoView.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired
};

export default TodoView;
