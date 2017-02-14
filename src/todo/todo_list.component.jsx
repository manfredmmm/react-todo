import React, { PropTypes } from 'react';

import Todo from './todo.component';

const TodoList = ({ todos, remove, completed, pending, status }) => {
  const todoNode = todos
    .filter(todo => todo.status === status)
    .slice().sort((todoA, todoB) => todoA.date < todoB.date)
    .map(todo => <Todo
      todo={todo}
      key={todo.id}
      remove={remove}
      completed={completed}
      pending={pending}
    />);
  return (<ul>{todoNode}</ul>);
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      date: PropTypes.string
    })
  ).isRequired,
  remove: PropTypes.func.isRequired,
  completed: PropTypes.func.isRequired,
  pending: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired
};

export default TodoList;
