import React, { Component } from 'react'

class ClassCompConditionalUpdate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0,
             name: ""
        }
    }

    // This function is to take Effect/Side-Effects on 1st time component-render
    componentDidMount = () => {
        document.title = `Clicked ${this.state.count} times`
    }

    // This function is to take Effect/Side-Effects on Subsequent Update on Component-render
    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.count !== this.state.count) {
            console.log("Class - Component - Updating on DOM re-render")
            document.title = `Clicked ${this.state.count} times`
        }
    }
    
    render() {
        const { count } = this.state
        return (
            <div>
                <h2> Class Component to add Effects - Need to do in 2 places for Comp Render</h2>
                <button name="Clicked" onClick={ () => this.setState({count: count + 1})} > Class - Clicked {count} times</button>

                <input type="text" value={ this.state.name} onChange={ (e) => this.setState({ name: e.target.value })} />
            </div>
        )
    }
}

export default ClassCompConditionalUpdate
