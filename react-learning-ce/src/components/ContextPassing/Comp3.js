import React, { Component } from 'react'
import userContext from './userContext'

class Comp3 extends Component {
    static contextType = userContext
    // It works only with Class Component
    // It can take only one context
    render() {
        return (
            <div>
                I am Comp #3 - Accessing Context using STATIC variable - {this.context}
            </div>
        )
    }
}



export default Comp3
