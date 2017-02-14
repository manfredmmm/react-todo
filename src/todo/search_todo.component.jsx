import React, { Component, PropTypes } from 'react';

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
    this.props.searchTodo(event.target.value);
    event.preventDefault();
  }
  _cleanSearch() {
    this.props.searchTodo('');
    this.setState({ search: '' });
  }
  render() {
    return (
      <div>
        <form onSubmit={event => this._handleSubmit(event)}>
          <label htmlFor="searchInput">
            Search by name:
            <input
              id="searchInput" type="text"
              placeholder="Search todo" autoComplete="off"
              value={this.state.search}
              onChange={event => this._handleChange(event)}
            />
          </label>
        </form>
        <button onClick={() => this._cleanSearch()}>X</button>
      </div>
    );
  }
}
SearchTodo.propTypes = {
  searchTodo: PropTypes.func.isRequired
};

export default SearchTodo;
