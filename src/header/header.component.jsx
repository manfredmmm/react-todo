import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './header.css';

const HeaderComponent = ({ title, totalTodos }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>{title} ({totalTodos})</h1>
  </header>
);

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
  totalTodos: PropTypes.number.isRequired
};

export default connect(state => ({
  title: state.title,
  totalTodos: state.totalTodos
}))(HeaderComponent);
