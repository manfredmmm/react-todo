import React from 'react';

import HeaderComponent from './header.component';

import styles from './normalize.css';

function TodoApp() {
  return (
    <div>
      <HeaderComponent />
      <ul>
        <li>Todo item 1</li>
        <li>Todo item 1</li>
        <li>Todo item 1</li>
      </ul>
    </div>
  );
}

export default TodoApp;
