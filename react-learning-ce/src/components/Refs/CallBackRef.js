import React, { Component } from 'react'

class CallBackRef extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.callBackRef = null;

        this.SetCallBackRef = (element) => {
            this.callBackRef = element
        }
    }

    componentDidMount = () => {
        if(this.callBackRef) {
            this.callBackRef.focus()
        }
    }

    handleClick = () => {
        console.log(this.callBackRef.value)
    }
    
    render() {
        return (
            <React.Fragment>
            <div>
                <input type="text" name="callBackRef" ref={this.SetCallBackRef}></input>
            </div>
            <div><button name="click" onClick={this.handleClick}>Click to Get Value</button></div>
            </React.Fragment>
        )
    }
}

export default CallBackRef
