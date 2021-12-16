import React, { Component } from 'react';


class Counter extends Component {


    render() {
        console.log(this.props);
        let classes = 'p-2 badge m-2 badge-'
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary'
        return (
            <div>
                <span className={classes}>{this.formatValue()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className='btn btn-secondary m-2'>
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger m-2">
                    Delete
                </button>
            </div>
        );
    }

    formatValue() {
        const { value } = this.props.counter
        return value === 0 ? 'Zero' : value
    }
}

export default Counter;