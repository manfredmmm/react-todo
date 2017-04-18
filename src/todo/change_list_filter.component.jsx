import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import STATUS from './../status';

import styles from './change_list_filter.css';

const filterStatusCreator = () => ({
  type: 'FILTER_STATUS'
});

const ChangeListFilter = ({ status, changeStatusFilter }) => (
  <button className={styles.button} onClick={() => changeStatusFilter()}>
    See {status === STATUS.completed ? 'completed' : 'pending'} todos
  </button>
);

ChangeListFilter.propTypes = {
  status: PropTypes.string.isRequired,
  changeStatusFilter: PropTypes.func.isRequired
};

export default connect(state => ({
  status: state.status
}), dispatch => ({
  changeStatusFilter: () => {
    dispatch(filterStatusCreator());
  }
}))(ChangeListFilter);
