import React, { Component } from 'react'
import withCounter from './counterComp';

class ClickCounter extends Component {
    
    render() {
        const { counter,  incrementCounter} = this.props;
        return (
            <div>
                {this.props.name} - Click Counter - <button name="countClick" onClick={incrementCounter}>Click {counter} number of times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 5)
