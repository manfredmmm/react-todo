import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Todo from './todo.component';
import styles from './todo_list.css';

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
  return (
    <div>
      <ul className={styles.list}>{todoNode}</ul>
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
  todos: state.filteredTodos.length > 0 ? state.filteredTodos : state.todos,
  status: state.status
}))(TodoList);
