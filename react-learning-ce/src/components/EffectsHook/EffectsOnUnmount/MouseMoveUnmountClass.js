import React, { Component } from 'react'

class MouseMoveUnmountClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x: 0,
             y: 0
        }
    }

    logMousePosition = e => {
        console.log(" Class - Mouse Event logged")
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    componentDidMount = () => {
        console.log("Class - Event Attached once only")
        window.addEventListener('mousemove', this.logMousePosition)
    }

    componentWillUnmount = () => {
        console.log( " Class Component Unmount ")
        window.removeEventListener('mousemove', this.logMousePosition)
    }
    
    render() {
        const { x, y } =  this.state
        return (
            <div>
                Logging Mouse Pointer - X - { y }, Y - { y }
            </div>
        )
    }
}

export default MouseMoveUnmountClass
