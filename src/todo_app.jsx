import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import store from './store';
import Home from './home.component';
import TodoView from './todo/todo_view.component';
import styles from './todo_app.css';

const TodoApp = () => (
  <Provider store={store}>
    <HashRouter>
      <div className={styles.body}>
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
