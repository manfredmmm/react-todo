import React, { PropTypes, Component } from 'react';

import HeaderComponent from './header/header.component';
// import TodoList from './todo_list.component';


// ---------------------------------------
// TITLE
// ---------------------------------------
const Title = ({ title, totalTodos }) => <div><h1>{title} ({totalTodos})</h1></div>;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  totalTodos: PropTypes.number.isRequired
};

// ---------------------------------------
// TODO <form>
// ---------------------------------------
/*
<fill> onAlgo={(algo) => this.metodedelpare(algo)} />
 el onAlgo es un prop, que es una funcio
 i a dintre el fill doncs faras this.onAlgo(algo)
 i cridara el metode metodedelpare amb el valor de alg
*/
const TodoForm = ({ addTodo }) => {
  let input;
  return (
    <div>
      <input ref={(node) => { input = node; }} />
      <button onClick={() => { addTodo(input.value); input.value = ''; }}>+</button>
    </div>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
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

class CounterDisplay extends Component {
  render() {
    return (
      <div>
        <span>{this.props.counter}</span>
        <button onClick={() => { this.props.onInc('manfred'); }}>+</button>
        <button onClick={() => { this.props.onDec(); }}>-</button>
      </div>
    );
  }
}

CounterDisplay.propTypes = {
  counter: PropTypes.number.isRequired,
  onInc: PropTypes.func.isRequired,
  onDec: PropTypes.func.isRequired
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  _handleIncrement(name) {
    this.setState({ counter: this.state.counter + 1 });
    console.log(name);
  }
  _handleDecrement() {
    this.setState({ counter: this.state.counter - 1 });
  }
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <CounterDisplay
          counter={this.state.counter}
          onInc={(name) => this._handleIncrement(name)}
          onDec={() => this._handleDecrement()}
        />
      </div>
    );
  }
}

Counter.propTypes = {
  name: PropTypes.string.isRequired
};

Counter.defaultProps = {
  name: 'Default prop counter'
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

  _addNewTodo(val) {
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
        <Title title={'New to-do title'} totalTodos={this.state.data.length} />
        <TodoForm addTodo={this._addNewTodo.bind(this)} />
        <TodoList todos={this.state.data} remove={this._handleRemove.bind(this)} />
        <Counter />
      </div>
    );
  }
}

export default TodoApp;
