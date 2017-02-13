import React, { PropTypes } from 'react';

import styles from './header.css';

const HeaderComponent = ({ title, totalTodos }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>{title} ({totalTodos})</h1>
  </header>
);

HeaderComponent.propTypes = {
  title: PropTypes.string,
  totalTodos: PropTypes.number.isRequired
};

HeaderComponent.defaultProps = {
  title: 'TODO list'
};

export default HeaderComponent;
