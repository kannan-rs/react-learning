import React, { Component } from 'react'

export class RegularComp extends Component {
    shouldComponentUpdate() {
        return true
    }
    
    render() {
        console.log("Reg Comp render")
        return (
            <div>
                This is regular Component - {this.props.name}
            </div>
        )
    }
}

export default RegularComp
