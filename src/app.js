import {Counter} from './counter';
import {Component, PropTypes} from 'react';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: this.props.counters
        };
    }

    render() {
        const  {counters} = this.state;
        return (<div>
                <h2>summary</h2>
                <ul>
                    {
                        counters.map(function (counter, index) {
                            return <li key={index}>{counter.title}: {counter.value || counter.initialValue}</li>;
                        })
                    }

                </ul>

                <h2>counters</h2>
                {
                    counters.map((counter, index) => {
                        return <Counter 
                            className={index.toString()} 
                            key={index}
                            title={counter.title}
                            initialValue={counter.initialValue}
                            onCounterUpdate={(value) => { this.updateCounter(index, value) }}>
                        </Counter>;
                    })
                }
            </div>);
    }

    updateCounter(index, value) {
        let {counters} = this.state;

        counters[index].value = value;

        this.setState({
            counters: counters
        });
    }
}

App.propTypes = {
    counters: PropTypes.arrayOf(PropTypes.object)
};
