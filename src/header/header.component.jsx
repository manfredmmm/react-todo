import React, { PropTypes } from 'react';

import styles from './header.css';

const HeaderComponent = ({ title }) => {
  if (title) {
    return (
      <header className={styles.header}>
        <a>Go back</a>
        <h1 className={styles.title}>{title}</h1>
      </header>
    );
  }
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>TODO list</h1>
    </header>
  );
};

HeaderComponent.propTypes = {
  title: PropTypes.string
};

export default HeaderComponent;
