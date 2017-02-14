import React, { PropTypes, Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }
  _handleChange(event) {
    this.setState({ value: event.target.value });
  }
  _handleSubmit(event) {
    this.props.addTodo(this.state.value);
    this.setState({ value: '' });
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={event => this._handleSubmit(event)}>
        <label htmlFor="todoFormInput">New todo:
          <input
            type="text" id="todoFormInput" required
            autoComplete="off" placeholder="Type todo name"
            value={this.state.value}
            onChange={event => this._handleChange(event)}
          />
        </label>
        <input type="submit" value="Create" />
      </form>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;
