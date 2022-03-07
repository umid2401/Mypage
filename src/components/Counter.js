import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div className='container py-2'>
                <button className="btn btn-group ">
                    <button 
                    onClick={this.props.minusChange}
                    className="btn-warning btn px-4">-</button>
                    <button className="btn-light btn">{this.props.counter}</button>
                    <button className="btn-primary btn px-4"
                    onClick={this.props.plusChange}
                    >+</button>
                </button>
            </div>
        );
    }
}

export default Counter;