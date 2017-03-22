import React, { Component } from 'react';

import * as moment from 'moment';
import TODOS from './todos';

import HeaderComponent from './header/header.component';
import TodoForm from './todo/todo_form.component';
import ChangeListFilter from './todo/change_list_filter.component';
import TodoList from './todo/todo_list.component';
import SearchTodo from './todo/search_todo.component';

const STATUS = { pending: 'pending', completed: 'completed' };

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoId: 3,
      data: TODOS,
      filteredData: [],
      status: STATUS.pending
    };
  }

  _addNewTodo(value) {
    const newTodo = {
      id: this.state.todoId += 1,
      name: value,
      status: STATUS.pending,
      date: moment().fromNow()
    };
    const newTodos = [
      ...this.state.data,
      newTodo
    ];
    this.setState({ data: newTodos });
  }

  _handleRemove(id) {
    const newTodos = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: newTodos });
  }

  _changeStatusFilter() {
    if (this.state.status === STATUS.completed) {
      this.setState({ status: STATUS.pending });
    } else {
      this.setState({ status: STATUS.completed });
    }
  }

  _changeTodoStatus(id, status) {
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
    this._changeTodoStatus(id, STATUS.completed);
  }

  _markAsPending(id) {
    this._changeTodoStatus(id, STATUS.pending);
  }

  _searchTodo(value) {
    let filteredTodos;
    if (value.length === 0) {
      this.setState({ filteredData: '' });
    } else {
      filteredTodos = this.state.data
          .filter(todo => todo.name.toLowerCase().includes(value.toLowerCase()));
      this.setState({ filteredData: filteredTodos });
    }
  }

  render() {
    let data = [];
    this.state.filteredData.length > 0 ?
      data = this.state.filteredData :
      data = this.state.data;
    return (
      <div>
        <HeaderComponent
          totalTodos={this.state.data.filter(todo => todo.status === this.state.status).length}
        />
        <TodoForm
          addTodo={value => this._addNewTodo(value)}
        />
        <ChangeListFilter
          status={this.state.status}
          changeStatusFilter={() => this._changeStatusFilter()}
        />
        <SearchTodo
          searchTodo={value => this._searchTodo(value)}
        />
        <TodoList
          todos={data}
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
