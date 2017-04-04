export const CHANGE_TITLE = 'CHANGE_TITLE';

const titleReducer = (prevState = '', action) => {
  switch (action.type) {
    case CHANGE_TITLE: {
      return 'New title';
    }
    default:
      return prevState;
  }
};

export default titleReducer;
