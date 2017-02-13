import React, { PropTypes, Component } from 'react';

import HeaderComponent from './header/header.component';
// import TodoList from './todo_list.component';

// ---------------------------------------
// TODO <form>
// ---------------------------------------
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
const Todo = ({ todo, remove, completed }) => (
  <li>
    <h4>{todo.name}</h4>
    <p>{todo.description}</p>
    <p>{todo.status}</p>
    <button onClick={() => remove(todo.id)}>Delete</button>
    <button onClick={() => completed(todo.id)}>Completed</button>
  </li>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.string.isRequired
  }).isRequired,
  remove: PropTypes.func.isRequired,
  completed: PropTypes.func.isRequired
};

// --------------------------------------------
// TODO LIST
// --------------------------------------------
const TodoList = ({ todos, remove, completed, status }) => {
  const todoNode = todos
    .filter(todo => todo.status === status)
    .map(todo => <Todo todo={todo} key={todo.id} remove={remove} completed={completed} />
  );
  return (<ul>{todoNode}</ul>);
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  remove: PropTypes.func.isRequired,
  completed: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired
};

// --------------------------------------------
// APPLICATION
// --------------------------------------------

const todos = [
  {
    id: 0,
    name: 'todo item 0',
    description: 'Gochujang chambray shabby chic dreamcatcher put a bird on it, ' +
      'mumblecore iceland stumptown gluten-free marfa. Actually banh mi intelligentsia ' +
      'kogi flexitarian schlitz.',
    status: 'pending'
  }, {
    id: 1,
    name: 'todo item 1',
    description: ' Flexitarian slow-carb fap locavore stumptown. ' +
      'Letterpress 3 wolf moon enamel pin farm-to-table umami, direct trade YOLO asymmetrical ' +
      'squid tousled man bun fanny pack irony. ',
    status: 'pending'
  }, {
    id: 2,
    name: 'todo item 2',
    description: 'Fanny pack forage disrupt chia celiac fap. Messenger bag tbh roof party crucifix, ' +
      'put a bird on it mixtape craft beer seitan meh chicharrones yr subway tile.',
    status: 'completed'
  }
];

let todoId = 3;

class TodoApp extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: todos,
      status: 'pending'
    };
  }

  _addNewTodo(value) {
    // New todo values
    const todo = { id: todoId += 1, name: value, status: 'pending' };
    // Push new todo to data
    this.state.data.push(todo);
    // Save this change
    this.setState({ data: this.state.data });
  }

  _handleRemove(id) {
    const newTodos = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: newTodos });
  }

  _changeStatus(id, status) {
    const idx = this.state.data.findIndex(todo => todo.id === id);
    const newTodo = this.state.data[idx];
    newTodo.status = status;
    const newTodos = [
      ...this.state.data.slice(0, idx),
      newTodo,
      ...this.state.data.slice(idx + 1)
    ];
    this.setState({ data: newTodos });
  }

  _markAsCompleted(id) {
    this._changeStatus(id, 'completed');
  }

  _markAsPending(id) {
    this._changeStatus(id, 'pending');
  }

  render() {
    return (
      <div>
        <HeaderComponent totalTodos={this.state.data.length} />
        <TodoForm addTodo={value => this._addNewTodo(value)} />
        <TodoList
          todos={this.state.data}
          remove={id => this._handleRemove(id)}
          completed={id => this._markAsCompleted(id)}
          pending={id => this._markAsPending(id)}
          status={this.state.status}
        />
      </div>
    );
  }
}

export default TodoApp;
