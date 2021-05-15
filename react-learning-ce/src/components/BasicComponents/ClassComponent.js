import React, { Component } from 'react'



class ClassGreet extends Component {
    render() {
        return <div>
            <p>Example for Hello World Class Component - PASSING & Reading (params) - Passing & Reading - (children)</p>
            <h2>Class Component</h2>
            <p> Params Received is - "<b>{this.props.name ? this.props.name : "Null / Nothing"}</b>"</p>
            
            Children Value I got is: <b>{ this.props.children ? this.props.children: "Nothing" }</b>
            <p><b><i>Note - Children Value can be any HTML or Plain text</i></b></p>
            <hr />
        </div>
    }
}

export default ClassGreet