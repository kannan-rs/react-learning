import React, { Component } from 'react'
import withCounter from './counterComp'

export class HoverCounter extends Component {

    render() {
        const { counter, incrementCounter } = this.props
        return (
            <div>
                <div onMouseOut={incrementCounter}>{this.props.name} - {counter} number of times Mouse hovered on this element</div>
            </div>
        )
    }
}

export default withCounter(HoverCounter, 10)
