import React from 'react';
import ReactDOM from 'react-dom';

window.React = React;
window.ReactDOM = ReactDOM;

import {TodoApp} from './todo-app';

const todos = [
    { id: 1, title: 'Comprar BF1', completed: true },
    { id: 2, title: 'Arreglar TV', completed: false },
    { id: 3, title: 'L4D2 party', completed: false }
];

ReactDOM.render(
    <TodoApp todos={todos}></TodoApp>,
    document.getElementById('app'));

/*<App counters={[
 * { title: "Victories", initialValue: 10 },
 * { title: "Defeats", initialValue: 20 },
 * { title: "Sucks", initialValue: 9000 }
 * ]} />,
 * */
