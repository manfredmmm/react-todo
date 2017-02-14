import React, { PropTypes, Component } from 'react';

class ChangeListFilter extends Component {
  _inverseStatus() {
    if (this.props.status === 'completed') {
      return 'pending';
    }
    return 'completed';
  }
  render() {
    return (
      <button onClick={() => this.props.changeStatusFilter()}>
        See {this._inverseStatus()} todos
      </button>
    );
  }
}

ChangeListFilter.propTypes = {
  status: PropTypes.string.isRequired,
  changeStatusFilter: PropTypes.func.isRequired
};

export default ChangeListFilter;
