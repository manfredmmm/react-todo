import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Todo from './todo.component';
import styles from './todo_list.css';

import STATUS from '../status';

const TodoList = ({ todos, status }) => {
  const todoNode = todos
    .filter(todo => todo.status === status)
    .slice()
    .sort((todoA, todoB) => todoA.date < todoB.date)
    .map(todo => (
      <li key={todo.id} className={styles.todo}>
        <Todo todo={todo} />
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
  status: PropTypes.string.isRequired
};

export default connect(state => ({
  todos: state.todos,
  status: state.status
}))(TodoList);
