import React, { PropTypes } from 'react';

const ChangeListFilter = ({ status, changeStatusFilter }) => (
  <button onClick={() => { changeStatusFilter(); }}>
    Seeing {status} list, change it
  </button>
);

ChangeListFilter.propTypes = {
  status: PropTypes.string.isRequired,
  changeStatusFilter: PropTypes.func.isRequired
};

export default ChangeListFilter;
