import { createStore } from 'redux';
import appReducer from './todo_app.reducer';

const initialState = {
  title: 'TODO title',
  totalTodos: 10
};

const store = createStore(
  appReducer,
  initialState
);

export default store;
