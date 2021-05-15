import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    state = {
        message: "parent",
        childCalledParentFn: false
    }

    greetParent( childState, childFunction ) {
        console.log(`this message is from ${this.state.message} and child message is ${childState.from}`)

        this.setState({
            childCalledParentFn: true
        })

        setTimeout( () => childFunction(), 3000)
    }

    greetParent = this.greetParent.bind(this)

    render() {
        return (
            <div>
                <h3>Passing function as Argumant from parent {">"} Child, and Child Calls parent function</h3>
                <h3> Then Child Calls a parent function passing CHILD STATE & CHILD FUNCTION as params</h3>
                <h3> Parent function Calls the child function </h3>

                    Parent {">"} child comp ( parentFunction as params) <br />
                        Child Component Renders {">"} Child Button click {">"} EventTrigger {">"} calls {">"} parentFunction( child state, childFunction) <br />
                            {">"} Control passes to Parent function  {">"} calls childFunction()

                <div><h3>Note: SET-TIMEOUT is added for illustation, Check "console.log" as well</h3></div>
                ----
                <ChildComponent parentClickHandler={this.greetParent}/>
                ----
                <br/>

                <div> <i>Parent function called from child button event - </i> 
                    { !this.state.childCalledParentFn ?  <b>Yet to be triggered</b> : <b>Yes Done</b> } </div>
                <hr />
            </div>
        )
    }
}

export default ParentComponent
