import React, { Component } from 'react'

export class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    increment () {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }), () => {
            console.log(this.state.counter)
        })
    }
    render() {
        return (
            <div>
                <div> Current Counter: {this.state.counter}</div>
                <button onClick={ () => this.increment() }>Increment</button>
            </div>
        )
    }
}

export default Counter
