import React, { PropTypes, Component } from 'react';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      editing: false
    };
  }

  _toggleInput(event) {
    event.preventDefault();
    this.textInput.focus();
    this.setState({ editing: !this.state.editing });
  }

  _updateValue(event, entry) {
    event.preventDefault();
    this.props.edit(this.props.todo.id, event.target.value, entry);
  }

  render() {
    // Change status buttons
    let changeStatusButton = null;
    if (this.props.todo.status === 'completed') {
      changeStatusButton = (<button onClick={() => this.props.pending(this.props.todo.id)}>
        Pending
      </button>);
    } else {
      changeStatusButton = (<button onClick={() => this.props.completed(this.props.todo.id)}>
        Completed
      </button>);
    }
    // Display name (input/title)
    const hidden = {
      opacity: 0,
      position: 'absolute',
      margin: 0
    };
    const shown = {
      opacity: 1,
      position: 'absolute',
      margin: 0
    };
    const todo = {
      position: 'relative'
    };
    const nameBlock = {
      height: 30
    };
    const displayName = (
      <div style={nameBlock}>
        <h4
          style={!this.state.editing ? shown : hidden}
          onClick={event => this._toggleInput(event)}
        >
          {this.props.todo.name}
        </h4>
        <input
          style={this.state.editing ? shown : hidden}
          type="text"
          value={this.props.todo.name}
          onChange={event => this._updateValue(event, 'name')}
          onClick={event => this._toggleInput(event)}
          ref={(input) => { this.textInput = input; }}
        />
      </div>
    );

    return (
      <div style={todo}>
        {displayName}
        <span>{this.props.todo.date}</span>
        <p>{this.props.todo.description}</p>
        <p>{this.props.todo.status}</p>
        <button onClick={() => this.props.remove(this.props.todo.id)}>Delete</button>
        {changeStatusButton}
      </div>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.string.isRequired,
    date: PropTypes.string
  }).isRequired,
  remove: PropTypes.func.isRequired,
  pending: PropTypes.func.isRequired,
  completed: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired
};

export default Todo;
