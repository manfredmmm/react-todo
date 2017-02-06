import { Component, PropTypes } from 'react';
import { AddTodoForm } from './add-todo-form';
import { Todo } from './todo';

let currentId = 4;

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: 'completed',
      todos: props.todos
    };
  }

  render() {
    const { todos, currentFilter } = this.state;
    const visibleTodos = todos.filter(todo => {
      switch (currentFilter) {
        case 'pending':
          return !todo.completed;
        case 'completed':
          return todo.completed;
        default:
          return true;
      }
    });

    return (
      <div>
        <ul>
          <li><a href="#" onClick={() => this._setFilter('pending')}>Pending</a></li>
          <li><a href="#" onClick={() => this._setFilter('completed')}>Completed</a></li>
        </ul>
        <AddTodoForm onAddTodo={newTodo => this._addTodo(newTodo)}></AddTodoForm>
        <ul>{this._renderTodos(visibleTodos)}</ul>
      </div>
    );
  }

  _renderTodos(todos) {
    return todos.map(todo => <li key={todo.id}><Todo todo={todo}></Todo></li>);
  }

  _setFilter(filter) {
    this.setState({currentFilter: filter});
  }

  _addTodo(newTodoTitle) {
    const newTodo = { id: this._generateId(), title: newTodoTitle, completed: false };
    this.setState({ todos: this.state.todos.concat([newTodo]) });
    //this.setState({ todos: [...this.state.todos, newTodo] });
  }

  _generateId() {
    return currentId++;
  }
}

TodoApp.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
};
