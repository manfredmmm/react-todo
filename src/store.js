import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import appReducer from './todo_app.reducer';

import TODOS from './todos';
import STATUS from './status';

const initialState = {
  title: 'TODO title',
  status: STATUS.pending,
  totalTodos: TODOS.filter(todo => todo.status === STATUS.pending).length,
  todos: TODOS,
  todoId: 3,
  filteredData: []
};

const middlewares = [
  createLogger()
];

const store = createStore(
  appReducer,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
