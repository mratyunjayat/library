import { Component } from "react";
import PropTypes from 'prop-types';

import './Counter.css'

export class Counter extends Component {

    constructor() {
        super();

        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
    }

    render() {
        return (
            <div className="App">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <span className="count">{this.state.counter}</span>
                <div>
                    <button className="reset" onClick={this.resetCounter}>Reset</button>
                </div>

            </div>
        );
    }

    resetCounter() {
        this.setState({
            counter: 0
        })
    }

    increment(by) {
        // console.log("increment from parent clicked" + by);
        console.log(`increment from parent clicked - ${by} `);

        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            });
    }

    decrement(by) {
        // console.log("increment from parent clicked" + by);
        console.log(`decrement from parent clicked - ${by} `);

        this.setState(
            (prevState) => {
                return { counter: prevState.counter - by }
            });
    }

}

class CounterButton extends Component {

    // constructor() {
    //     super();

    //     this.state = {
    //         counter: 0
    //     }

    //     this.increment = this.increment.bind(this);
    //     this.decrement = this.decrement.bind(this);

    // }

    render() {
        return (
            <div className="counter">
          
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>

                {/* <span className="count">{this.state.counter}</span> */}
            </div>
        );
    }

    // increment() {
    //     // console.log("increment clicked");
    //     this.setState({
    //         counter: this.state.counter + this.props.by
    //     });

    //     this.props.incrementMethod(this.props.by);
    // }

    // decrement() {
    //     // console.log("increment clicked");
    //     this.setState({
    //         counter: this.state.counter - this.props.by
    //     });

    //     this.props.decrementMethod(this.props.by);
    // }

}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter;
