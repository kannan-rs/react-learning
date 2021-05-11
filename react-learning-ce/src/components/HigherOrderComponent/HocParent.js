import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'


// Common Functionalities betwene components
// Pass Params from Parent Component to HOC and to components {...} using spread
// Passing params from Component to HOC component
export class HocParent extends Component {
    render() {
        return (
            <div>
                HOC Parent <br/>
                <ClickCounter name="Sneghan"/>
                <HoverCounter name="Mithran"/>
            </div>
        )
    }
}

export default HocParent
