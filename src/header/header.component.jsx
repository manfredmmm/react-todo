import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './header.css';

const HeaderComponent = ({ title, todos, status }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>{title} (
      {todos.filter(todo => todo.status === status).length}
    )</h1>
  </header>
);

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
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
  title: state.title,
  todos: state.todos,
  status: state.status
}))(HeaderComponent);
