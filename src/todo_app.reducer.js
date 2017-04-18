import * as moment from 'moment';

import STATUS from './status';

const appReducer = (state, action) => {
  let newTodos = [];
  let filteredTodos;
  let newTodo = {};
  let idx;
  let title;
  switch (action.type) {
    case 'FILTER_STATUS':
      if (state.status === STATUS.completed) {
        title = 'Pending TODOS';
        return {
          ...state,
          status: STATUS.pending,
          title
        };
      }
      title = 'Completed TODOS';
      return {
        ...state,
        status: STATUS.completed,
        title
      };
    case 'REMOVE_TODO':
      newTodos = state.todos.filter(todo => todo.id !== action.id);
      return {
        ...state,
        todos: newTodos
      };
    case 'COMPLETED_TODO':
      idx = state.todos.findIndex(todo => todo.id === action.id);
      newTodo = state.todos[idx];
      newTodo.status = STATUS.completed;
      newTodos = [
        ...state.todos.slice(0, idx),
        newTodo,
        ...state.todos.slice(idx + 1)
      ];
      return {
        ...state,
        todos: newTodos
      };
    case 'PENDING_TODO':
      idx = state.todos.findIndex(todo => todo.id === action.id);
      newTodo = state.todos[idx];
      newTodo.status = STATUS.pending;
      newTodos = [
        ...state.todos.slice(0, idx),
        newTodo,
        ...state.todos.slice(idx + 1)
      ];
      return {
        ...state,
        todos: newTodos
      };
    case 'EDIT_TODO':
      idx = state.todos.findIndex(todo => todo.id === action.id);
      newTodo = {};
      switch (action.entry) {
        case 'name':
          newTodo = {
            ...state.todos[idx],
            name: action.value
          };
          break;
        case 'description':
          newTodo = {
            ...state.todos[idx],
            description: action.value
          };
          break;
        default:
          break;
      }
      newTodos = [
        ...state.todos.slice(0, idx),
        newTodo,
        ...state.todos.slice(idx + 1)
      ];
      return {
        ...state,
        todos: newTodos
      };
    case 'ADD_TODO':
      newTodo = {
        id: state.todoId,
        name: action.value,
        status: STATUS.pending,
        description: '',
        date: `${moment()}`
      };
      newTodos = [
        ...state.todos,
        newTodo
      ];
      return {
        ...state,
        todos: newTodos,
        todoId: state.todoId + 1
      };
    case 'SEARCH_TODO':
      if (!action.value) {
        filteredTodos = [];
      } else {
        filteredTodos = state.todos
          .filter(todo => todo.name.toLowerCase().includes(action.value.toLowerCase()));
      }
      return {
        ...state,
        filteredTodos
      };
    default:
      return state;
  }
};

export default appReducer;
