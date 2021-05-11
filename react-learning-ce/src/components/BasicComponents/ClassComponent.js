import React, { Component } from 'react'



class ClassGreet extends Component {
    render() {
        return <div>
            <h1>{this.props.name} Class Component</h1>
            {this.props.children}
        </div>
    }
}

export default ClassGreet