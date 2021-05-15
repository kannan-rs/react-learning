import React, { Component } from 'react'

class ChildComponent extends Component {
    
    state = {
        from: "child",
        myState: "insideChild",
        isParentCalledMyFn: false
    }

    functionCallBackfromParent() {
        console.log("parent called this function");
        console.log(this.state.myState);
        this.setState({
            isParentCalledMyFn: true
        })
    }

    functionCallBackfromParent = this.functionCallBackfromParent.bind(this)

    render() {
        return (
            <div>
                <button onClick={ () => this.props.parentClickHandler( this.state, this.functionCallBackfromParent )}>Click Me to pass Value to parent</button>
                <div>
                    Is parent called the child Call Back function - 
                    { !this.state.isParentCalledMyFn ? <b>No</b>: <b>Yes</b>}
                </div>
            </div>
        )
    }
}

export default ChildComponent
