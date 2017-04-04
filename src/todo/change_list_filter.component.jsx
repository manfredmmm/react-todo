import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const changeStatusCreator = () => ({
  type: 'CHANGE_STATUS'
});

const ChangeListFilter = ({ status, changeStatusFilter }) => (
  <button onClick={() => changeStatusFilter()}>
    See {status === 'completed' ? 'completed' : 'pending'} todos
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
    dispatch(changeStatusCreator());
  }
}))(ChangeListFilter);
