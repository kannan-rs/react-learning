import React, { Component } from 'react'



class Message extends Component {
    constructor() {
        super()
        this.state = {
            message : "Welcome 123"
        }
    }

    changeMessage() {
        this.setState({
            message : "Thanks For Subscribing"
        })
    }
    render() {
        return (<div>
            <h2> Class Component</h2>
            <h3><i>Manage State and Basic Click Event Handler</i></h3>
            <h3>{ this.state.message }</h3>
            <button onClick= { () => this.changeMessage() }>subscribe - (My Event update the state) </button>
            <hr />
        </div>)
    }
}

export default Message