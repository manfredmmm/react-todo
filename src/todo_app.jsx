import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import HeaderComponent from './header/header.component';
import TodoForm from './todo/todo_form.component';
import ChangeListFilter from './todo/change_list_filter.component';
import TodoList from './todo/todo_list.component';
import SearchTodo from './todo/search_todo.component';

const TodoApp = () => (
  <Provider store={store}>
    <div>
      <HeaderComponent />
      <SearchTodo />
      <TodoForm />
      <TodoList />
      <ChangeListFilter />
    </div>
  </Provider>
);

export default TodoApp;
