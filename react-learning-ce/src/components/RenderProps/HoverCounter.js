import React, { Component } from 'react'

class HoverCounter extends Component {

    // Below 2 functions are moved to CONTAINER COMPONENT "CounterComponent" for code sharing
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     }
    // }

    // incrementCount = () => {
    //     this.setState((prevState) => {
    //         return { count: prevState.count + 1 } 
    //     })
    // }
    
    render() {
        const { count, incrementCount } = this.props
        return (
            <div onMouseOut={ incrementCount }>
                This Element is mouse hovered { count } time
            </div>
        )
    }
}

export default HoverCounter
