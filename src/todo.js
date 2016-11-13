import { Component, PropTypes } from 'react';
import style from './todo.css';

export class Todo extends Component {
    render() {
        const { todo } = this.props;
        const { title, completed } = todo;

        return (
            <span className={completed ? style.completed : style.pending}>{title}</span>
        )
    }
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired
};
