import {Component, PropTypes} from 'react';
import {TimedButton} from './timed_button';

export class Counter extends Component {
    // this.props read-only
    // this.state read & write

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            counter: this.props.initialValue
        };
    }

    render() {
        // this.props has all attributes
        const { title } = this.props;
        const { counter } = this.state;

        // Arrow function, no perd el context ni this
        return (
            <div className={this.props.className}>
                <h1>{title}</h1>
                <h2>{counter}</h2>
                <button onClick={ () => { this.increment() }}>+</button>
                <button onClick={ () => { this.decrement() }}>-</button>
                <TimedButton time={3} onClick={ () => { this.reset() }}>
                    <span style={{fontWeight: 'bold'}}>Reset</span>
                </TimedButton>
            </div>
        );
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        });
        this.props.onCounterUpdate(this.state.counter + 1);
    }

    decrement() {
        this.setState({
            counter: this.state.counter -1
        })
        this.props.onCounterUpdate(this.state.counter - 1);
    }

    reset() {
        this.setState({
            counter: this.props.initialValue
        })
        this.props.onCounterUpdate(this.props.initialValue);
    }
}

Counter.propTypes = {
    title: PropTypes.string.isRequired,
    onCounterUpdate: PropTypes.func.isRequired,
    initialValue: PropTypes.number.isRequired,
    className: PropTypes.string
}
