import React, { Component } from 'react'

class ClassClick extends Component {
    
    clickHandler() {
        console.log("Clicked inside the class")
    }

    render() {
        return (
            <div>
                <h3> Class Component</h3>
                <h4> Event Handler</h4>
                <h5> Note: See Console for O/P</h5>
                <button onClick={ this.clickHandler }>Class Click</button>
                <hr />
            </div>
        )
    }
}

export default ClassClick
