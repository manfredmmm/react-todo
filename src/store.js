import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import appReducer from './todo_app.reducer';

import TODOS from './todos';
import STATUS from './status';

const initialState = {
  title: 'Pending TODOS',
  status: STATUS.pending,
  todos: TODOS,
  todoId: 3,
  filteredTodos: []
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
