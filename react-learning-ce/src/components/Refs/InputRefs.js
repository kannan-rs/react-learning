import React, { Component } from 'react'

class InputRefs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: ""
        }

        this.inputRef = React.createRef()
    }

    componentDidMount = () => {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () => {
        console.log(this.inputRef.current.value)
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <div>
                    <input name="inputRefElement" ref={this.inputRef} value={ this.state.name } onChange={this.handleNameChange}></input>
                </div>
                <button onClick={this.clickHandler}>Get Value</button>
            </div>
        )
    }
}

export default InputRefs
