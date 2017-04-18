import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import styles from './inputs.css';

const addCreator = value => ({
  type: 'ADD_TODO',
  value
});

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
        <input
          type="text"
          id="todoFormInput"
          required
          autoComplete="off"
          placeholder="Create new TODO"
          value={this.state.value}
          onChange={event => this._handleChange(event)}
          className={styles.input}
        />
      </form>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default connect(() => ({
}), dispatch => ({
  addTodo: (value) => {
    dispatch(addCreator(value));
  }
}))(TodoForm);
