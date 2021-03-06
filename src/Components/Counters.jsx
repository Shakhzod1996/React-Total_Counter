import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {

    render() {
        const {onReset, counters, onDelete, onIncrement} = this.props
        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2 pl-4 pr-4">
                    Reset
                </button>
                {counters.map(counter =>
                    <Counter 
                    key={counter.id} 
                    value={counter.value} 
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    counter={counter} />)}
            </div>
        );
    }
}

export default Counters;