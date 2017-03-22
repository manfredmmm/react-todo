import React, { PropTypes } from 'react';

import Todo from './todo.component';
import styles from './todo_list.css';

const TodoList = ({ todos, remove, completed, pending, status, edit }) => {
  const todoNode = todos
    .filter(todo => todo.status === status)
    .slice()
    .sort((todoA, todoB) => todoA.date < todoB.date)
    .slice()
    .sort((todoA, todoB) => todoA.name > todoB.name)
    .map(todo => (<li key={todo.id} className={styles.todo}><Todo
      todo={todo}
      remove={remove}
      completed={completed}
      pending={pending}
      edit={edit}
    /></li>));
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
  status: PropTypes.string.isRequired,
  edit: PropTypes.func.isRequired
};

export default TodoList;
