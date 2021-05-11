import React, { Component } from 'react'

class ClassCompCompare extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

    // This function is to take Effect/Side-Effects on 1st time component-render
    componentDidMount = () => {
        document.title = `Clicked ${this.state.count} times`
    }

    // This function is to take Effect/Side-Effects on Subsequent Update on Component-render
    componentDidUpdate = () => {
        document.title = `Clicked ${this.state.count} times`
    }
    
    render() {
        const { count } = this.state
        return (
            <div>
                <h2> Class Component to add Effects - Need to do in 2 places for Comp Render</h2>
                <button name="Clicked" onClick={ () => this.setState({count: count + 1})} > Class - Clicked {count} times</button>
            </div>
        )
    }
}

export default ClassCompCompare
