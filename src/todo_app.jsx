import React, { Component } from 'react';
import { Provider } from 'react-redux';

import * as moment from 'moment';
import TODOS from './todos';
import STATUS from './status';

import store from './store';

import HeaderComponent from './header/header.component';
import TodoForm from './todo/todo_form.component';
import ChangeListFilter from './todo/change_list_filter.component';
import TodoList from './todo/todo_list.component';
import SearchTodo from './todo/search_todo.component';

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
      description: '',
      date: `${moment()}`
    };
    const newTodos = [
      ...this.state.data,
      newTodo
    ];
    this.setState({ data: newTodos });
  }

  _searchTodo(value) {
    let filteredTodos;
    if (!value) {
      this.setState({ filteredData: '' });
    } else {
      filteredTodos = this.state.data
          .filter(todo => todo.name.toLowerCase().includes(value.toLowerCase()));
      this.setState({ filteredData: filteredTodos });
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <HeaderComponent />
          <TodoForm
            addTodo={value => this._addNewTodo(value)}
          />
          <SearchTodo
            searchTodo={value => this._searchTodo(value)}
          />
          <TodoList />
          <ChangeListFilter />
        </div>
      </Provider>
    );
  }
}

export default TodoApp;
