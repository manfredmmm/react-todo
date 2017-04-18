import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './inputs.css';

const searchCreator = value => ({
  type: 'SEARCH_TODO',
  value
});

class SearchTodo extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  _handleChange(event) {
    this.setState({ search: event.target.value });
    this.props.searchTodo(event.target.value);
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.searchTodo(event.target.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this._handleSubmit(event)}>
          <input
            id="searchInput"
            type="text"
            placeholder="Search TODO by name"
            autoComplete="off"
            value={this.state.search}
            onChange={event => this._handleChange(event)}
            className={styles.input}
          />
        </form>
      </div>
    );
  }
}

SearchTodo.propTypes = {
  searchTodo: PropTypes.func.isRequired
};

export default connect(() => ({
}), dispatch => ({
  searchTodo: (value) => {
    dispatch(searchCreator(value));
  }
}))(SearchTodo);
