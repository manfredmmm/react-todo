import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './todo_app';

require('./normalize.css');

ReactDOM.render(
  React.createElement(TodoApp),
  document.getElementById('app'),
);
