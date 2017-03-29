import React, { PropTypes, Component } from 'react';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      editingName: false,
      editingDescription: false
    };
  }

  _toggleInput(event, entry) {
    event.preventDefault();
    switch (entry) {
      case 'name':
        this.nameInput.focus();
        this.setState({ editingName: !this.state.editingName });
        break;
      case 'description':
        this.descriptionInput.focus();
        this.setState({ editingDescription: !this.state.editingDescription });
        break;
      default:
        break;
    }
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
      margin: 0,
      minWidth: 300
    };
    const todo = {
      position: 'relative'
    };
    const editBlock = {
      minHeight: 30
    };
    const displayName = (
      <div style={editBlock}>
        <h4
          style={!this.state.editingName ? shown : hidden}
          onClick={event => this._toggleInput(event, 'name')}
        >
          {this.props.todo.name}
        </h4>
        <input
          style={this.state.editingName ? shown : hidden}
          type="text"
          value={this.props.todo.name}
          onChange={event => this._updateValue(event, 'name')}
          onClick={event => this._toggleInput(event, 'name')}
          ref={(input) => { this.nameInput = input; }}
        />
      </div>
    );
    const displayDescription = (
      <div style={editBlock}>
        <h4
          style={!this.state.editingDescription ? shown : hidden}
          onClick={event => this._toggleInput(event, 'description')}
        >
          {this.props.todo.description}
        </h4>
        <textarea
          style={this.state.editingDescription ? shown : hidden}
          value={this.props.todo.description}
          onChange={event => this._updateValue(event, 'description')}
          onClick={event => this._toggleInput(event, 'description')}
          ref={(input) => { this.descriptionInput = input; }}
        />
      </div>
    );

    return (
      <div style={todo}>
        {displayName}
        <span>{this.props.todo.date}</span>
        {displayDescription}
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
