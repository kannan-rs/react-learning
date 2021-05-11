import React, { Component } from 'react'
import Comp2 from './Comp2'
import userContext from './userContext'

class Comp1 extends Component {
    render() {
        return (
            <div>
                Comp #1 - Holds Comp#2 - Use context from parent.
                <div> I am component #1 - Accessing Context directly - {this.context}</div>
                <Comp2 />
            </div>
        )
    }
}

Comp1.contextType = userContext

export default Comp1
