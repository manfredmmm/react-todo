import React from 'react';

import HeaderComponent from './header/header.component';
import TodoForm from './todo/todo_form.component';
import ChangeListFilter from './todo/change_list_filter.component';
import TodoList from './todo/todo_list.component';
import SearchTodo from './todo/search_todo.component';

const Home = () => (
  <div>
    <HeaderComponent />
    <SearchTodo />
    <TodoForm />
    <TodoList />
    <ChangeListFilter />
  </div>
);

export default Home;
