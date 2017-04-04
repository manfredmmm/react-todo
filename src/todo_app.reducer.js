import STATUS from './status';

const appReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_TITLE':
      return {
        ...state,
        title: action.title
      };
    case 'CHANGE_FILTER':
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
    default:
      return state;
  }
};

export default appReducer;
