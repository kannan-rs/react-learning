import React, { Component } from 'react'

class ChildComponent extends Component {
    
    state = {
        from: "child",
        myState: "insideChild"
    }

    functionCallBackfromParent() {
        console.log("parent called this function");
        console.log(this.state.myState);
    }

    functionCallBackfromParent = this.functionCallBackfromParent.bind(this)

    render() {
        return (
            <div>
                <button onClick={ () => this.props.parentClickHandler( this.state, this.functionCallBackfromParent )}>Click Me to pass Value to parent</button>
            </div>
        )
    }
}

export default ChildComponent
