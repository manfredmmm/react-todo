import React, { PropTypes, Component } from 'react';

import HeaderComponent from './header/header.component';
// import TodoList from './todo_list.component';


// ---------------------------------------
// TITLE
// ---------------------------------------
const Title = ({ title }) => <div><h1>{title}</h1></div>;

Title.propTypes = {
  title: PropTypes.string.isRequired
};

// ---------------------------------------
// TODO <form>
// ---------------------------------------
const TodoForm = ({ _addTodo }) => {
  // Input Tracker
  let input;
  // Return JSX
  return (
    <div>
      <input ref={(node) => { input = node; }} />
      <button onClick={() => { _addTodo(input.value); input.value = ''; }}>+</button>
    </div>
  );
};

TodoForm.propTypes = {
  _addTodo: PropTypes.func.isRequired
};


// --------------------------------------------
// TODO ITEM
// --------------------------------------------
const Todo = ({ todo, remove }) => <li onClick={() => { remove(todo.id); }}>{todo.text}</li>;

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  remove: PropTypes.func.isRequired
};

// --------------------------------------------
// TODO LIST
// --------------------------------------------
const TodoList = ({ todos, remove }) => {
  // Map through the todos
  const todoNode = todos.map(todo => <Todo todo={todo} key={todo.id} remove={remove} />);
  return (<ul>{todoNode}</ul>);
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  remove: PropTypes.func.isRequired
};

// --------------------------------------------
// APPLICATION
// --------------------------------------------

const todos = [
  { id: 0, text: 'todo item 0' },
  { id: 1, text: 'todo item 1' },
  { id: 2, text: 'todo item 2' }
];

let todoId = 3;

class TodoApp extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: todos
    };
  }

  _addTodo(val) {
    // New todo values
    const todo = { id: todoId += 1, text: val };
    // Push new todo to data
    this.state.data.push(todo);
    // Save this change
    this.setState({ data: this.state.data });
  }

  _handleRemove(id) {
    const remainder = this.state.data.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
      return undefined;
    });
    this.setState({ data: remainder });
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <Title title={'New to-do title'} />
        <TodoForm _addTodo={this._addTodo.bind(this)} />
        <TodoList todos={this.state.data} remove={this._handleRemove.bind(this)} />
      </div>
    );
  }
}

export default TodoApp;
