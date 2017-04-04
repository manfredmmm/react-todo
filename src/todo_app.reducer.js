const appReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_TITLE':
      return {
        ...state,
        title: action.title
      };
    default:
      return state;
  }
};

export default appReducer;
