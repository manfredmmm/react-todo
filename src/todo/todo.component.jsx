import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as moment from 'moment';

import styles from './todo.css';

const removeCreator = id => ({
  type: 'REMOVE_TODO',
  id
});

const completedCreator = id => ({
  type: 'COMPLETED_TODO',
  id
});

const pendingCreator = id => ({
  type: 'PENDING_TODO',
  id
});

const editCreator = (id, entry, value) => ({
  type: 'EDIT_TODO',
  id,
  entry,
  value
});

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      editingName: false,
      editingDescription: false,
      timeAgo: null
    };
  }

  getInitialState() {
    return { timeAgo: moment(new Date(this.props.todo.date)).fromNow() };
  }

  componentDidMount() {
    this.todoTimeAgoID = setInterval(
      () => this._updateTimeAgo()
    , 300);
  }

  componentWillUnmount() {
    clearInterval(this.todoTimeAgoID);
  }

  _updateTimeAgo() {
    this.setState({ timeAgo: moment(new Date(this.props.todo.date)).fromNow() });
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
    this.props.edit(this.props.todo.id, entry, event.target.value);
  }

  render() {
    // Change status buttons
    let changeStatusButton = null;
    if (this.props.todo.status === 'completed') {
      changeStatusButton = (
        <button
          onClick={() => this.props.pending(this.props.todo.id)}
          className={styles.button}
        >
          Pending
        </button>
      );
    } else {
      changeStatusButton = (
        <button
          onClick={() => this.props.completed(this.props.todo.id)}
          className={styles.button}
        >
          Completed
        </button>
      );
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
      padding: 0,
      border: 0,
      outline: 'none',
      width: 325,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: '#36454F'
    };
    const todo = {
      position: 'relative'
    };
    const editBlock = {
      minHeight: 18,
      marginBottom: 10
    };
    const icon = {
      marginLeft: 5,
      cursor: 'pointer'
    };
    const displayName = (
      <div style={editBlock}>
        <a href style={!this.state.editingName ? shown : hidden} onClick={event => this._toggleInput(event, 'name')}>
          {this.props.todo.name}
          <i style={icon} className="fa fa-pencil" />
        </a>
        <input
          placeholder="TODO title, click here to change it"
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
        <a href style={!this.state.editingDescription ? shown : hidden} onClick={event => this._toggleInput(event, 'description')}>
          {this.props.todo.description}
        </a>
        <textarea
          placeholder="TODO description, click here to change it"
          style={this.state.editingDescription ? shown : hidden}
          value={this.props.todo.description}
          onChange={event => this._updateValue(event, 'description')}
          onClick={event => this._toggleInput(event, 'description')}
          ref={(input) => { this.descriptionInput = input; }}
          className={styles.textarea}
        />
      </div>
    );

    return (
      <div style={todo}>
        <Link
          to={`/todos/${this.props.todo.id}`}
          className={styles.link}
        >
          <span>{this.props.todo.name}</span>
          <i className="fa fa-chevron-right" />
        </Link>
        {displayName}
        {displayDescription}
        <span className={styles.hour}>{this.state.timeAgo}</span>
        <button
          onClick={() => this.props.remove(this.props.todo.id)}
          className={styles.button}
        >
          Delete
        </button>
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
    date: PropTypes.string.isRequired
  }).isRequired,
  remove: PropTypes.func.isRequired,
  pending: PropTypes.func.isRequired,
  completed: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired
};

export default connect(() => ({
}), dispatch => ({
  remove: (id) => {
    dispatch(removeCreator(id));
  },
  completed: (id) => {
    dispatch(completedCreator(id));
  },
  pending: (id) => {
    dispatch(pendingCreator(id));
  },
  edit: (id, entry, value) => {
    dispatch(editCreator(id, entry, value));
  }
}))(Todo);
