import React, { PropTypes } from 'react';

import Todo from './todo.component';
import styles from './todo_list.css';

import STATUS from '../status';

const TodoList = ({ todos, remove, completed, pending, status, edit }) => {
  const todoNode = todos
    .filter(todo => todo.status === status)
    .slice()
    .sort((todoA, todoB) => todoA.date < todoB.date)
    .map(todo => (
      <li key={todo.id} className={styles.todo}>
        <Todo
          todo={todo}
          remove={remove}
          completed={completed}
          pending={pending}
          edit={edit}
        />
      </li>
    ));
  const listTitle = status === STATUS.pending ? 'Pending tasks' : 'Completed tasks';
  return (
    <div>
      <h2>{listTitle}</h2>
      <ul>{todoNode}</ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      date: PropTypes.string.isRequired
    })
  ).isRequired,
  remove: PropTypes.func.isRequired,
  completed: PropTypes.func.isRequired,
  pending: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  edit: PropTypes.func.isRequired
};

export default TodoList;
