import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Link } from 'react-router-dom';

import store from './store';
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

const TodoView = ({ todo }) => (
  <div>
    <h1>{todo.id}</h1>
    <h2>{todo.name}</h2>
    <p>{todo.description}</p>
    <p>{todo.status}</p>
    <p>{todo.date}</p>
    <Link to="/">Go back</Link>
  </div>
);

TodoView.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
};

const TodoApp = () => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route
          path="/todos/:todoId"
          render={({ match }) =>
            <TodoView
              todo={store.getState().todos.find(todo =>
                parseInt(todo.id, 0) === parseInt(match.params.todoId, 0))
              }
            />
          }
        />
      </div>
    </HashRouter>
  </Provider>
);

export default TodoApp;
