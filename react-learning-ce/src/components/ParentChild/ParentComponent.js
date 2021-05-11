import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    state = {
        message: "parent"
    }
    greetParent( childState, childFunction ) {
        console.log(`this message is from ${this.state.message} and child message is ${childState.from}`)

        childFunction();
    }

    greetParent = this.greetParent.bind(this)

    render() {
        return (
            <div>
                <ChildComponent parentClickHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
