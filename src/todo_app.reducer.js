import STATUS from './status';

const appReducer = (state, action) => {
  let newTodos = [];
  let newTodo = {};
  let idx;
  switch (action.type) {
    case 'CHANGE_TITLE':
      return {
        ...state,
        title: action.title
      };
    case 'CHANGE_STATUS':
      if (state.status === STATUS.completed) {
        return {
          ...state,
          status: STATUS.pending
        };
      }
      return {
        ...state,
        status: STATUS.completed
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
    default:
      return state;
  }
};

export default appReducer;
