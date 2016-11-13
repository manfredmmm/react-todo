import {Component, PropTypes} from 'react';

export class TimedButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        }
    }

    render() {
        const {children} = this.props;
        const {disabled} = this.state;

        return (
            <button onClick={ () => {this.timedAction() }} disabled={disabled}>
                {children}
            </button>
        );
    }

    timedAction() {
        setTimeout(() => {
            this.setState({ disabled: false });
            this.props.onClick();
        }, this.props.time * 1000);
        this.setState({ disabled: true });
    }
}

TimedButton.propTypes = {
    time: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
};
