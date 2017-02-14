import React, { Component } from 'react';

import * as moment from 'moment';

import HeaderComponent from './header/header.component';
import TodoForm from './todo/todo_form.component';
import ChangeListFilter from './todo/change_list_filter.component';
import TodoList from './todo/todo_list.component';

const TODOS = [
  {
    id: 0,
    name: 'todo item 0',
    description: 'Gochujang chambray shabby chic dreamcatcher put a bird on it, ' +
      'mumblecore iceland stumptown gluten-free marfa. Actually banh mi intelligentsia ' +
      'kogi flexitarian schlitz.',
    status: 'pending',
    date: moment().startOf('day').fromNow()
  }, {
    id: 1,
    name: 'todo item 1',
    description: ' Flexitarian slow-carb fap locavore stumptown. ' +
      'Letterpress 3 wolf moon enamel pin farm-to-table umami, direct trade YOLO asymmetrical ' +
      'squid tousled man bun fanny pack irony.',
    status: 'pending',
    date: moment().subtract(3, 'hours').startOf('hour').fromNow()
  }, {
    id: 2,
    name: 'todo item 2',
    description: 'Fanny pack forage disrupt chia celiac fap. Messenger bag tbh roof party crucifix, ' +
      'put a bird on it mixtape craft beer seitan meh chicharrones yr subway tile.',
    status: 'completed',
    date: moment().startOf('hour').fromNow()
  }
];

const STATUS = { pending: 'pending', completed: 'completed' };

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoId: 3,
      data: TODOS,
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

  render() {
    return (
      <div>
        <HeaderComponent
          totalTodos={this.state.data.filter(todo => todo.status === this.state.status).length}
        />
        <TodoForm addTodo={value => this._addNewTodo(value)} />
        <ChangeListFilter
          status={this.state.status}
          changeStatusFilter={() => this._changeStatusFilter()}
        />
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
