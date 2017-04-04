import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './header.css';

const changeTitleCreator = title => ({
  type: 'CHANGE_TITLE',
  title
});

const HeaderComponent = ({ title, totalTodos, changeTitle }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>{title} ({totalTodos})</h1>
    <button onClick={() => changeTitle('bas')}>Change title BAS</button>
    <button onClick={() => changeTitle('asd')}>Change title ASD</button>
  </header>
);

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
  totalTodos: PropTypes.number.isRequired,
  changeTitle: PropTypes.func.isRequired
};

export default connect(state => ({
  title: state.title,
  totalTodos: state.totalTodos
}), dispatch => ({
  changeTitle: (title) => {
    dispatch(changeTitleCreator(title));
  }
}))(HeaderComponent);
