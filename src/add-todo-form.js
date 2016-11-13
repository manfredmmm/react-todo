import { Component, PropTypes } from 'react';

export class AddTodoForm extends Component {
    render() {
        return (
            <form onSubmit={(event) => this._addTodo(event)}>
                <input required type="text" ref="newTodoTitle"></input>
                <button type="submit">Add</button>
            </form>
        );
    }

    _addTodo(event) {
        const newTodoTitle = this.refs.newTodoTitle.value;
        if (newTodoTitle !== '') {
            this.refs.newTodoTitle.value = '';
            this.props.onAddTodo(newTodoTitle);
        }
        event.preventDefault;
    }
}


AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired
};
