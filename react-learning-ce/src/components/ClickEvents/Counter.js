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
                <h3>Class Component</h3>
                <h4> Constructor - STATE - setState - EventHandler</h4>
                <h5> Increment the state value on Button click </h5>
                <div> Current Counter: {this.state.counter}</div>
                <button onClick={ () => this.increment() }>Increment</button>
                <hr />
            </div>
        )
    }
}

export default Counter
